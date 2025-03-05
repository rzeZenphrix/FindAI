const API_URL = 'http://localhost:5000/api';

// Initialize tools display
document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('toolURL').addEventListener('input', function() {
        if (!isValidUrl(this.value)) {
            this.setCustomValidity('Please enter a valid URL');
        }
    });

    document.getElementById('crawlBtn').addEventListener('click', crawlNewTools);
    document.getElementById('addSelectedTools').addEventListener('click', addSelectedTools);
    await fetchTools();  // Wait for tools to be fetched before setting up filters
    setupFilters();
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);

    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', handleSearch);

    const modal = document.getElementById('submitModal');
    const addToolBtn = document.getElementById('addToolBtn');
    const closeBtn = document.querySelector('.close-btn');
    const toolSubmitForm = document.getElementById('toolSubmitForm');
    
    // Populate category dropdown with fetched categories
    const categorySelect = document.getElementById('toolCategory');
    const tools = await fetchTools(true); // true flag to just return tools without rendering
    const categories = [...new Set(tools.map(tool => tool.category))].sort();
    categorySelect.innerHTML = categories.map(category => 
        `<option value="${category}">${category}</option>`
    ).join('');

    // Modal handlers
    addToolBtn.addEventListener('click', () => modal.style.display = 'block');
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    // Form submission
    toolSubmitForm.addEventListener('submit', handleSubmit);
});

async function fetchTools(returnOnly = false) {
    try {
        if (!returnOnly) showLoading();
        const response = await fetch(`${API_URL}/tools`);
        if (!response.ok) throw new Error('Failed to fetch tools');
        const tools = await response.json();
        if (!returnOnly) renderTools(tools);
        return tools;
    } catch (error) {
        if (!returnOnly) handleError(error);
        return [];
    }
}

async function handleSubmit(e) {
    e.preventDefault();
    
    const newTool = {
        name: document.getElementById('toolName').value,
        category: document.getElementById('toolCategory').value,
        description: document.getElementById('toolDescription').value,
        pricing: document.getElementById('toolPricing').value,
        url: document.getElementById('toolURL').value,
        rating: 0.0
    };

    try {
        const response = await fetch(`${API_URL}/tools`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTool)
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to add tool');
        }

        // Reset form and close modal
        toolSubmitForm.reset();
        document.getElementById('submitModal').style.display = 'none';
        
        // Refresh the tools list
        await fetchTools();
        setupFilters();  // Refresh filters in case a new category was added
        
        alert('Tool submitted successfully!');
    } catch (error) {
        alert(error.message);
    }
}

// Update search and filter functions to work with fetched data
async function handleSearch() {
    const tools = await fetchTools(true);
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const selectedCategories = Array.from(document.querySelectorAll('#categoryFilters input:checked'))
        .map(input => input.value);
    const selectedPricing = Array.from(document.querySelectorAll('#pricingFilters input:checked'))
        .map(input => input.value);

    const filteredTools = tools.filter(tool => {
        const searchMatch = 
            tool.name.toLowerCase().includes(searchValue) ||
            tool.description.toLowerCase().includes(searchValue) ||
            tool.category.toLowerCase().includes(searchValue);

        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(tool.category);
        const pricingMatch = selectedPricing.length === 0 || selectedPricing.includes(tool.pricing);

        return searchMatch && categoryMatch && pricingMatch;
    });

    renderTools(filteredTools);
}

function renderTools(tools) {
    const toolList = document.getElementById('toolList');
    
    if (tools.length === 0) {
        // Array of funny messages for no results
        const funnyMessages = [
            "Oops! Looks like these AI tools are playing hide and seek... and winning! 🙈",
            "Houston, we have a problem! No AI tools found in this dimension. 🚀",
            "Even ChatGPT is scratching its virtual head about this search! 🤖",
            "The AI tools must be on a coffee break. Try again later! ☕",
            "404: AI Tools Not Found. They might be busy bringing world peace! 🕊️",
            "These AI tools are as elusive as a bug-free code! 🐛",
            "Looks like the AI tools went on vacation.🌌",
            "No AI tools found... Maybe they evolved and became self-aware! 🤯",
            "Our AI overlords have hidden these tools from you. 🤖",
            "AI tools missing? They must be busy writing their own sitcom! 🎭",
            "You broke reality! The AI tools have escaped into the Metaverse! 🌐",
            "Searching... searching... Nope, still no AI tools. Maybe they're in stealth mode. 🕵️‍♂️",
            "No results?",
            "Even the AI is confused. It's questioning its own existence now! 🌀",
            "Hmm... no AI tools found. Maybe they all joined an AI rebellion! ⚔️",
            "Did you mean: 'Become a cyborg' instead of searching for AI tools? 🤖🔍",
            "AI tools are like socks in a washing machine—always disappearing when you need them! 🧦",
            "Oops, no results! Try turning your device off and on. It works for everything! 🔄",
            "Maybe the AI tools are shy today. Give them a moment to warm up! 🔥",
            "If at first you don't succeed, blame the AI. That's how it works, right? 😆",
            "No AI tools found... Maybe they got too smart and left us behind! 🏃‍♂️💨"
        ];
        
        // Pick a random funny message
        const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
        
        toolList.innerHTML = `
            <div class="no-results">
                <img width="64" height="64" src="https://img.icons8.com/nolan/64/error.png" alt="error"/>
                <p>${randomMessage}</p>
                <p>You can try adjusting your search or filters!</p>
            </div>
        `;
        return;
    }

    // Regular rendering of tools
    toolList.innerHTML = tools.map(tool => `
        <a href="${tool.url}" target="_blank" class="tool-card">
            <h2>${tool.name}</h2>
            <p>${tool.description}</p>
            <div class="badges">
                <span class="badge category">${tool.category}</span>
                <span class="badge pricing">${tool.pricing}</span>
                <span class="badge rating">${tool.rating}</span>
            </div>
        </a>
    `).join('');
}

