const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

class AICrawler {
    constructor() {
        this.sources = [
            'https://github.com/topics/artificial-intelligence',
            'https://huggingface.co/models',
            'https://www.futurepedia.io/ai-tools',
            'https://www.producthunt.com/topics/artificial-intelligence',
            'https://alternativeto.net/software/chatgpt/',
            'https://paperswithcode.com/methods',
            'https://www.kaggle.com/code',
            'https://toolify.ai',
            'https://theresanaiforthat.com/tools/'
        ];

        this.categoryKeywords = {
            'music generation': ['music', 'audio generation', 'song', 'melody', 'composition', 'sound synthesis', 'musical'],
            'chatbot': ['chat', 'conversation', 'dialogue', 'assistant', 'messaging'],
            'image generation': ['image', 'art', 'drawing', 'painting', 'stable diffusion', 'visual', 'picture'],
            'code assistant': ['code', 'programming', 'developer', 'ide', 'software', 'development'],
            'video generation': ['video', 'animation', 'motion', 'film', 'movie'],
            'audio processing': ['audio', 'sound', 'voice', 'speech', 'podcast'],
            'text to speech': ['tts', 'voice synthesis', 'speech synthesis', 'text-to-speech'],
            'content writing': ['writing', 'content', 'copywriting', 'blog', 'article'],
            'business': ['business', 'enterprise', 'company', 'workflow'],
            'education': ['education', 'learning', 'teaching', 'study'],
            'gaming': ['game', 'gaming', 'play'],
            'robotics': ['robot', 'automation', 'control'],
            'medical': ['medical', 'healthcare', 'diagnosis', 'health'],
            'cybersecurity': ['security', 'cyber', 'protection', 'threat'],
            'finance': ['finance', 'trading', 'investment', 'stock'],
            'chemistry': ['chemistry', 'molecule', 'compound'],
            'machine learning': ['ml', 'machine learning', 'deep learning'],
            'nlp': ['nlp', 'natural language', 'text processing'],
            'computer vision': ['vision', 'image processing', 'object detection']
        };
    }

    async crawl() {
        try {
            const newTools = [];
            let totalProcessed = 0;
            
            for (const source of this.sources) {
                console.log(`Crawling ${source} (${++totalProcessed}/${this.sources.length})`);
                const tools = await this.crawlSource(source);
                console.log(`Found ${tools.length} tools from ${source}`);
                newTools.push(...tools);
            }

            const filteredTools = this.filterAndCleanTools(newTools);
            console.log(`Total unique tools found: ${filteredTools.length}`);
            return filteredTools;
        } catch (error) {
            console.error('Crawling error:', error);
            return [];
        }
    }

    async crawlSource(url) {
        const browser = await puppeteer.launch({
            headless: "new",
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins,site-per-process'
            ]
        });
        
