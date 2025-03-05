const AI_TOOLS = [
    {
        name: "ChatGPT",
        category: "Chatbot",
        description: "Conversational AI by OpenAI",
        pricing: "Free & Paid",
        rating: 4.8,
        url: "https://chat.openai.com"
    },
    {
        name: "Midjourney",
        category: "Image Generation",
        description: "AI-powered image creator",
        pricing: "Paid",
        rating: 4.7,
        url: "https://www.midjourney.com"
    },
    {
        name: "GitHub Copilot",
        category: "Code Assistant",
        description: "AI coding assistant by GitHub",
        pricing: "Paid",
        rating: 4.6,
        url: "https://github.com/features/copilot"
    },
    {
        name: "Claude",
        category: "Chatbot",
        description: "Advanced AI assistant by Anthropic",
        pricing: "Free & Paid",
        rating: 4.7,
        url: "https://claude.ai/claude"
    },
    {
        name: "DALL-E 3",
        category: "Image Generation",
        description: "OpenAI's latest image generation model",
        pricing: "Paid",
        rating: 4.8,
        url: "https://openai.com/dall-e-3"
    },
    {
        name: "Stable Diffusion",
        category: "Image Generation",
        description: "Open-source image generation model",
        pricing: "Free",
        rating: 4.6,
        url: "https://stability.ai"
    },
    {
        name: "Jasper",
        category: "Content Writing",
        description: "AI writing assistant for marketing",
        pricing: "Paid",
        rating: 4.5,
        url: "https://www.jasper.ai"
    },
    {
        name: "Anthropic Claude 2",
        category: "Chatbot",
        description: "Advanced AI model with improved capabilities",
        pricing: "Paid",
        rating: 4.8,
        url: "https://claude.ai/claude-2"
    },
    {
        name: "Leonardo.ai",
        category: "Image Generation",
        description: "AI art generation platform",
        pricing: "Freemium",
        rating: 4.5,
        url: "https://leonardo.ai"
    },
    {
        name: "Copy.ai",
        category: "Content Writing",
        description: "AI copywriting tool",
        pricing: "Freemium",
        rating: 4.4,
        url: "https://www.copy.ai"
    },
    {
        name: "Runway",
        category: "Video Generation",
        description: "AI video editing and generation",
        pricing: "Paid",
        rating: 4.6,
        url: "https://runway.ml"
    },
    {
        name: "Grammarly",
        category: "Writing Assistant",
        description: "AI writing improvement tool",
        pricing: "Freemium",
        rating: 4.7,
        url: "https://www.grammarly.com"
    },
    {
        name: "Synthesia",
        category: "Video Generation",
        description: "AI video creation platform",
        pricing: "Paid",
        rating: 4.5,
        url: "https://www.synthesia.io"
    },
    {
        name: "Otter.ai",
        category: "Transcription",
        description: "AI meeting transcription service",
        pricing: "Freemium",
        rating: 4.6,
        url: "https://otter.ai"
    },
    {
        name: "Notion AI",
        category: "Productivity",
        description: "AI-powered workspace",
        pricing: "Paid",
        rating: 4.7,
        url: "https://www.notion.so"
    },
    {
        name: "Replicate",
        category: "AI Development",
        description: "Run open-source models in the cloud",
        pricing: "Paid",
        rating: 4.5,
        url: "https://replicate.com"
    },
    {
        name: "AutoGPT",
        category: "Automation",
        description: "Autonomous GPT-4 experiments",
        pricing: "Free",
        rating: 4.3,
        url: "https://github.com/Significant-Gravitas/Auto-GPT"
    },
    {
        name: "Hugging Face",
        category: "AI Development",
        description: "AI model hub and development platform",
        pricing: "Freemium",
        rating: 4.8,
        url: "https://huggingface.co"
    },
    {
        name: "Elevenlabs",
        category: "Text to Speech",
        description: "AI voice generation platform",
        pricing: "Freemium",
        rating: 4.7,
        url: "https://elevenlabs.io"
    },
    {
        name: "Perplexity AI",
        category: "Search Engine",
        description: "AI-powered search engine",
        pricing: "Freemium",
        rating: 4.6,
        url: "https://www.perplexity.ai"
    },
    {
        name: "Gamma",
        category: "Presentation",
        description: "AI-powered presentation and document creation tool",
        pricing: "Freemium",
        rating: 4.5,
        url: "https://gamma.app"
    },
    {
        name: "Firefly",
        category: "Image Generation",
        description: "Adobe's AI image generation and editing tool",
        pricing: "Paid",
        rating: 4.6,
        url: "https://www.adobe.com/sensei/generative-ai/firefly.html"
    },
    {
        name: "Whisper",
        category: "Speech Recognition",
        description: "OpenAI's speech recognition system for accurate transcription",
        pricing: "Free",
        rating: 4.7,
        url: "https://openai.com/research/whisper"
    },
    {
        name: "Murf.ai",
        category: "Text to Speech",
        description: "AI voice generator with natural-sounding voices",
        pricing: "Freemium",
        rating: 4.5,
        url: "https://murf.ai"
    },
    {
        name: "Descript",
        category: "Video Editing",
        description: "AI-powered video and podcast editing platform",
        pricing: "Freemium",
        rating: 4.6,
        url: "https://www.descript.com"
    },
    {
        name: "Bing Image Creator",
        category: "Image Generation",
        description: "Microsoft's DALL-E powered image creation tool",
        pricing: "Free",
        rating: 4.3,
        url: "https://www.bing.com/create"
    },
    {
        name: "Anthropic Claude 3",
        category: "Chatbot",
        description: "Latest version of Claude with enhanced capabilities",
        pricing: "Paid",
        rating: 4.9,
        url: "https://claude.ai/claude-3"
    },
    {
        name: "Gemini",
        category: "Chatbot",
        description: "Google's multimodal AI model",
        pricing: "Free",
        rating: 4.7,
        url: "https://gemini.google.com"
    },
    {
        name: "Canva AI",
        category: "Design",
        description: "AI-powered design tools integrated into Canva",
        pricing: "Freemium",
        rating: 4.6,
        url: "https://www.canva.com"
    },
    {
        name: "Taskade AI",
        category: "Productivity",
        description: "AI-powered project management and note-taking",
        pricing: "Freemium",
        rating: 4.4,
        url: "https://www.taskade.com"
    },
    {
        name: "Pictory",
        category: "Video Generation",
        description: "Automated video creation from long-form content",
        pricing: "Paid",
        rating: 4.5,
        url: "https://pictory.ai"
    },
    {
        name: "Writesonic",
        category: "Content Writing",
        description: "AI writing tool for marketing and content teams",
        pricing: "Freemium",
        rating: 4.5,
        url: "https://writesonic.com"
    },
    {
        name: "Krisp",
        category: "Audio Processing",
        description: "AI-powered noise cancellation for calls",
        pricing: "Freemium",
        rating: 4.7,
        url: "https://krisp.ai"
    },
    {
        name: "Soundraw",
        category: "Music Generation",
        description: "AI music generator for content creators",
        pricing: "Paid",
        rating: 4.4,
        url: "https://soundraw.io"
    },
    {
        name: "Tabnine",
        category: "Code Assistant",
        description: "AI code completion tool for developers",
        pricing: "Freemium",
        rating: 4.5,
        url: "https://www.tabnine.com"
    },
    {
        name: "Codeium",
        category: "Code Assistant",
        description: "Free AI-powered code completion alternative",
        pricing: "Free",
        rating: 4.4,
        url: "https://codeium.com"
    },
    {
        name: "Lexica",
        category: "Image Generation",
        description: "Stable Diffusion image search engine and generator",
        pricing: "Freemium",
        rating: 4.3,
        url: "https://lexica.art"
    },
    {
        name: "Tome",
        category: "Presentation",
        description: "AI-powered storytelling and presentation platform",
        pricing: "Freemium",
        rating: 4.5,
        url: "https://tome.app"
    },
    {
        name: "Aidungeon",
        category: "Gaming",
        description: "AI-powered text adventure game",
        pricing: "Freemium",
        rating: 4.2,
        url: "https://play.aidungeon.io"
    },
    {
        name: "Scenario",
        category: "Gaming",
        description: "AI game creation platform",
        pricing: "Paid",
        rating: 4.3,
        url: "https://www.scenario.gg"
    },
    {
        name: "Riffusion",
        category: "Music Generation",
        description: "AI music creation through image synthesis",
        pricing: "Free",
        rating: 4.1,
        url: "https://www.riffusion.com"
    },
    {
        name: "Beatoven",
        category: "Music Generation",
        description: "AI background music generator",
        pricing: "Freemium",
        rating: 4.4,
        url: "https://www.beatoven.ai"
    },
    {
        name: "Cleanvoice",
        category: "Audio Processing",
        description: "AI podcast editor and enhancer",
        pricing: "Paid",
        rating: 4.3,
        url: "https://cleanvoice.ai"
    },
    {
        name: "Namelix",
        category: "Business",
        description: "AI business name generator",
        pricing: "Free",
        rating: 4.2,
        url: "https://namelix.com"
    },
    {
        name: "Beautiful.ai",
        category: "Presentation",
        description: "AI-powered presentation software",
        pricing: "Paid",
        rating: 4.4,
        url: "https://www.beautiful.ai"
    },
    {
        name: "Looka",
        category: "Design",
        description: "AI logo and brand identity designer",
        pricing: "Paid",
        rating: 4.5,
        url: "https://looka.com"
    },
    {
        name: "Brandmark",
        category: "Design",
        description: "AI logo design and branding tool",
        pricing: "Paid",
        rating: 4.3,
        url: "https://brandmark.io"
    },
    {
        name: "InvoiceAI",
        category: "Business",
        description: "AI-powered invoice processing and management",
        pricing: "Freemium",
        rating: 4.2,
        url: "https://invoiceai.app"
    },
    {
        name: "Stockimg",
        category: "Image Generation",
        description: "AI stock image generator",
        pricing: "Paid",
        rating: 4.4,
        url: "https://stockimg.ai"
    },
    {
        name: "Rytr",
        category: "Content Writing",
        description: "AI writing assistant for various content types",
        pricing: "Freemium",
        rating: 4.3,
        url: "https://rytr.me"
    },
    {
        name: "Lensa",
        category: "Image Editing",
        description: "AI-powered photo editing and avatar creation",
        pricing: "Paid",
        rating: 4.6,
        url: "https://prisma-ai.com/lensa"
    },
    {
        name: "Photoroom",
        category: "Image Editing",
        description: "AI background removal and photo editing",
        pricing: "Freemium",
        rating: 4.7,
        url: "https://www.photoroom.com"
    },
    {
        name: "Luminar Neo",
        category: "Image Editing",
        description: "AI-powered photo editor with advanced features",
        pricing: "Paid",
        rating: 4.5,
        url: "https://skylum.com/luminar"
    },
    {
        name: "Bing Chat Enterprise",
        category: "Business",
        description: "Enterprise-focused AI chat with data protection",
        pricing: "Paid",
        rating: 4.4,
        url: "https://www.microsoft.com/en-us/microsoft-365/enterprise/chat"
    },
    {
        name: "Duolingo Max",
        category: "Education",
        description: "AI-powered language learning platform",
        pricing: "Freemium",
        rating: 4.8,
        url: "https://www.duolingo.com"
    },
    {
        name: "Coursera AI",
        category: "Education",
        description: "AI-enhanced online learning platform",
        pricing: "Freemium",
        rating: 4.6,
        url: "https://www.coursera.org"
    },
    {
        name: "Gradescope",
        category: "Education",
        description: "AI-powered grading and assessment tool",
        pricing: "Paid",
        rating: 4.5,
        url: "https://www.gradescope.com"
    },
    {
        name: "Socratic",
        category: "Education",
        description: "Google's AI learning assistant",
        pricing: "Free",
        rating: 4.4,
        url: "https://socratic.org"
    },
    {
        name: "Movio",
        category: "Video Generation",
        description: "AI spokesperson video creator",
        pricing: "Paid",
        rating: 4.3,
        url: "https://www.movio.la"
    },
    {
        name: "Deepbrain AI",
        category: "Video Generation",
        description: "AI avatar video creation platform",
        pricing: "Paid",
        rating: 4.4,
        url: "https://www.deepbrain.io"
    },
    {
        name: "Kaiber",
        category: "Video Generation",
        description: "AI music video generator",
        pricing: "Paid",
        rating: 4.2,
        url: "https://kaiber.ai"
    },
    {
        name: "Wondershare Filmora",
        category: "Video Editing",
        description: "AI-enhanced video editing software",
        pricing: "Paid",
        rating: 4.5,
        url: "https://filmora.wondershare.com"
    },
    {
        name: "Kapwing",
        category: "Video Editing",
        description: "Online video editor with AI features",
        pricing: "Freemium",
        rating: 4.3,
        url: "https://www.kapwing.com"
    },
    {
        name: "Veed.io",
        category: "Video Editing",
        description: "AI-powered online video editor",
        pricing: "Freemium",
        rating: 4.4,
        url: "https://www.veed.io"
    },
    {
        name: "Quickchat",
        category: "Business",
        description: "AI customer service automation platform",
        pricing: "Paid",
        rating: 4.3,
        url: "https://quickchat.ai"
    },
    {
        name: "Drift",
        category: "Business",
        description: "AI-powered conversational marketing platform",
        pricing: "Paid",
        rating: 4.5,
        url: "https://www.drift.com"
    },
    {
        name: "Intercom",
        category: "Business",
        description: "AI customer messaging platform",
        pricing: "Paid",
        rating: 4.6,
        url: "https://www.intercom.com"
    },
    {
        name: "Mem.ai",
        category: "Productivity",
        description: "AI-powered personal knowledge base",
        pricing: "Freemium",
        rating: 4.4,
        url: "https://mem.ai"
    },
    {
        name: "Todoist AI",
        category: "Productivity",
        description: "AI-enhanced task management",
        pricing: "Freemium",
        rating: 4.7,
        url: "https://todoist.com"
    },
    {
        name: "Roam Research",
        category: "Productivity",
        description: "AI note-taking and knowledge management",
        pricing: "Paid",
        rating: 4.5,
        url: "https://roamresearch.com"
    },
    {
        name: "Podcastle",
        category: "Audio Processing",
        description: "AI-powered podcast recording and editing studio",
        pricing: "Freemium",
        rating: 4.5,
        url: "https://podcastle.ai"
    },
    {
        name: "Udemy AI",
        category: "Education",
        description: "AI-enhanced course recommendations and learning",
        pricing: "Paid",
        rating: 4.5,
        url: "https://www.udemy.com"
    },
    {
        name: "Khan Academy AI",
        category: "Education",
        description: "AI-powered personalized learning assistant",
        pricing: "Free",
        rating: 4.7,
        url: "https://www.khanacademy.org"
    },
    {
        name: "Quizlet AI",
        category: "Education",
        description: "AI study sets and flashcards generator",
        pricing: "Freemium",
        rating: 4.4,
        url: "https://quizlet.com"
    },
    {
        name: "Wolfram Alpha",
        category: "Education",
        description: "Computational intelligence and knowledge engine",
        pricing: "Freemium",
        rating: 4.8,
        url: "https://www.wolframalpha.com"
    },
    {
        name: "Deepseek Coder",
        category: "Code Assistant",
        description: "Advanced AI coding assistant with deep understanding of programming",
        pricing: "Free",
        rating: 4.7,
        url: "https://platform.deepseek.com/coder"
    },
    {
        name: "Deepseek Chat",
        category: "Chatbot",
        description: "General-purpose AI chat model with strong reasoning capabilities",
        pricing: "Free",
        rating: 4.6,
        url: "https://chat.deepseek.com"
    },
    {
        name: "Deepseek Math",
        category: "Education",
        description: "Specialized AI model for mathematics and problem-solving",
        pricing: "Free",
        rating: 4.5,
        url: "https://platform.deepseek.com/math"
    },
    {
        name: "Deepseek Research",
        category: "Research",
        description: "AI model specialized in scientific research and analysis",
        pricing: "Free",
        rating: 4.6,
        url: "https://platform.deepseek.com/research"
    },
    {
        name: "NVIDIA Isaac",
        category: "Robotics",
        description: "Comprehensive robotics development platform with simulation and AI capabilities",
        pricing: "Paid",
        rating: 4.6,
        url: "https://developer.nvidia.com/isaac-sdk"
    },
    {
        name: "ROS",
        category: "Robotics",
        description: "Open-source Robot Operating System for robotics development",
        pricing: "Free",
        rating: 4.7,
        url: "https://www.ros.org"
    },
    {
        name: "Gazebo",
        category: "Robotics",
        description: "Advanced robot simulation with physics engine and AI integration",
        pricing: "Free",
        rating: 4.5,
        url: "https://gazebosim.org"
    },
    {
        name: "Unity ML-Agents",
        category: "Gaming",
        description: "Deep learning framework for training intelligent agents in Unity games",
        pricing: "Free",
        rating: 4.6,
        url: "https://unity.com/products/machine-learning-agents"
    },
    {
        name: "Stockfish",
        category: "Gaming",
        description: "World's strongest open-source chess engine",
        pricing: "Free",
        rating: 4.9,
        url: "https://stockfishchess.org"
    },
    {
        name: "Viz.ai",
        category: "Medical",
        description: "AI-powered stroke detection and care coordination platform",
        pricing: "Paid",
        rating: 4.7,
        url: "https://www.viz.ai"
    },
    {
        name: "Darktrace",
        category: "Cybersecurity",
        description: "Enterprise immune system for cyber threat detection",
        pricing: "Paid",
        rating: 4.8,
        url: "https://www.darktrace.com"
    },
    {
        name: "Cylance",
        category: "Cybersecurity",
        description: "AI-powered antivirus and endpoint protection",
        pricing: "Paid",
        rating: 4.6,
        url: "https://www.blackberry.com/us/en/products/unified-endpoint-security/cylance-ai"
    },
    {
        name: "BloombergGPT",
        category: "Finance",
        description: "AI model specialized in financial analysis and market predictions",
        pricing: "Paid",
        rating: 4.7,
        url: "https://www.bloomberg.com/company/press/bloomberggpt-50-billion-parameter-llm-tuned-finance"
    },
    {
        name: "DeepChem",
        category: "Chemistry",
        description: "Open-source platform for deep learning in chemistry and materials science",
        pricing: "Free",
        rating: 4.5,
        url: "https://deepchem.io"
    },
    {
        name: "IBM RXN",
        category: "Chemistry",
        description: "AI-powered chemistry prediction and synthesis planning",
        pricing: "Free",
        rating: 4.4,
        url: "https://rxn.res.ibm.com"
    },
    {
        name: "MoveIt",
        category: "Robotics",
        description: "Motion planning framework for robotic manipulation",
        pricing: "Free",
        rating: 4.4,
        url: "https://moveit.ros.org"
    },
    {
        name: "PyRobot",
        category: "Robotics",
        description: "Facebook's open-source robotics framework",
        pricing: "Free",
        rating: 4.3,
        url: "https://pyrobot.org"
    },
    {
        name: "Webots",
        category: "Robotics",
        description: "Professional robot simulator for prototyping",
        pricing: "Free",
        rating: 4.5,
        url: "https://cyberbotics.com"
    },
    {
        name: "Leela Chess Zero",
        category: "Gaming",
        description: "Neural network-based chess engine",
        pricing: "Free",
        rating: 4.8,
        url: "https://lczero.org"
    },
    {
        name: "Project Malmo",
        category: "Gaming",
        description: "Microsoft's AI research platform using Minecraft",
        pricing: "Free",
        rating: 4.4,
        url: "https://www.microsoft.com/en-us/research/project/project-malmo"
    },
    {
        name: "Aidoc",
        category: "Medical",
        description: "AI-powered medical imaging analysis",
        pricing: "Paid",
        rating: 4.7,
        url: "https://www.aidoc.com"
    },
    {
        name: "SkinVision",
        category: "Medical",
        description: "AI-powered skin cancer detection app",
        pricing: "Paid",
        rating: 4.5,
        url: "https://www.skinvision.com"
    },
    {
        name: "Vectra AI",
        category: "Cybersecurity",
        description: "AI-driven threat detection and response",
        pricing: "Paid",
        rating: 4.7,
        url: "https://www.vectra.ai"
    },
    {
        name: "AI for Forex Trading",
        category: "Finance",
        description: "AI-powered forex trading analysis and prediction",
        pricing: "Paid",
        rating: 4.4,
        url: "https://www.forexrobottrader.com"
    },
    {
        name: "ChemAI",
        category: "Chemistry",
        description: "AI-powered chemical compound analysis platform",
        pricing: "Paid",
        rating: 4.3,
        url: "https://www.chemai.io"
    },
    {
        name: "Drake Robotics",
        category: "Robotics",
        description: "MIT's robotics simulation and planning framework",
        pricing: "Free",
        rating: 4.5,
        url: "https://drake.mit.edu"
    },
    {
        name: "Wysa",
        category: "Mental Health",
        description: "AI-powered mental health and wellness chatbot",
        pricing: "Freemium",
        rating: 4.6,
        url: "https://www.wysa.io"
    },
    {
        name: "Woebot",
        category: "Mental Health",
        description: "AI therapy chatbot for mental health support",
        pricing: "Free",
        rating: 4.5,
        url: "https://woebothealth.com"
    },
    {
        name: "Atomwise",
        category: "Drug Discovery",
        description: "AI-powered drug discovery platform",
        pricing: "Paid",
        rating: 4.7,
        url: "https://www.atomwise.com"
    },
    {
        name: "Insilico Medicine",
        category: "Drug Discovery",
        description: "AI platform for drug development and aging research",
        pricing: "Paid",
        rating: 4.6,
        url: "https://insilico.com"
    },
    {
        name: "Cloudflare AI",
        category: "Cybersecurity",
        description: "AI-powered DDoS protection and security",
        pricing: "Paid",
        rating: 4.8,
        url: "https://www.cloudflare.com/ai"
    },
    {
        name: "Barracuda AI",
        category: "Cybersecurity",
        description: "AI-based email security and phishing protection",
        pricing: "Paid",
        rating: 4.6,
        url: "https://www.barracuda.com"
    },
    {
        name: "Mujoco",
        category: "Robotics",
        description: "Advanced physics engine for robotics simulation",
        pricing: "Free",
        rating: 4.5,
        url: "https://mujoco.org"
    },
    {
        name: "OpenRAVE",
        category: "Robotics",
        description: "Open-source robotics automation virtual environment",
        pricing: "Free",
        rating: 4.3,
        url: "http://openrave.org"
    },
    {
        name: "Komodo Chess",
        category: "Gaming",
        description: "Powerful open-source chess engine with AI capabilities",
        pricing: "Free",
        rating: 4.7,
        url: "https://komodochess.com"
    },
    {
        name: "OpenAI Gym",
        category: "Gaming",
        description: "Toolkit for developing and comparing reinforcement learning algorithms",
        pricing: "Free",
        rating: 4.6,
        url: "https://www.gymlibrary.dev"
    },
    {
        name: "BlueDot",
        category: "Medical",
        description: "AI-powered infectious disease surveillance",
        pricing: "Free",
        rating: 4.4,
        url: "https://bluedot.global"
    },
    {
        name: "DeepVariant",
        category: "Medical",
        description: "Google's deep learning DNA sequence analyzer",
        pricing: "Free",
        rating: 4.6,
        url: "https://github.com/google/deepvariant"
    },
    {
        name: "Roboschool",
        category: "Robotics",
        description: "Open-source robotics simulation framework",
        pricing: "Free",
        rating: 4.2,
        url: "https://openai.com/research/roboschool"
    },
    {
        name: "CheXNet",
        category: "Medical",
        description: "Stanford's AI for chest X-ray analysis",
        pricing: "Free",
        rating: 4.5,
        url: "https://stanfordmlgroup.github.io/projects/chexnet"
    },
    {
        name: "LLaMA 2",
        category: "Chatbot",
        description: "Meta's open-source large language model",
        pricing: "Free",
        rating: 4.6,
        url: "https://ai.meta.com/llama"
    },
    {
        name: "Mixtral",
        category: "Chatbot",
        description: "Mistral AI's powerful mixture-of-experts language model",
        pricing: "Free",
        rating: 4.7,
        url: "https://mistral.ai/news/mixtral-of-experts"
    },
    {
        name: "Falcon 180B",
        category: "Chatbot",
        description: "Large open-source language model by TII",
        pricing: "Free",
        rating: 4.5,
        url: "https://huggingface.co/tiiuae/falcon-180B"
    },
    {
        name: "BLOOM",
        category: "Chatbot",
        description: "Multilingual large language model",
        pricing: "Free",
        rating: 4.4,
        url: "https://huggingface.co/bigscience/bloom"
    },
    {
        name: "Kandinsky 3.0",
        category: "Image Generation",
        description: "Advanced AI image generation model",
        pricing: "Free",
        rating: 4.5,
        url: "https://fusionbrain.ai/kandinsky"
    },
    {
        name: "DeepFloyd IF",
        category: "Image Generation",
        description: "High-quality image generation model",
        pricing: "Free",
        rating: 4.4,
        url: "https://deepfloyd.ai/deepfloyd-if"
    },
    {
        name: "Code Llama",
        category: "Code Assistant",
        description: "Meta's specialized coding language model",
        pricing: "Free",
        rating: 4.6,
        url: "https://ai.meta.com/code-llama"
    },
    {
        name: "StarCoder",
        category: "Code Assistant",
        description: "Open-source code generation model",
        pricing: "Free",
        rating: 4.5,
        url: "https://huggingface.co/bigcode/starcoder"
    },
    {
        name: "PlayHT",
        category: "Text to Speech",
        description: "AI voice cloning and text-to-speech platform",
        pricing: "Freemium",
        rating: 4.5,
        url: "https://play.ht"
    },
    {
        name: "Bark",
        category: "Text to Speech",
        description: "Suno's advanced text-to-speech AI",
        pricing: "Free",
        rating: 4.6,
        url: "https://github.com/suno-ai/bark"
    },
    {
        name: "TensorFlow",
        category: "Machine Learning",
        description: "Google's open-source machine learning framework",
        pricing: "Free",
        rating: 4.8,
        url: "https://www.tensorflow.org"
    },
    {
        name: "PyTorch",
        category: "Deep Learning",
        description: "Meta's deep learning framework for research and production",
        pricing: "Free",
        rating: 4.9,
        url: "https://pytorch.org"
    },
    {
        name: "Keras",
        category: "Deep Learning",
        description: "User-friendly neural network library",
        pricing: "Free",
        rating: 4.7,
        url: "https://keras.io"
    },
    {
        name: "Scikit-learn",
        category: "Machine Learning",
        description: "Simple and efficient tools for data analysis",
        pricing: "Free",
        rating: 4.8,
        url: "https://scikit-learn.org"
    },
    {
        name: "spaCy",
        category: "NLP",
        description: "Industrial-strength natural language processing",
        pricing: "Free",
        rating: 4.6,
        url: "https://spacy.io"
    },
    {
        name: "NLTK",
        category: "NLP",
        description: "Leading platform for building Python programs to work with human language data",
        pricing: "Free",
        rating: 4.5,
        url: "https://www.nltk.org"
    },
    {
        name: "OpenCV",
        category: "Computer Vision",
        description: "Open source computer vision and machine learning library",
        pricing: "Free",
        rating: 4.7,
        url: "https://opencv.org"
    },
    {
        name: "Detectron2",
        category: "Computer Vision",
        description: "Meta's computer vision model library",
        pricing: "Free",
        rating: 4.5,
        url: "https://github.com/facebookresearch/detectron2"
    },
    {
        name: "Stable Baselines3",
        category: "Reinforcement Learning",
        description: "Set of improved implementations of reinforcement learning algorithms",
        pricing: "Free",
        rating: 4.4,
        url: "https://stable-baselines3.readthedocs.io"
    },
    {
        name: "RLlib",
        category: "Reinforcement Learning",
        description: "Open-source library for reinforcement learning",
        pricing: "Free",
        rating: 4.3,
        url: "https://docs.ray.io/en/latest/rllib"
    },
    {
        name: "Langchain",
        category: "AI Development",
        description: "Framework for developing applications powered by language models",
        pricing: "Free",
        rating: 4.7,
        url: "https://langchain.com"
    },
    {
        name: "FastAI",
        category: "Deep Learning",
        description: "Deep learning library for simplified model training",
        pricing: "Free",
        rating: 4.6,
        url: "https://fast.ai"
    },
    {
        name: "Gradio",
        category: "AI Development",
        description: "Create UIs for machine learning models",
        pricing: "Free",
        rating: 4.5,
        url: "https://gradio.app"
    },
    {
        name: "Streamlit",
        category: "AI Development",
        description: "Framework for creating data and ML applications",
        pricing: "Free",
        rating: 4.8,
        url: "https://streamlit.io"
    },
    {
        name: "Weights & Biases",
        category: "Machine Learning",
        description: "MLOps platform for experiment tracking",
        pricing: "Freemium",
        rating: 4.7,
        url: "https://wandb.ai"
    },
    {
        name: "MLflow",
        category: "Machine Learning",
        description: "Platform for ML lifecycle management",
        pricing: "Free",
        rating: 4.6,
        url: "https://mlflow.org"
    },
    {
        name: "DVC",
        category: "Machine Learning",
        description: "Version control system for ML projects",
        pricing: "Free",
        rating: 4.5,
        url: "https://dvc.org"
    },
    {
        name: "Label Studio",
        category: "Machine Learning",
        description: "Data labeling and annotation platform",
        pricing: "Free",
        rating: 4.4,
        url: "https://labelstud.io"
    },
    {
        name: "Prodigy",
        category: "Machine Learning",
        description: "Annotation tool for AI training data",
        pricing: "Paid",
        rating: 4.6,
        url: "https://prodi.gy"
    },
    {
        name: "Neptune.ai",
        category: "Machine Learning",
        description: "Metadata store for MLOps",
        pricing: "Freemium",
        rating: 4.5,
        url: "https://neptune.ai"
    },
    {
        name: "JAX",
        category: "Machine Learning",
        description: "Google's high-performance ML framework",
        pricing: "Free",
        rating: 4.7,
        url: "https://github.com/google/jax"
    },
    {
        name: "Optuna",
        category: "Machine Learning",
        description: "Hyperparameter optimization framework",
        pricing: "Free",
        rating: 4.5,
        url: "https://optuna.org"
    },
    {
        name: "Ray",
        category: "Machine Learning",
        description: "Framework for scaling AI applications",
        pricing: "Free",
        rating: 4.6,
        url: "https://www.ray.io"
    },
    {
        name: "Transformers",
        category: "NLP",
        description: "State-of-the-art NLP library by Hugging Face",
        pricing: "Free",
        rating: 4.8,
        url: "https://huggingface.co/transformers"
    },
    {
        name: "AllenNLP",
        category: "NLP",
        description: "Deep learning for NLP research",
        pricing: "Free",
        rating: 4.4,
        url: "https://allenai.org/allennlp"
    },
    {
        name: "Gensim",
        category: "NLP",
        description: "Topic modeling and document similarity",
        pricing: "Free",
        rating: 4.5,
        url: "https://radimrehurek.com/gensim"
    },
    {
        name: "YOLOv8",
        category: "Computer Vision",
        description: "Real-time object detection system",
        pricing: "Free",
        rating: 4.7,
        url: "https://ultralytics.com/yolov8"
    },
    {
        name: "MMDetection",
        category: "Computer Vision",
        description: "Object detection toolbox",
        pricing: "Free",
        rating: 4.5,
        url: "https://mmdetection.readthedocs.io"
    },
    {
        name: "Kornia",
        category: "Computer Vision",
        description: "Computer vision library for PyTorch",
        pricing: "Free",
        rating: 4.4,
        url: "https://kornia.github.io"
    },
    {
        name: "Dopamine",
        category: "Reinforcement Learning",
        description: "Research framework for RL by Google",
        pricing: "Free",
        rating: 4.3,
        url: "https://github.com/google/dopamine"
    }
];

module.exports = AI_TOOLS; 