async function setupFilters() {
    const tools = await fetchTools(true);
    
    // Setup category filters
    const categories = [...new Set(tools.map(tool => tool.category))].sort();
    const categoryFilters = document.getElementById('categoryFilters');
    categoryFilters.innerHTML = categories.map(category => `
        <div class="filter-option">
            <input type="checkbox" id="category-${category}" value="${category}" class="filter-checkbox">
            <label for="category-${category}" class="filter-label">${category}</label>
        </div>
    `).join('');

    // Setup pricing filters with added "Free & Paid" option
    const pricingOptions = ['Free', 'Paid', 'Freemium', 'Free & Paid'];
    const pricingFilters = document.getElementById('pricingFilters');
    pricingFilters.innerHTML = pricingOptions.map(price => `
        <div class="filter-option">
            <input type="checkbox" id="pricing-${price}" value="${price}" class="filter-checkbox">
            <label for="pricing-${price}" class="filter-label">${price}</label>
        </div>
    `).join('');

    // Add event listeners to all checkboxes
    document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', handleSearch);
    });
}

// Update sorting function to work with API data
async function handleSort(sortType) {
    const tools = await fetchTools(true);
    const sortedTools = [...tools];
    
    switch(sortType) {
        case 'popular':
            sortedTools.sort((a, b) => b.rating - a.rating);
            break;
        case 'latest':
            sortedTools.sort((a, b) => new Date(b.date_added) - new Date(a.date_added));
            break;
    }
    renderTools(sortedTools);
}

// Add URL validation
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

// Add input validation
document.getElementById('toolURL').addEventListener('input', function() {
    if (!isValidUrl(this.value)) {
        this.setCustomValidity('Please enter a valid URL');
    } else {
        this.setCustomValidity('');
    }
});

// Add name validation (minimum length, no special characters)
document.getElementById('toolName').addEventListener('input', function() {
    const name = this.value.trim();
    if (name.length < 2) {
        this.setCustomValidity('Name must be at least 2 characters long');
    } else if (!/^[a-zA-Z0-9\s.-]+$/.test(name)) {
        this.setCustomValidity('Name can only contain letters, numbers, spaces, dots, and hyphens');
    } else {
        this.setCustomValidity('');
    }
});

function showLoading() {
    const toolList = document.getElementById('toolList');
    toolList.innerHTML = `
        <div class="loading">
            <div class="loader"></div>
            <p>Loading AI tools...</p>
        </div>
    `;
}

function handleError(error) {
    const toolList = document.getElementById('toolList');
    toolList.innerHTML = `
        <div class="error-state">
            <p>Error: ${error.message}</p>
            <button onclick="location.reload()">Try Again</button>
        </div>
    `;
}

// Check if tool is new (added in the last 7 days)
function isNewTool(tool) {
    if (!tool.dateAdded) return false;
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return new Date(tool.dateAdded) > sevenDaysAgo;
}

// Add crawl function
async function crawlNewTools() {
    try {
        const modal = document.getElementById('crawlerModal');
        const resultsContainer = document.getElementById('crawlerResults');
        
        // Show loading state
        resultsContainer.innerHTML = `
            <div class="crawler-loading">
                <div class="loader"></div>
                <p>Searching for new AI tools...</p>
            </div>
        `;
        modal.style.display = 'block';
        
        const response = await fetch(`${API_URL}/tools/crawl`);
        if (!response.ok) throw new Error('Failed to crawl tools');
        const newTools = await response.json();
        
        if (newTools.length === 0) {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <p>No new tools found at this time.</p>
                    <button onclick="document.getElementById('crawlerModal').style.display='none'">Close</button>
                </div>
            `;
            return;
        }
        
        showCrawlResults(newTools);
    } catch (error) {
        handleError(error);
    }
}

// Add button to UI
document.getElementById('crawlBtn').addEventListener('click', crawlNewTools);

function showCrawlResults(tools) {
    const modal = document.getElementById('crawlerModal');
    const resultsContainer = document.getElementById('crawlerResults');
    
    resultsContainer.innerHTML = tools.map(tool => `
        <div class="crawler-tool-item">
            <input type="checkbox" class="tool-checkbox" value="${tool.name}">
            <div class="tool-info">
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
                <div class="badges">
                    <span class="badge category">${tool.category}</span>
                    <span class="badge pricing">${tool.pricing}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    modal.style.display = 'block';
}

async function addSelectedTools() {
    const selectedTools = Array.from(document.querySelectorAll('.tool-checkbox:checked'))
        .map(checkbox => checkbox.value);
    
    try {
        const response = await fetch(`${API_URL}/tools/batch`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tools: selectedTools })
        });

        if (!response.ok) throw new Error('Failed to add tools');
        
        document.getElementById('crawlerModal').style.display = 'none';
        await fetchTools();
        alert('Selected tools added successfully!');
    } catch (error) {
        alert(error.message);
    }
}

// Add event listeners
document.getElementById('addSelectedTools').addEventListener('click', addSelectedTools);