        try {
            const page = await browser.newPage();
            
            // Set a more realistic user agent
            await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
            
            // Set extra headers
            await page.setExtraHTTPHeaders({
                'Accept-Language': 'en-US,en;q=0.9',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
            });

            // Random delay
            await new Promise(resolve => setTimeout(resolve, Math.random() * 3000 + 2000));
            
            await page.goto(url, { 
                waitUntil: ['networkidle0', 'domcontentloaded'],
                timeout: 60000 
            });
            
            // Wait for dynamic content to load
            await page.waitForFunction(() => {
                const items = document.querySelectorAll('article, .card, .item, .tool, .Box-row, .tool-card');
                return items.length > 0;
            }, { timeout: 10000 }).catch(() => console.log('Timeout waiting for items to load'));
            
            // Get the actual content
            const tools = await page.evaluate((selectors) => {
                const items = document.querySelectorAll(selectors.itemContainer);
                return Array.from(items).map(item => ({
                    name: item.querySelector(selectors.name)?.textContent?.trim() || '',
                    description: item.querySelector(selectors.description)?.textContent?.trim() || '',
                    url: item.querySelector(selectors.url)?.href || '',
                    tags: item.querySelector(selectors.tags)?.textContent?.trim() || '',
                    pricing: item.querySelector(selectors.pricing)?.textContent?.trim() || 'Unknown',
                    rating: parseFloat(item.querySelector(selectors.rating)?.textContent) || 4.0
                })).filter(tool => tool.name && tool.description);
            }, this.getSelectorsForSource(url));
            
            return tools.map(tool => ({
                ...tool,
                category: this.detectCategory(tool.tags, tool.name, tool.description)
            }));
        } catch (error) {
            console.error(`Error crawling ${url}:`, error.message);
            return [];
        } finally {
            await browser.close();
        }
    }

    getSelectorsForSource(url) {
        if (url.includes('github.com')) {
            return {
                itemContainer: 'article.Box-row',
                name: 'h3.h3 a',
                description: 'p.color-fg-muted',
                url: 'h3.h3 a',
                tags: '.topic-tag',
                pricing: '.Label',
                rating: '[data-view-component="true"].octicon-star'
            };
        } else if (url.includes('futurepedia.io')) {
            return {
                itemContainer: '.grid-cols-1 > div',
                name: 'h2, .text-xl',
                description: 'p.text-sm',
                url: 'a[href^="https"]',
                tags: '.text-xs',
                pricing: '.pricing-tag',
                rating: '.rating'
            };
        }
        // Default selectors for other sites
        return {
            itemContainer: 'article, .card, .item, .tool, [role="article"]',
            name: 'h2, h3, .title, .name, [role="heading"]',
            description: 'p, .description, .summary, [role="contentinfo"]',
            url: 'a[href^="https"]',
            tags: '.tags, .categories, .topics, .keywords',
            pricing: '.price, .pricing, .plan, .cost',
            rating: '.rating, .stars, .score'
        };
    }

    normalizeUrl(href, baseUrl) {
        try {
            return new URL(href, baseUrl).href;
        } catch {
            return href;
        }
    }

    detectCategory(text, name = '', description = '') {
        // Combine all text for better category detection
        const combinedText = `${text} ${name} ${description}`.toLowerCase();
        
        // Define category scores
        const scores = {};
        
        for (const [category, keywords] of Object.entries(this.categoryKeywords)) {
            scores[category] = 0;
            for (const keyword of keywords) {
                // Count occurrences of each keyword
                const regex = new RegExp(keyword.toLowerCase(), 'g');
                const count = (combinedText.match(regex) || []).length;
                scores[category] += count;
                
                // Boost score for exact matches in name
                if (name.toLowerCase().includes(keyword.toLowerCase())) {
                    scores[category] += 2;
                }
            }
        }
        
        // Find category with highest score
        let maxScore = 0;
        let bestCategory = 'AI Development';
        
        for (const [category, score] of Object.entries(scores)) {
            if (score > maxScore) {
                maxScore = score;
                bestCategory = category.charAt(0).toUpperCase() + category.slice(1);
            }
        }
        
        return bestCategory;
    }

    detectPricing(pricingText) {
        if (!pricingText) return 'Unknown';
        
        pricingText = pricingText.toLowerCase();
        if (pricingText.includes('free') && pricingText.includes('paid')) {
            return 'Freemium';
        } else if (pricingText.includes('free')) {
            return 'Free';
        } else if (pricingText.includes('paid')) {
            return 'Paid';
        }
        
        return 'Unknown';
    }

    isValidTool(tool) {
        // Basic validation
        if (!tool.name || !tool.description || !tool.url) {
            return false;
        }

        // Name validation
        if (this.isInvalidName(tool.name) || tool.name.length < 2 || tool.name.length > 100) {
            return false;
        }

        // Description validation
        if (this.isInvalidDescription(tool.description) || 
            tool.description.length < 10 || 
            tool.description.length > 1000) {
            return false;
        }

        // URL validation
        if (!this.isValidUrl(tool.url)) {
            return false;
        }

        // Check for AI relevance
        if (!this.isAIRelated(tool)) {
            return false;
        }

        // Check for duplicates
        return !this.isDuplicate(tool);
    }

    isInvalidName(name) {
        const invalidPatterns = [
            'Navigation Menu',
            'Footer',
            'Header',
            'Menu',
            'Loading',
            'Error',
            'undefined',
            'null',
            '[object Object]',
            'Advertisement',
            'Cookie Policy',
            'Privacy Policy',
            'Terms of Service'
        ];

        return invalidPatterns.some(pattern => 
            name.toLowerCase().includes(pattern.toLowerCase())
        );
    }

    isInvalidDescription(description) {
        const invalidPatterns = [
            'self.__wrap',
            'undefined',
            'null',
            '[object Object]',
            'Advertisement',
            'Loading...',
            'Error occurred',
            'Please wait',
            'Cookie Policy',
            'Privacy Policy'
        ];

        return invalidPatterns.some(pattern => 
            description.toLowerCase().includes(pattern.toLowerCase())
        );
    }

    isValidUrl(url) {
        try {
            const parsedUrl = new URL(url);
            
            // Check for valid protocol
            if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
                return false;
            }

            // Check for excluded domains
            const excludedDomains = [
                'example.com',
                'test.com',
                'localhost',
                'javascript:void',
                '#',
                'about:blank'
            ];

            if (excludedDomains.some(domain => parsedUrl.hostname.includes(domain))) {
                return false;
            }

            // Check for common file extensions that aren't web pages
            const invalidExtensions = ['.jpg', '.png', '.gif', '.pdf', '.zip'];
            if (invalidExtensions.some(ext => url.toLowerCase().endsWith(ext))) {
                return false;
            }

            return true;
        } catch {
            return false;
        }
    }

    isAIRelated(tool) {
        const combinedText = `${tool.name} ${tool.description} ${tool.tags}`.toLowerCase();
        
        // Keywords that indicate AI relevance
        const aiKeywords = [
            'ai', 'artificial intelligence', 'machine learning', 'ml', 'deep learning',
            'neural', 'model', 'gpt', 'llm', 'transformer', 'bot', 'automation',
            'recognition', 'prediction', 'classification', 'generation', 'synthesis',
            'nlp', 'computer vision', 'robotics', 'autonomous', 'intelligent'
        ];

        // Count how many AI-related keywords are present
        const keywordCount = aiKeywords.reduce((count, keyword) => {
            return count + (combinedText.includes(keyword) ? 1 : 0);
        }, 0);

        // Require at least 2 AI-related keywords
        return keywordCount >= 2;
    }

    isDuplicate(tool) {
        // Normalize the tool name and URL for comparison
        const normalizedName = tool.name.toLowerCase().trim();
        const normalizedUrl = this.normalizeUrl(tool.url);

        // Check for exact name matches
        if (this.existingTools.some(existing => 
            existing.name.toLowerCase().trim() === normalizedName
        )) {
            return true;
        }

        // Check for similar names using Levenshtein distance
        if (this.existingTools.some(existing => 
            this.getLevenshteinDistance(
                existing.name.toLowerCase().trim(),
                normalizedName
            ) <= 3
        )) {
            return true;
        }

        // Check for URL matches
        return this.existingTools.some(existing => 
            this.normalizeUrl(existing.url) === normalizedUrl
        );
    }

    getLevenshteinDistance(str1, str2) {
        const matrix = Array(str2.length + 1).fill(null)
            .map(() => Array(str1.length + 1).fill(null));

        for (let i = 0; i <= str1.length; i++) {
            matrix[0][i] = i;
        }
        for (let j = 0; j <= str2.length; j++) {
            matrix[j][0] = j;
        }

        for (let j = 1; j <= str2.length; j++) {
            for (let i = 1; i <= str1.length; i++) {
                const substitutionCost = str1[i - 1] === str2[j - 1] ? 0 : 1;
                matrix[j][i] = Math.min(
                    matrix[j][i - 1] + 1, // deletion
                    matrix[j - 1][i] + 1, // insertion
                    matrix[j - 1][i - 1] + substitutionCost // substitution
                );
            }
        }

        return matrix[str2.length][str1.length];
    }

    normalizeUrl(url) {
        try {
            const parsed = new URL(url);
            // Remove trailing slashes and convert to lowercase
            return parsed.origin.toLowerCase() + 
                   parsed.pathname.toLowerCase().replace(/\/+$/, '');
        } catch {
            return url.toLowerCase();
        }
    }

    filterAndCleanTools(tools) {
        return tools.filter(tool => {
            // Remove duplicates and invalid entries
            return (
                tool.name &&
                tool.url &&
                tool.description &&
                tool.url.startsWith('http')
            );
        });
    }
}

module.exports = new AICrawler(); 