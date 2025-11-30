import { WebpageReplicationScenario } from './types';

export const webpageReplicationScenarios: WebpageReplicationScenario[] = [
    {
        id: "web-1",
        searchTerm: "Profile Page Design",
        imagePlaceholder: "/Images/Web1.jpg",
        averageOutput: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Page</title>
    <style>
        html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            display: flex;
            flex-direction: column;
        }
        
        .container {
            margin: 0 auto;
            background-color: white;
            min-height: 100%;
            flex-grow: 1;
        }
        
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            border-bottom: 1px solid #eee;
        }
        
        .tabs {
            display: flex;
            gap: 10px;
        }
        
        .tab {
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 14px;
        }
        
        .tab.active {
            background-color: #e83e8c;
            color: white;
        }
        
        .tab.inactive {
            background-color: transparent;
            color: #666;
        }
        
        .language-time {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .language {
            background-color: #f0f0f0;
            padding: 3px 8px;
            border-radius: 10px;
            font-size: 12px;
        }
        
        .profile-section {
            padding: 20px;
            text-align: center;
        }
        
        .profile-pic {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 15px;
        }
        
        .bio {
            font-size: 14px;
            line-height: 1.5;
            color: #333;
            margin-bottom: 20px;
        }
        
        .company-logos {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 25px;
        }
        
        .logo {
            width: 40px;
            height: 40px;
            object-fit: contain;
        }
        
        .project-card {
            background-color: #f9f9f9;
            border-radius: 10px;
            padding: 15px;
            margin: 0 20px 20px 20px;
            display: flex;
            gap: 15px;
        }
        
        .project-image {
            width: 60px;
            height: 60px;
            border-radius: 8px;
            object-fit: cover;
        }
        
        .project-info h3 {
            font-size: 16px;
            margin: 0 0 8px 0;
            color: #333;
        }
        
        .project-info p {
            font-size: 12px;
            color: #666;
            line-height: 1.4;
            margin: 0;
        }
        
        .footer {
            padding: 20px;
            text-align: center;
            color: #888;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="tabs">
                <span class="tab active">Info</span>
                <span class="tab inactive">Work</span>
                <span class="tab inactive">Contact</span>
            </div>
            <div class="language-time">
                <span class="language">EN CY</span>
                <span class="time">13:55:19</span>
            </div>
        </div>
        
        <div class="profile-section">
            <img src="https://picsum.photos/seed/profile123/160/160.jpg" alt="Profile" class="profile-pic">
            
            <p class="bio">
                A Welsh based creative director and brand designer, creating strategic brands for clients across industries. Over the past 10 years have helped brands big and small develop their visual identities and discover their brand character.
            </p>
            
            <div class="company-logos">
                <img src="https://picsum.photos/seed/coinbase45/80/80.jpg" alt="Coinbase" class="logo">
                <img src="https://picsum.photos/seed/spotify45/80/80.jpg" alt="Spotify" class="logo">
                <img src="https://picsum.photos/seed/slack45/80/80.jpg" alt="Slack" class="logo">
                <img src="https://picsum.photos/seed/dropbox45/80/80.jpg" alt="Dropbox" class="logo">
            </div>
            
            <div class="project-card">
                <img src="https://picsum.photos/seed/effy120/120/120.jpg" alt="Effy" class="project-image">
                <div class="project-info">
                    <h3>Effy</h3>
                    <p>A social platform with a twist. Effy is focused on experiences and knowledge with the word experience and the power of voice.</p>
                </div>
            </div>
            
            <div class="project-card">
                <img src="https://picsum.photos/seed/trade120/120/120.jpg" alt="Trade" class="project-image">
                <div class="project-info">
                    <h3>Trade</h3>
                    <p>Innovating the way the world does business, including the growth sectors companies interaction of international trade and global supply chain.</p>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p>@jane<br>contact@jane.com</p>
        </div>
    </div>
</body>
</html>`,
        powerOutput: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Page</title>
    <style>
        html, body {
            height: 100%;
            margin: 0;
            padding: 0;
        }
        body {
            background-color: #f5f5f5;
            color: #333;
            font-family: 'Arial', sans-serif;
            display: flex;
            flex-direction: column;
        }
        
        .container {
            margin: 0 auto;
            background-color: white;
            min-height: 100%;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        
        /* Navigation */
        .nav-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            background-color: white;
            position: relative;
        }
        
        .nav-tabs {
            display: flex;
            gap: 10px;
        }
        
        .nav-tab {
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .nav-tab.active {
            background-color: #e83e8c;
            color: white;
        }
        
        .nav-tab:not(.active) {
            color: #666;
        }
        
        .language-selector {
            display: flex;
            gap: 5px;
            align-items: center;
        }
        
        .time-display {
            font-size: 14px;
            color: #888;
        }
        
        /* Profile Section */
        .profile-section {
            padding: 20px;
            text-align: center;
        }
        
        .profile-image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 15px;
        }
        
        .bio-text {
            line-height: 1.6;
            margin-bottom: 20px;
            font-size: 14px;
        }
        
        /* Client Logos */
        .client-logos {
            display: flex;
            justify-content: center;
            gap: 15px;
            padding: 0 20px 20px;
        }
        
        .client-logo {
            width: 40px;
            height: 40px;
            object-fit: contain;
        }
        
        /* Projects */
        .projects-section {
            padding: 0 20px 20px;
        }
        
        .project-card {
            background-color: #f9f9f9;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 15px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        
        .project-image {
            width: 100%;
            height: 120px;
            object-fit: cover;
        }
        
        .project-info {
            padding: 12px;
        }
        
        .project-title {
            font-weight: bold;
            margin-bottom: 5px;
            font-size: 14px;
        }
        
        .project-description {
            font-size: 12px;
            color: #666;
            line-height: 1.4;
        }
        
        /* Contact Info */
        .contact-info {
            padding: 20px;
            border-top: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 13px;
            color: #666;
        }
        
        @media (max-width: 480px) {
            .nav-bar {
                padding: 10px 15px;
            }
            
            .profile-image {
                width: 100px;
                height: 100px;
            }
            
            .client-logos {
                gap: 10px;
                padding: 0 15px 15px;
            }
            
            .client-logo {
                width: 35px;
                height: 35px;
            }
            
            .projects-section {
                padding: 0 15px 15px;
            }
            
            .contact-info {
                padding: 15px;
                font-size: 12px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Navigation Bar -->
        <div class="nav-bar">
            <div class="nav-tabs">
                <div class="nav-tab active">Info</div>
                <div class="nav-tab">Work</div>
                <div class="nav-tab">Contact</div>
            </div>
            
            <div class="language-selector">
                <span style="font-weight: bold;">EN</span>
                <span>CY</span>
            </div>
            
            <div class="time-display">13:55:19</div>
        </div>
        
        <!-- Profile Section -->
        <div class="profile-section">
            <img src="https://picsum.photos/seed/profile123/200/200.jpg" alt="Profile Picture" class="profile-image">
            <p class="bio-text">
                A Welsh based creative director and brand designer, creating strategic brands for clients across industries. Over the past 10 years they have helped brands big and small develop their visual identities and discover their brand character.
            </p>
        </div>
        
        <!-- Client Logos -->
        <div class="client-logos">
            <img src="https://picsum.photos/seed/coinbase/80/80.jpg" alt="Coinbase" class="client-logo">
            <img src="https://picsum.photos/seed/spotify/80/80.jpg" alt="Spotify" class="client-logo">
            <img src="https://picsum.photos/seed/slack/80/80.jpg" alt="Slack" class="client-logo">
            <img src="https://picsum.photos/seed/dropbox/80/80.jpg" alt="Dropbox" class="client-logo">
        </div>
        
        <!-- Projects Section -->
        <div class="projects-section">
            <div class="project-card">
                <img src="https://picsum.photos/seed/efly/400/240.jpg" alt="Efly Project" class="project-image">
                <div class="project-info">
                    <div class="project-title">Efly</div>
                    <p class="project-description">
                        A social platform with a twist. Efly is focused on experiences and knowledge sharing with the world through the power of voice.
                    </p>
                </div>
            </div>
            
            <div class="project-card">
                <img src="https://picsum.photos/seed/trade/400/240.jpg" alt="Trade Project" class="project-image">
                <div class="project-info">
                    <div class="project-title">Trade</div>
                    <p class="project-description">
                        Including a fast growth word business networking tool for the new economy companies interaction of international trade and global supply chain.
                    </p>
                </div>
            </div>
        </div>
        
        <!-- Contact Info -->
        <div class="contact-info">
            <div>@jane</div>
            <div>contact@jane.com</div>
        </div>
    </div>
</body>
</html>`,
        outputType: "html"
    },
    {
        id: "web-2",
        searchTerm: "Digital Guild Agency Website",
        imagePlaceholder: "/Images/Web2.png",
        averageOutput: `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Guild</title>
    <script src="https://cdn.jsdelivr.net/npm/react@18.0.0/umd/react.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@18.0.0/umd/react-dom.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@babel/standalone/babel.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        html, body { height: 100%; }
        body {
            font-family: 'Inter', sans-serif;
            display: flex;
            flex-direction: column;
        }
        #root { flex-grow: 1; display: flex; flex-direction: column; }
    </style>
</head>
<body class="bg-gray-100">
    <div id="root"></div>
    <script>
        window.onerror = function(message, source, lineno, colno, error) {
            document.body.innerHTML = '<div style="color:red; padding:20px; background:white;"><h1>Error</h1><p>' + message + '</p><p>' + source + ':' + lineno + '</p></div>';
        };
    </script>

    <script type="text/babel">
        const App = () => {
            return (
                <div className="bg-white shadow-lg min-h-full flex flex-col">
                    {/* Header */}
                    <header className="relative">
                        <nav className="flex justify-between items-center px-6 py-3 bg-black text-white">
                            <div className="flex items-center space-x-8">
                                <a href="#" className="text-orange-500">
                                    <i className="fas fa-circle text-xl"></i>
                                </a>
                                <div className="hidden md:flex space-x-6">
                                    <a href="#" className="hover:text-orange-500">Services</a>
                                    <a href="#" className="hover:text-orange-500">Pricing</a>
                                    <a href="#" className="hover:text-orange-500">Features</a>
                                    <a href="#" className="hover:text-orange-500">Resources</a>
                                </div>
                            </div>
                            <button className="bg-white text-black px-4 py-1 rounded-full flex items-center">
                                Start Today <i className="fas fa-arrow-right ml-2"></i>
                            </button>
                        </nav>
                        
                        {/* Hero Section */}
                        <div className="relative h-[400px] overflow-hidden">
                            <img 
                                src="https://picsum.photos/seed/digital-guild-hero/1920/800" 
                                alt="Digital Guild Hero" 
                                className="w-full h-full object-cover brightness-75"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center px-16">
                                <h1 className="text-white text-4xl font-bold max-w-md">
                                    We are a digital guild rooted in strategic creativity —
                                    <br />poised to fulfill greatest campaigns...
                                </h1>
                            </div>
                            <div className="absolute bottom-10 right-10 bg-black bg-opacity-70 p-3 rounded-lg">
                                <div className="flex items-center text-white">
                                    <div className="mr-3">
                                        <img src="https://picsum.photos/seed/icon-badge/50/50" alt="Badge" className="rounded" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Designing in Solution</p>
                                        <div className="flex mt-1">
                                            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-1"></span>
                                            <span className="bg-yellow-500 w-2 h-2 rounded-full mr-1"></span>
                                            <span className="bg-yellow-500 w-2 h-2 rounded-full"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Feature Cards Section */}
                    <section className="py-16 px-16">
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center">
                                <span className="text-gray-500 mr-2">01</span>
                                <div className="w-32 h-1 bg-gray-200"></div>
                            </div>
                            <div className="flex space-x-2">
                                <span className="text-gray-500">02</span>
                                <span className="text-gray-500">03</span>
                                <span className="text-gray-500">04</span>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gray-100 rounded-lg overflow-hidden relative">
                                <img 
                                    src="https://picsum.photos/seed/vision-card/600/400" 
                                    alt="Vision Card" 
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-6 flex flex-col justify-end">
                                    <h3 className="text-white text-xl font-bold">Vision-provided</h3>
                                    <p className="text-white text-sm mt-2">Beautiful Vision Oriented</p>
                                    <button className="mt-4 bg-white text-black px-4 py-2 rounded-full text-sm flex items-center">
                                        Learn More <i className="fas fa-arrow-right ml-2"></i>
                                    </button>
                                </div>
                            </div>
                            
                            <div className="bg-gray-900 rounded-lg overflow-hidden relative">
                                <img 
                                    src="https://picsum.photos/seed/nextgen-card/600/400" 
                                    alt="Nextgen Card" 
                                    className="w-full h-64 object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-6 flex flex-col justify-end">
                                    <h3 className="text-white text-xl font-bold">Nextgen-styled</h3>
                                    <p className="text-white text-sm mt-2">Modern Wood Provided</p>
                                    <button className="mt-4 bg-white text-black px-4 py-2 rounded-full text-sm flex items-center">
                                        Learn More <i className="fas fa-arrow-right ml-2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-center mt-8 space-x-2">
                            <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
                            <button className="w-3 h-3 bg-black rounded-full"></button>
                        </div>
                    </section>

                    {/* About Section */}
                    <section className="py-16 px-16 border-b border-gray-200">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 pr-8">
                                <h2 className="text-3xl font-bold mb-4">Empowering Visionary Founders From Day One</h2>
                                <p className="text-gray-600 mb-6">
                                    We create intuitive and visually engaging digital experiences that enhance user interaction and satisfaction.
                                </p>
                                <button className="bg-black text-white px-6 py-2 rounded-full flex items-center">
                                    Start Today <i className="fas fa-arrow-right ml-2"></i>
                                </button>
                            </div>
                            <div className="md:w-1/2 mt-8 md:mt-0">
                                <img 
                                    src="https://picsum.photos/seed/about-image/600/400" 
                                    alt="About Us" 
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Team Section */}
                    <section className="py-16 px-16">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-center text-2xl font-medium text-gray-600 mb-12">
                                We are a team of visionary designers, strategists, and innovators dedicated to crafting exceptional digital experiences. Our mission is to bridge creativity with functionality,
                            </h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative rounded-lg overflow-hidden">
                                    <img 
                                        src="https://picsum.photos/seed/team-video/600/400" 
                                        alt="Team Video" 
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button className="bg-white bg-opacity-80 w-16 h-16 rounded-full flex items-center justify-center">
                                            <i className="fas fa-play text-black text-xl"></i>
                                        </button>
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                                        Can't imagine without them!
                                    </div>
                                </div>
                                
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="font-bold">Woodmetal</h3>
                                            <p className="text-sm text-gray-600">Insights</p>
                                        </div>
                                        <div className="text-right">
                                            <h3 className="font-bold">Ryan Said</h3>
                                            <div className="flex mt-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className="text-yellow-400">★</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Global best agency creative digital marketing solutions.
                                    </p>
                                    <div className="flex justify-end">
                                        <img 
                                            src="https://picsum.photos/seed/testimonial-avatar/50/50" 
                                            alt="Testimonial Avatar" 
                                            className="w-10 h-10 rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="py-16 px-16">
                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <div className="text-right">
                                    <h3 className="text-4xl font-bold">12+</h3>
                                    <p className="text-sm text-gray-600">Years of Service</p>
                                </div>
                                <p className="text-xs text-gray-500 mt-4">
                                    By making your digital marketing agency website look professional, you can increase your
                                </p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <div className="text-right">
                                    <h3 className="text-4xl font-bold">80+</h3>
                                    <p className="text-sm text-gray-600">Team Members</p>
                                </div>
                                <p className="text-xs text-gray-500 mt-4">
                                    By making your digital marketing agency website look professional, you can increase your
                                </p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <div className="text-right">
                                    <h3 className="text-4xl font-bold">3K+</h3>
                                    <p className="text-sm text-gray-600">Happy Clients</p>
                                </div>
                                <p className="text-xs text-gray-500 mt-4">
                                    By making your digital marketing agency website look professional, you can increase your
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Specialization Section */}
                    <section className="py-16 px-16">
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center">
                                <span className="text-gray-500 mr-2">01</span>
                                <div className="w-32 h-1 bg-gray-200"></div>
                            </div>
                            <div className="flex space-x-2">
                                <span className="text-gray-500">02</span>
                                <span className="text-gray-500">03</span>
                                <span className="text-gray-500">04</span>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <h2 className="text-2xl font-bold mb-4">we specialize in designing and crafting high-quality wooden products that blend aesthetics.</h2>
                                <div className="flex mt-8">
                                    <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                                        <i className="fas fa-chevron-left text-gray-600"></i>
                                    </button>
                                    <button className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                                        <i className="fas fa-chevron-right text-white"></i>
                                    </button>
                                </div>
                            </div>
                            
                            <div className="bg-gray-100 rounded-lg overflow-hidden relative">
                                <img 
                                    src="https://picsum.photos/seed/specialization/600/400" 
                                    alt="Specialization" 
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 p-2 rounded-lg">
                                    <div className="flex items-center text-white">
                                        <div className="mr-3">
                                            <img src="https://picsum.photos/seed/icon-badge/40/40" alt="Badge" className="rounded" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-xs">Designing in Solution</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Final CTA Section */}
                    <section className="relative py-24 px-16">
                        <div className="absolute inset-0 bg-black">
                            <img 
                                src="https://picsum.photos/seed/final-cta/1920/800" 
                                alt="Final CTA" 
                                className="w-full h-full object-cover opacity-60"
                            />
                        </div>
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                            <h2 className="text-4xl font-bold mb-4">Digital products<br />creatives & immersive</h2>
                            <button className="bg-white text-black px-6 py-2 rounded-full flex items-center mt-4">
                                Start Today <i className="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="py-6 px-16 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600">Copyright 2023, All Rights Reserved</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-600 hover:text-black"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-gray-600 hover:text-black"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="text-gray-600 hover:text-black"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </footer>
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>`,
        powerOutput: `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Guild</title>
    <script src="https://cdn.jsdelivr.net/npm/react@18.0.0/umd/react.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@18.0.0/umd/react-dom.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@babel/standalone/babel.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        html, body { height: 100%; }
        body {
            font-family: 'Inter', sans-serif;
            display: flex;
            flex-direction: column;
        }
        #root { flex-grow: 1; display: flex; flex-direction: column; }
        .hero-section {
            background-image: url('https://picsum.photos/seed/wood-design/1200/400');
            background-size: cover;
            background-position: center;
        }
        .feature-card-1 {
            background-image: url('https://picsum.photos/seed/vision-oriented/400/250');
            background-size: cover;
            background-position: center;
        }
        .feature-card-2 {
            background-image: url('https://picsum.photos/seed/nextgen-styled/400/250');
            background-size: cover;
            background-position: center;
        }
        .team-video {
            background-image: url('https://picsum.photos/seed/team-video/600/200');
            background-size: cover;
            background-position: center;
        }
        .specialization-image {
            background-image: url('https://picsum.photos/seed/wood-products/600/300');
            background-size: cover;
            background-position: center;
        }
        .digital-products {
            background-image: url('https://picsum.photos/seed/digital-products/1200/400');
            background-size: cover;
            background-position: center;
        }
    </style>
</head>
<body class="bg-gray-50">
    <div id="root"></div>
    <script>
        window.onerror = function(message, source, lineno, colno, error) {
            document.body.innerHTML = '<div style="color:red; padding:20px; background:white;"><h1>Error</h1><p>' + message + '</p><p>' + source + ':' + lineno + '</p></div>';
        };
    </script>

    <script type="text/babel">
        const App = () => {
            return (
                <div className="bg-white shadow-lg min-h-full flex flex-col">
                    {/* Navigation */}
                    <nav className="flex items-center justify-between px-4 py-3 bg-white">
                        <div className="flex items-center">
                            <img src="https://placehold.co/30x30/orange/white?text=G" alt="Guild logo" className="h-8 w-8 rounded-full" />
                        </div>
                        <div className="hidden md:flex space-x-6">
                            <a href="#" className="text-sm text-gray-800">Services</a>
                            <a href="#" className="text-sm text-gray-800">Pricing</a>
                            <a href="#" className="text-sm text-gray-800">Features</a>
                            <a href="#" className="text-sm text-gray-800">Resources</a>
                        </div>
                        <button className="bg-white border border-gray-300 text-xs px-3 py-1 rounded-md flex items-center">
                            Start Today <i className="fas fa-arrow-right ml-2"></i>
                        </button>
                    </nav>

                    {/* Hero Section */}
                    <div className="relative hero-section h-64 md:h-96">
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        <div className="relative z-10 p-8 text-white">
                            <h1 className="text-2xl md:text-3xl font-bold max-w-xl">
                                We are a digital guild rooted in strategic creativity — 
                                poised to fulfill greatest campaigns...
                            </h1>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-gray-800 bg-opacity-70 p-2 rounded">
                            <div className="flex items-center text-white text-xs">
                                <span className="mr-2">Designing in Solution</span>
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-start p-2 space-x-2">
                        <a href="#" className="text-gray-600"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-gray-600"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-gray-600"><i className="fab fa-linkedin"></i></a>
                    </div>

                    {/* Feature Cards */}
                    <div className="px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border rounded-lg overflow-hidden relative">
                            <div className="p-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-xs text-gray-500">01</span>
                                    <span className="text-xs text-gray-500">02 03 04</span>
                                </div>
                                <p className="text-xs text-gray-600 mb-4">
                                    We create intuitive and visually engaging digital experiences that enhance user interaction and satisfaction.
                                </p>
                                <h2 className="font-bold text-lg mb-2">Empowering Visionary Founders From Day One</h2>
                                <button className="bg-black text-white text-xs px-3 py-1 rounded-full mt-2">
                                    Start Today <i className="fas fa-arrow-right ml-1"></i>
                                </button>
                            </div>
                            <div className="feature-card-1 h-48 absolute inset-0 opacity-90"></div>
                        </div>
                        
                        <div className="rounded-lg overflow-hidden relative">
                            <div className="p-4">
                                <div className="mb-2">
                                    <h3 className="font-semibold text-base">Vision-provided</h3>
                                    <p className="text-xs text-gray-500">Our Values</p>
                                </div>
                                <p className="text-xs text-gray-600 mb-2">Beautiful Vision Oriented</p>
                                <p className="text-xs text-gray-600 mb-4">from logos to brand guidelines, we shape identities that leave lasting impressions.</p>
                                <button className="bg-black text-white text-xs px-3 py-1 rounded-full">
                                    Learn More <i className="fas fa-arrow-right ml-1"></i>
                                </button>
                            </div>
                            <div className="feature-card-2 h-48 absolute inset-0 opacity-90"></div>
                            <div className="absolute bottom-4 left-4 text-white text-xs">
                                <span>01</span>
                            </div>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="px-8 py-6">
                        <div className="bg-white rounded-lg p-6">
                            <h2 className="text-center text-lg font-medium mb-4">We are a team of visionary designers, strategists, and innovators dedicated to crafting exceptional digital experiences. Our mission is to bridge creativity with functionality,</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative rounded-lg overflow-hidden">
                                    <div className="team-video h-48"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white bg-opacity-80 rounded-full p-3">
                                            <i className="fas fa-play text-gray-800"></i>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2 left-2 text-white text-xs">
                                        <p>"Can't imagine without them!"</p>
                                        <p>Ryan</p>
                                    </div>
                                </div>
                                
                                <div className="bg-gray-100 rounded-lg p-4">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-xs text-gray-500">Woodmetal</span>
                                        <span className="text-xs text-gray-500">Insights</span>
                                    </div>
                                    <h3 className="font-bold text-lg mb-1">Ryan Said</h3>
                                    <div className="flex space-x-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-600 mb-3">Global best agency creative digital marketing...</p>
                                    <div className="flex items-center">
                                        <img src="https://placehold.co/40x40/gray/white?text=R" alt="Ryan profile" className="w-8 h-8 rounded-full mr-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <p className="text-xs text-gray-600 mb-1">By making your digital marketing agency website look professional, you can increase your</p>
                            <div className="flex justify-end">
                                <div className="text-right">
                                    <h3 className="text-3xl font-bold">12+</h3>
                                    <p className="text-xs text-gray-500">Years of Service</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <p className="text-xs text-gray-600 mb-1">By making your digital marketing agency website look professional, you can increase your</p>
                            <div className="flex justify-end">
                                <div className="text-right">
                                    <h3 className="text-3xl font-bold">80+</h3>
                                    <p className="text-xs text-gray-500">Team Members</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <p className="text-xs text-gray-600 mb-1">By making your digital marketing agency website look professional, you can increase your</p>
                            <div className="flex justify-end">
                                <div className="text-right">
                                    <h3 className="text-3xl font-bold">3K+</h3>
                                    <p className="text-xs text-gray-500">Happy Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Specialization Section */}
                    <div className="px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border rounded-lg overflow-hidden relative">
                            <div className="p-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-xs text-gray-500">01</span>
                                    <span className="text-xs text-gray-500">02 03 04</span>
                                </div>
                                <p className="text-xs text-gray-600 mb-4">
                                    We create intuitive and visually engaging digital experiences that enhance user interaction and satisfaction.
                                </p>
                                <h2 className="font-bold text-lg mb-2">we specialize in designing and crafting high-quality wooden products that blend aesthetics.</h2>
                                <div className="flex space-x-2 mt-4">
                                    <button className="border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
                                        <i className="fas fa-chevron-left text-xs"></i>
                                    </button>
                                    <button className="border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
                                        <i className="fas fa-chevron-right text-xs"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="specialization-image h-48 absolute inset-0 opacity-90"></div>
                        </div>
                        
                        <div className="rounded-lg overflow-hidden relative">
                            <div className="specialization-image h-48"></div>
                            <div className="absolute bottom-4 right-4 bg-gray-800 bg-opacity-70 p-2 rounded">
                                <div className="flex items-center text-white text-xs">
                                    <span className="mr-2">Designing in Solution</span>
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Digital Products Section */}
                    <div className="relative digital-products h-64 md:h-96">
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        <div className="relative z-10 p-8 text-white flex flex-col items-center justify-center h-full">
                            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                                Digital products<br />creatives & immersive
                            </h2>
                            <button className="bg-white text-black text-xs px-4 py-2 rounded-full mt-2">
                                Start Today <i className="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="px-8 py-4 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-xs text-gray-600">Copyright 2025, All Rights Reserved</p>
                        <div className="flex space-x-4 mt-2 md:mt-0">
                            <a href="#" className="text-gray-600"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-600"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-gray-600"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </footer>
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>`,
        outputType: "html"
    },
    {
        id: "web-3",
        searchTerm: "PUREM ODA Fashion Store",
        imagePlaceholder: "/Images/Web3.jpg",
        averageOutput: `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PUREM ODA</title>
    <script src="https://cdn.jsdelivr.net/npm/react@18.0.0/umd/react.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@18.0.0/umd/react-dom.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@babel/standalone/babel.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        html, body { height: 100%; }
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f5f5f5;
            display: flex;
            flex-direction: column;
        }
        #root { flex-grow: 1; display: flex; flex-direction: column; }
    </style>
</head>
<body>
    <div id="root"></div>
    <script>
        window.onerror = function(message, source, lineno, colno, error) {
            document.body.innerHTML = '<div style="color:red; padding:20px; background:white;"><h1>Error</h1><p>' + message + '</p><p>' + source + ':' + lineno + '</p></div>';
        };
    </script>

    <script type="text/babel">
        const App = () => {
            return (
                <div className="min-h-full bg-gray-100 py-8 px-4 flex flex-col">
                    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden flex-grow flex flex-col">
                        {/* Header */}
                        <header className="flex items-center justify-between px-6 py-4 border-b">
                            <div className="text-xl font-bold">PUREM ODA</div>
                            
                            <nav className="hidden md:flex space-x-8">
                                <a href="#" className="text-gray-800 hover:text-black">WOMENSWEAR</a>
                                <a href="#" className="text-gray-800 hover:text-black">MENSWEAR</a>
                                <a href="#" className="text-gray-800 hover:text-black">KIDS</a>
                                <a href="#" className="text-gray-800 hover:text-black">SALE</a>
                                <a href="#" className="text-gray-800 hover:text-black">DISCOVER</a>
                            </nav>
                            
                            <div className="flex items-center space-x-4">
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        placeholder="Search" 
                                        className="border rounded-full py-1 px-4 pl-8 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 w-40"
                                    />
                                    <i className="fas fa-search absolute left-3 top-2 text-gray-400"></i>
                                </div>
                                <button className="text-gray-600 hover:text-gray-900">
                                    <i className="far fa-heart"></i>
                                </button>
                                <button className="text-gray-600 hover:text-gray-900 relative">
                                    <i className="fas fa-shopping-bag"></i>
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
                                </button>
                            </div>
                        </header>
                        
                        {/* Main Content */}
                        <main className="p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Left Column */}
                                <div className="bg-gray-200 p-8 rounded-lg">
                                    <h1 className="text-5xl font-bold mb-4">
                                        FOR<br/>
                                        EVERYONE BUT<br/>
                                        NOTANYONE
                                    </h1>
                                    <p className="mt-8 text-gray-700">
                                        We establish personal relationships with our boutiques, to make sure each is vetted for a stress-free shopping experience
                                    </p>
                                </div>
                                
                                {/* Right Column */}
                                <div className="relative rounded-lg overflow-hidden">
                                    <img 
                                        src="https://picsum.photos/seed/fashion1/600/450.jpg" 
                                        alt="Fashion model wearing hat" 
                                        className="w-full h-full object-cover"
                                    />
                                    <button className="absolute bottom-6 right-6 bg-white text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                                        SHOP NOW
                                    </button>
                                </div>
                            </div>
                            
                            {/* Bottom Products */}
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="relative rounded-lg overflow-hidden">
                                    <img 
                                        src="https://picsum.photos/seed/hat1/400/250.jpg" 
                                        alt="#RIPSTOP hat" 
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 p-4 text-white">
                                        <span className="font-semibold">#RIPSTOP</span>
                                    </div>
                                </div>
                                
                                <div className="relative rounded-lg overflow-hidden">
                                    <img 
                                        src="https://picsum.photos/seed/hat2/400/250.jpg" 
                                        alt="#INSULATED hat" 
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 p-4 text-white">
                                        <span className="font-semibold">#INSULATED</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="flex justify-end space-x-4 mt-6">
                                <button className="flex items-center bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition">
                                    LEARN MORE
                                    <i className="fas fa-chevron-down ml-2"></i>
                                </button>
                                <button className="flex items-center bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition">
                                    CONTACT US
                                    <i className="far fa-envelope ml-2"></i>
                                </button>
                            </div>
                        </main>
                    </div>
                </div>
            );
        };
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>`,
        powerOutput: `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PUREM ODA</title>
    <script src="https://cdn.jsdelivr.net/npm/react@18.0.0/umd/react.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@babel/standalone/babel.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        html, body { height: 100%; }
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f5f5f5;
            display: flex;
            flex-direction: column;
        }
        #root { flex-grow: 1; display: flex; flex-direction: column; }
        .hero-arrow {
            position: relative;
        }
        .hero-arrow::after {
            content: '';
            position: absolute;
            width: 100px;
            height: 1px;
            background-color: black;
            top: 50%;
            left: 200px;
        }
        .hero-arrow::before {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-left: 10px solid black;
            top: 50%;
            left: 300px;
            transform: translateY(-50%);
        }
    </style>
</head>
<body>
    <div id="root"></div>
    <script>
        window.onerror = function(message, source, lineno, colno, error) {
            document.body.innerHTML = '<div style="color:red; padding:20px; background:white;"><h1>Error</h1><p>' + message + '</p><p>' + source + ':' + lineno + '</p></div>';
        };
    </script>

    <script type="text/babel">
        const App = () => {
            return (
                <div className="min-h-full flex justify-center py-8 bg-gray-100">
                    <div className="w-full max-w-6xl bg-white shadow-sm flex flex-col">
                        {/* Navigation */}
                        <nav className="flex items-center justify-between px-8 py-4 border-b">
                            <div className="font-bold text-lg">PUREM<br />ODA</div>
                            <div className="hidden md:flex space-x-8">
                                <a href="#" className="hover:text-gray-600">WOMENSWEAR</a>
                                <a href="#" className="hover:text-gray-600">MENSEAR</a>
                                <a href="#" className="hover:text-gray-600">KIDS</a>
                                <a href="#" className="hover:text-gray-600">SALE</a>
                                <a href="#" className="hover:text-gray-600">DISCOVER</a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button className="text-gray-600">
                                    <i className="fas fa-search"></i>
                                </button>
                                <input 
                                    type="text" 
                                    placeholder="Search" 
                                    className="border rounded-md px-3 py-1 text-sm hidden md:block w-32"
                                />
                                <button className="text-gray-600">
                                    <i className="far fa-heart"></i>
                                </button>
                                <button className="text-gray-600">
                                    <i className="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </nav>

                        {/* Main Content */}
                        <div className="p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                {/* Left Column - Text */}
                                <div className="bg-gray-200 p-8 flex flex-col justify-center">
                                    <h1 className="text-5xl font-bold mb-4">
                                        FOR<br />
                                        EVERYONE BUT<br />
                                        NOTANYONE
                                    </h1>
                                    <div className="hero-arrow mb-8"></div>
                                    <p className="text-gray-800 mt-4">
                                        We establish personal relationships with our boutiques, to make sure each is vetted for a stress-free shopping experience
                                    </p>
                                </div>
                                
                                {/* Right Column - Image */}
                                <div className="relative">
                                    <img 
                                        src="https://picsum.photos/seed/fashion1/600/500.jpg" 
                                        alt="Fashion model wearing hat" 
                                        className="w-full h-auto object-cover rounded-lg"
                                    />
                                    <button className="absolute bottom-6 right-6 bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                                        SHOP NOW
                                    </button>
                                </div>
                            </div>

                            {/* Product Thumbnails */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="relative">
                                    <img 
                                        src="https://picsum.photos/seed/hat1/400/250.jpg" 
                                        alt="#RIPSTOP" 
                                        className="w-full h-auto object-cover rounded-lg"
                                    />
                                    <div className="absolute bottom-4 left-4 text-white font-bold">#RIPSTOP</div>
                                </div>
                                <div className="relative">
                                    <img 
                                        src="https://picsum.photos/seed/hat2/400/250.jpg" 
                                        alt="#INSULATED" 
                                        className="w-full h-auto object-cover rounded-lg"
                                    />
                                    <div className="absolute bottom-4 left-4 text-white font-bold">#INSULATED</div>
                                </div>
                            </div>

                            {/* Bottom Buttons */}
                            <div className="flex justify-end space-x-4">
                                <button className="bg-white border border-gray-300 text-black px-6 py-2 rounded-full flex items-center hover:bg-gray-50 transition">
                                    LEARN MORE
                                    <i className="fas fa-chevron-down ml-2"></i>
                                </button>
                                <button className="bg-white border border-gray-300 text-black px-6 py-2 rounded-full flex items-center hover:bg-gray-50 transition">
                                    CONTACT US
                                    <i className="far fa-envelope ml-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>`,
        outputType: "html"
    },
    {
        id: "web-4",
        searchTerm: "Meher Eco-Friendly Products",
        imagePlaceholder: "/Images/Web4.jpg",
        averageOutput: `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meher - Eco-Friendly Products</title>
    <script src="https://cdn.jsdelivr.net/npm/react@18.0.0/umd/react.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@18.0.0/umd/react-dom.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@babel/standalone/babel.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f5f7fa;
        }
        .star-rating {
            color: #FFD700;
        }
    </style>
</head>
<body>
    <div id="root"></div>
    <script>
        window.onerror = function(message, source, lineno, colno, error) {
            document.body.innerHTML = '<div style="color:red; padding:20px; background:white;"><h1>Error</h1><p>' + message + '</p><p>' + source + ':' + lineno + '</p></div>';
        };
    </script>

    <script type="text/babel">
        const App = () => {
            return (
                <div className="min-h-screen flex flex-col">
                    {/* Header */}
                    <header className="bg-white shadow-sm py-3 px-4 md:px-10">
                        <div className="container mx-auto flex justify-between items-center">
                            <a href="#" className="font-bold text-xl">Meher</a>
                            <nav className="hidden md:flex space-x-6">
                                <a href="#" className="text-gray-800 hover:text-blue-600">Home</a>
                                <a href="#" className="text-gray-800 hover:text-blue-600">Product</a>
                                <a href="#" className="text-gray-800 hover:text-blue-600">About Us</a>
                                <a href="#" className="text-gray-800 hover:text-blue-600">Overview</a>
                                <a href="#" className="text-gray-800 hover:text-blue-600">Blog</a>
                            </nav>
                            <div className="flex items-center space-x-4">
                                <button className="text-gray-600"><i className="fas fa-search"></i></button>
                                <button className="bg-white border border-gray-300 rounded-full px-4 py-1 text-sm">Contact Us</button>
                            </div>
                        </div>
                    </header>

                    {/* Main Content */}
                    <main className="grow">
                        {/* Hero Section */}
                        <section className="py-12 bg-white">
                            <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center">
                                <div className="md:w-1/2 mb-8 md:mb-0">
                                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
                                        Access to high-Quality,<br />
                                        <span className="text-green-600">Eco-Friendly</span> products<br />
                                        and services
                                    </h1>
                                    <div className="flex items-center mt-4">
                                        <span className="mr-2">→</span>
                                        <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm">Contact Us</button>
                                    </div>
                                </div>
                                <div className="md:w-1/3 flex flex-col items-end">
                                    <div className="flex items-center mb-2">
                                        <img src="https://picsum.photos/seed/user1/40/40.jpg" alt="User" className="w-8 h-8 rounded-full mr-2" />
                                        <img src="https://picsum.photos/seed/user2/40/40.jpg" alt="User" className="w-8 h-8 rounded-full mr-2" />
                                        <img src="https://picsum.photos/seed/user3/40/40.jpg" alt="User" className="w-8 h-8 rounded-full mr-2" />
                                        <span className="text-gray-500">+</span>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-lg">500+</p>
                                        <p className="text-sm text-gray-500">Happy Customers</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Featured Products */}
                        <section className="py-8 bg-white">
                            <div className="container mx-auto px-4 md:px-10">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="relative rounded-lg overflow-hidden shadow-md">
                                        <img src="https://picsum.photos/seed/product1/400/250.jpg" alt="Product 1" className="w-full h-48 object-cover" />
                                        <button className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md">
                                            <i className="far fa-heart text-gray-600"></i>
                                        </button>
                                        <button className="absolute bottom-3 right-3 bg-white px-3 py-1 rounded-full text-xs shadow-md">Buy Now</button>
                                        <div className="absolute bottom-0 left-0 bg-white p-3 w-full">
                                            <p className="text-sm font-medium">Get up to 5% off discounts</p>
                                        </div>
                                    </div>
                                    <div className="relative rounded-lg overflow-hidden shadow-md">
                                        <img src="https://picsum.photos/seed/product2/400/250.jpg" alt="Product 2" className="w-full h-48 object-cover" />
                                        <button className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md">
                                            <i className="far fa-heart text-gray-600"></i>
                                        </button>
                                        <button className="absolute bottom-3 right-3 bg-white px-3 py-1 rounded-full text-xs shadow-md">Buy Now</button>
                                        <div className="absolute bottom-0 left-0 bg-white p-3 w-full">
                                            <p className="text-sm font-medium">Soothing Cap connected comfort</p>
                                        </div>
                                    </div>
                                    <div className="relative rounded-lg overflow-hidden shadow-md">
                                        <img src="https://picsum.photos/seed/product3/400/250.jpg" alt="Product 3" className="w-full h-48 object-cover" />
                                        <button className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md">
                                            <i className="far fa-heart text-gray-600"></i>
                                        </button>
                                        <button className="absolute bottom-3 right-3 bg-white px-3 py-1 rounded-full text-xs shadow-md">Buy Now</button>
                                        <div className="absolute bottom-0 left-0 bg-white p-3 w-full">
                                            <p className="text-sm font-medium">Wmx rubber zebra shoes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Top Selling Products */}
                        <section className="py-12 bg-white">
                            <div className="container mx-auto px-4 md:px-10">
                                <div className="flex justify-between items-center mb-8">
                                    <div>
                                        <a href="#" className="text-sm text-gray-600 hover:text-blue-600">See More product</a>
                                        <h2 className="text-2xl font-bold mt-2">Top-Selling Product of the year Collection</h2>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm text-gray-600">Featured Work</span>
                                        <i className="fas fa-sync-alt text-gray-400"></i>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                                            <img src="https://picsum.photos/seed/topproduct1/200/200.jpg" alt="Summer dress" className="w-full h-40 object-cover" />
                                            <div className="p-3">
                                                <h3 className="font-medium text-sm">Summer girls dress</h3>
                                                <div className="flex justify-between items-center mt-2">
                                                    <div className="star-rating text-xs">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                    </div>
                                                    <span className="font-bold"> 150</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                                            <img src="https://picsum.photos/seed/topproduct2/200/200.jpg" alt="Summer Cloth" className="w-full h-40 object-cover" />
                                            <div className="p-3">
                                                <h3 className="font-medium text-sm">Summer Cloth</h3>
                                                <div className="flex justify-between items-center mt-2">
                                                    <div className="star-rating text-xs">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                    </div>
                                                    <span className="font-bold">$120</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                                            <img src="https://picsum.photos/seed/topproduct3/200/200.jpg" alt="Water Bottle" className="w-full h-40 object-cover" />
                                            <div className="p-3">
                                                <h3 className="font-medium text-sm">Water Bottle</h3>
                                                <div className="flex justify-between items-center mt-2">
                                                    <div className="star-rating text-xs">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                    </div>
                                                    <span className="font-bold">$67</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                                            <img src="https://picsum.photos/seed/topproduct4/200/200.jpg" alt="Cap" className="w-full h-40 object-cover" />
                                            <div className="p-3">
                                                <h3 className="font-medium text-sm">Cap</h3>
                                                <div className="flex justify-between items-center mt-2">
                                                    <div className="star-rating text-xs">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                    </div>
                                                    <span className="font-bold">$67</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                                        <i className="fas fa-chevron-left text-gray-600"></i>
                                    </button>
                                    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                                        <i className="fas fa-chevron-right text-gray-600"></i>
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Why Choose Us */}
                        <section className="py-12 bg-gray-50">
                            <div className="container mx-auto px-4 md:px-10">
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="md:w-1/2 mb-8 md:mb-0">
                                        <img src="https://picsum.photos/seed/whychooseus/500/350.jpg" alt="Why Choose Us" className="rounded-lg shadow-md w-full" />
                                    </div>
                                    <div className="md:w-1/2 md:pl-10">
                                        <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
                                        <p className="text-gray-600 mb-6">We pride ourselves on offering products that meet the highest standards of quality. Each item is carefully selected, tested, and crafted to ensure durability and customer satisfaction.</p>
                                        
                                        <div className="space-y-4">
                                            <div className="border-b pb-4">
                                                <div className="flex justify-between items-center cursor-pointer">
                                                    <h3 className="font-medium">Unrivaled Quality</h3>
                                                    <i className="fas fa-plus text-gray-500"></i>
                                                </div>
                                            </div>
                                            <div className="border-b pb-4">
                                                <div className="flex justify-between items-center cursor-pointer">
                                                    <h3 className="font-medium">Sustainability</h3>
                                                    <i className="fas fa-minus text-gray-500"></i>
                                                </div>
                                            </div>
                                            <div className="border-b pb-4">
                                                <div className="flex justify-between items-center cursor-pointer">
                                                    <h3 className="font-medium">Unrivaled Variety</h3>
                                                    <i className="fas fa-minus text-gray-500"></i>
                                                </div>
                                            </div>
                                            <div className="pb-4">
                                                <div className="flex justify-between items-center cursor-pointer">
                                                    <h3 className="font-medium">Legacy Of Excellence</h3>
                                                    <i className="fas fa-plus text-gray-500"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Features */}
                        <section className="py-12 bg-white">
                            <div className="container mx-auto px-4 md:px-10">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="font-bold mb-2">100% Authentic Product</h3>
                                        <p className="text-sm text-gray-600 mb-4">Premium quality at a fair price. We guarantee authenticity on all our products.</p>
                                        <button className="text-sm border border-gray-300 rounded-full px-4 py-1">See More</button>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="font-bold mb-2">Free & Easy Return</h3>
                                        <p className="text-sm text-gray-600 mb-4">Return any item within 30 days for a full refund. No questions asked.</p>
                                        <button className="text-sm border border-gray-300 rounded-full px-4 py-1">See More</button>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="font-bold mb-2">Safe Payments</h3>
                                        <p className="text-sm text-gray-600 mb-4">Secure payment methods including credit card, PayPal, and more.</p>
                                        <button className="text-sm border border-gray-300 rounded-full px-4 py-1">See More</button>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-lg relative">
                                        <img src="https://picsum.photos/seed/promo/200/150.jpg" alt="Promotion" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                                        <div className="relative z-10">
                                            <h3 className="font-bold mb-2">Summer Cloth</h3>
                                            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">30% OFF</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Best Leather Bag */}
                        <section className="py-12 bg-white">
                            <div className="container mx-auto px-4 md:px-10">
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="md:w-1/2 mb-8 md:mb-0">
                                        <h2 className="text-2xl font-bold mb-4">Best Leather Bag Collection For You</h2>
                                        <p className="text-gray-600 mb-6">For those who prefer a hands-free, stylish, and functional option.</p>
                                        <button className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm">Shop Now</button>
                                    </div>
                                    <div className="md:w-1/2">
                                        <img src="https://picsum.photos/seed/bag/400/300.jpg" alt="Leather Bag" className="rounded-lg shadow-md w-full" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* All Products */}
                        <section className="py-12 bg-white">
                            <div className="container mx-auto px-4 md:px-10">
                                <h2 className="text-2xl font-bold mb-2">Our All Products</h2>
                                <p className="text-gray-600 mb-6">These products are available online or in-store based on availability and demand.</p>
                                
                                <div className="flex space-x-2 mb-8 overflow-x-auto">
                                    <button className="bg-gray-100 px-4 py-2 rounded-full text-sm whitespace-nowrap">Shoes</button>
                                    <button className="bg-gray-100 px-4 py-2 rounded-full text-sm whitespace-nowrap">Clothing</button>
                                    <button className="bg-gray-100 px-4 py-2 rounded-full text-sm whitespace-nowrap">Accessories</button>
                                    <button className="bg-gray-100 px-4 py-2 rounded-full text-sm whitespace-nowrap">Jewellery</button>
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                        <img src="https://picsum.photos/seed/wintercloth/300/300.jpg" alt="Winter cloth collection" className="w-full h-48 object-cover" />
                                        <div className="p-4">
                                            <h3 className="font-medium mb-2">Winter cloth collection</h3>
                                            <div className="flex justify-between items-center">
                                                <div className="star-rating text-xs">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <span className="font-bold">$325.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                        <img src="https://picsum.photos/seed/colorfulcap/300/300.jpg" alt="Our all colorful cap" className="w-full h-48 object-cover" />
                                        <div className="p-4">
                                            <h3 className="font-medium mb-2">Our all colorful cap</h3>
                                            <div className="flex justify-between items-center">
                                                <div className="star-rating text-xs">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <span className="font-bold">$250.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                        <img src="https://picsum.photos/seed/handphone/300/300.jpg" alt="Handphone collection" className="w-full h-48 object-cover" />
                                        <div className="p-4">
                                            <h3 className="font-medium mb-2">Handphone collection</h3>
                                            <div className="flex justify-between items-center">
                                                <div className="star-rating text-xs">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <span className="font-bold">$392.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                        <img src="https://picsum.photos/seed/newshoe/300/300.jpg" alt="New shoe" className="w-full h-48 object-cover" />
                                        <div className="p-4">
                                            <h3 className="font-medium mb-2">New shoe</h3>
                                            <div className="flex justify-between items-center">
                                                <div className="star-rating text-xs">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <span className="font-bold">$299.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                        <img src="https://picsum.photos/seed/womenbag/300/300.jpg" alt="Fashionable women bag" className="w-full h-48 object-cover" />
                                        <div className="p-4">
                                            <h3 className="font-medium mb-2">Fashionable women bag</h3>
                                            <div className="flex justify-between items-center">
                                                <div className="star-rating text-xs">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <span className="font-bold">$750.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                        <img src="https://picsum.photos/seed/lamp/300/300.jpg" alt="Luxuries table lamp" className="w-full h-48 object-cover" />
                                        <div className="p-4">
                                            <h3 className="font-medium mb-2">Luxuries table lamp</h3>
                                            <div className="flex justify-between items-center">
                                                <div className="star-rating text-xs">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <span className="font-bold">$220.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Testimonials */}
                        <section className="py-12 bg-white">
                            <div className="container mx-auto px-4 md:px-10">
                                <h2 className="text-2xl font-bold mb-8 text-center">Our happy clients</h2>
                                
                                <div className="relative">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                            <div className="flex items-center mb-4">
                                                <img src="https://picsum.photos/seed/apalamil/60/60.jpg" alt="Apalamil" className="w-12 h-12 rounded-full mr-4" />
                                                <div>
                                                    <h3 className="font-medium">Apalamil</h3>
                                                    <p className="text-sm text-gray-500">02 February</p>
                                                </div>
                                            </div>
                                            <div className="star-rating mb-4">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <p className="text-gray-600">A Cut Above the Rest</p>
                                            <p className="text-gray-600 mt-2 text-sm">I recently visited this barber, and I must say it was a classic barber experience. He took the time to understand exactly what I wanted. He took the time to understand exactly what I wanted.</p>
                                        </div>
                                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                            <div className="flex items-center mb-4">
                                                <img src="https://picsum.photos/seed/jinoma/60/60.jpg" alt="Jinoma" className="w-12 h-12 rounded-full mr-4" />
                                                <div>
                                                    <h3 className="font-medium">Jinoma</h3>
                                                    <p className="text-sm text-gray-500">02 February</p>
                                                </div>
                                            </div>
                                            <div className="star-rating mb-4">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <p className="text-gray-600">Ahammad billah</p>
                                            <p className="text-gray-600 mt-2 text-sm">"I've been using this blender daily for a month, and it blends smoothly without any issues. It's powerful enough to handle frozen fruits and tough veggies."</p>
                                        </div>
                                    </div>
                                    
                                    <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                                        <i className="fas fa-chevron-left text-gray-600"></i>
                                    </button>
                                    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                                        <i className="fas fa-chevron-right text-gray-600"></i>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </main>

                    {/* Footer */}
                    <footer className="bg-gray-900 text-white pt-12 pb-6">
                        <div className="container mx-auto px-4 md:px-10">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-4">Meher</h3>
                                    <p className="text-gray-400 text-sm mb-4">We Do Not Divide Our Collections To Seasons</p>
                                    <p className="text-gray-400 text-sm mb-2">Technology Park</p>
                                    <p className="text-gray-400 text-sm mb-2">8-14 Marie Curie Street</p>
                                    <p className="text-gray-400 text-sm mb-4">09876 Barcelona</p>
                                    <p className="text-gray-400 text-sm flex items-center">
                                        <i className="fas fa-envelope mr-2"></i>
                                        hello@meherhub.com
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-bold mb-4">Customers Services</h3>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        <li><a href="#" className="hover:text-white">FAQ</a></li>
                                        <li><a href="#" className="hover:text-white">My Orders</a></li>
                                        <li><a href="#" className="hover:text-white">Start a Return</a></li>
                                        <li><a href="#" className="hover:text-white">Shipping and Returns</a></li>
                                        <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
                                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold mb-4">Products</h3>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        <li><a href="#" className="hover:text-white">Shoes</a></li>
                                        <li><a href="#" className="hover:text-white">Clothing</a></li>
                                        <li><a href="#" className="hover:text-white">Accessories</a></li>
                                        <li><a href="#" className="hover:text-white">Jewellery</a></li>
                                        <li><a href="#" className="hover:text-white">Men</a></li>
                                        <li><a href="#" className="hover:text-white">Women</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold mb-4">Company Info</h3>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        <li><a href="#" className="hover:text-white">About Us</a></li>
                                        <li><a href="#" className="hover:text-white">How it works</a></li>
                                        <li><a href="#" className="hover:text-white">Refer and Earn</a></li>
                                        <li><a href="#" className="hover:text-white">Our Values</a></li>
                                        <li><a href="#" className="hover:text-white">Service Discount</a></li>
                                        <li><a href="#" className="hover:text-white">Educational Discount</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                                <div className="text-sm text-gray-400 mb-4 md:mb-0">
                                    © Copyright 2024 all rights reserved
                                </div>
                                <div className="flex space-x-4 mb-4 md:mb-0">
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                                <div className="text-sm text-gray-400">
                                    <a href="#" className="hover:text-white mr-4">Privacy</a>
                                    <a href="#" className="hover:text-white mr-4">Security</a>
                                    <a href="#" className="hover:text-white">Terms</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>`,
        powerOutput: `<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meher - Eco-Friendly Products</title>
    <script src="https://cdn.jsdelivr.net/npm/react@18.0.0/umd/react.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@18.0.0/umd/react-dom.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@babel/standalone/babel.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f5f7fa;
        }
        .product-card:hover {
            transform: translateY(-5px);
            transition: all 0.3s ease;
        }
        .accordion-item.active .accordion-content {
            display: block;
        }
        .star-rating {
            color: #FFD700;
        }
    </style>
</head>
<body>
    <div id="root"></div>
    <script>
        window.onerror = function(message, source, lineno, colno, error) {
            document.body.innerHTML = '<div style="color:red; padding:20px; background:white;"><h1>Error</h1><p>' + message + '</p><p>' + source + ':' + lineno + '</p></div>';
        };
    </script>

    <script type="text/babel">
        // Reusable Components
        const StarRating = ({ rating }) => {
            return (
                <div className="star-rating flex">
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className={(i < Math.floor(rating) ? 'fas' : 'far') + ' fa-star'}></i>
                    ))}
                </div>
            );
        };

        const ProductCard = ({ image, title, price, rating }) => {
            return (
                <div className="product-card bg-white rounded-lg overflow-hidden shadow-md">
                    <img src={image} alt={title} className="w-full h-40 object-cover" />
                    <div className="p-4">
                        <h3 className="font-medium">{title}</h3>
                        <div className="flex justify-between items-center mt-2">
                            <StarRating rating={rating} />
                            <span className="font-bold">$150</span>
                        </div>
                    </div>
                </div>
            );
        };

        const TestimonialCard = ({ avatar, name, date, rating, quote, title }) => {
            return (
                <div className="bg-white p-6 rounded-lg shadow-md border">
                    <div className="flex items-center mb-4">
                        <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
                        <div>
                            <h3 className="font-bold">{name}</h3>
                            <p className="text-sm text-gray-500">{date}</p>
                        </div>
                    </div>
                    <div className="star-rating mb-3">
                        {[...Array(5)].map((_, i) => (
                            <i key={i} className="fas fa-star"></i>
                        ))}
                    </div>
                    <p className="text-gray-600 italic">"{title}"</p>
                    <p className="text-sm text-gray-600 mt-2">{quote}</p>
                </div>
            );
        };

        const FeatureCard = ({ icon, title, description, buttonText }) => {
            return (
                <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="font-bold mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{description}</p>
                    <button className="border border-gray-300 rounded-full px-4 py-1 text-sm">{buttonText}</button>
                </div>
            );
        };

        const AccordionItem = ({ title, isOpen, toggleOpen, children }) => {
            return (
                <div className="accordion-item border-b pb-3">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={toggleOpen}
                    >
                        <h3 className="font-medium">{title}</h3>
                        <i className="fas fa-plus"></i>
                    </div>
                    {isOpen && (
                        <div className="accordion-content pt-2 text-sm text-gray-600">
                            {children}
                        </div>
                    )}
                </div>
            );
        };

        const App = () => {
            const [activeAccordion, setActiveAccordion] = React.useState(0);

            const toggleAccordion = (index) => {
                if (activeAccordion === index) {
                    setActiveAccordion(null);
                } else {
                    setActiveAccordion(index);
                }
            };

            return (
                <div className="min-h-screen flex flex-col">
                    {/* Header */}
                    <header className="bg-white shadow-sm py-3 px-4 md:px-8">
                        <div className="container mx-auto flex justify-between items-center">
                            <a href="#" className="text-xl font-bold">Meher</a>
                            <nav className="hidden md:flex space-x-6">
                                <a href="#" className="text-gray-800">Home</a>
                                <a href="#" className="text-gray-800">Product</a>
                                <a href="#" className="text-gray-800">About Us</a>
                                <a href="#" className="text-gray-800">Overview</a>
                                <a href="#" className="text-gray-800">Blog</a>
                            </nav>
                            <div className="flex items-center space-x-4">
                                <button className="text-gray-700"><i className="fas fa-search"></i></button>
                                <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">Contact Us</button>
                            </div>
                        </div>
                    </header>

                    {/* Main Content */}
                    <main className="grow">
                        {/* Hero Section */}
                        <section className="py-12 px-4 md:px-8 bg-white">
                            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                                <div className="md:w-1/2 mb-8 md:mb-0">
                                    <h1 className="text-4xl font-bold mb-2">Access to high-Quality,</h1>
                                    <h2 className="text-3xl font-bold mb-4">Eco-Friendly products</h2>
                                    <p className="text-2xl mb-6">and services →</p>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Contact Us</button>
                                </div>
                                <div className="md:w-1/2 flex flex-col items-end">
                                    <div className="flex items-center mb-2">
                                        <img src="https://picsum.photos/seed/avatar1/40/40.jpg" alt="User" className="w-8 h-8 rounded-full mr-2" />
                                        <img src="https://picsum.photos/seed/avatar2/40/40.jpg" alt="User" className="w-8 h-8 rounded-full mr-2" />
                                        <img src="https://picsum.photos/seed/avatar3/40/40.jpg" alt="User" className="w-8 h-8 rounded-full mr-2" />
                                        <span className="text-blue-600">+</span>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold">500+</p>
                                        <p className="text-sm text-gray-600">Happy Customers</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Featured Products */}
                        <section className="py-8 px-4 md:px-8 bg-white">
                            <div className="container mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="relative rounded-lg overflow-hidden shadow-md">
                                        <img src="https://picsum.photos/seed/product1/400/250.jpg" alt="Product 1" className="w-full h-48 object-cover" />
                                        <button className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md">
                                            <i className="far fa-heart text-gray-600"></i>
                                        </button>
                                        <button className="absolute bottom-3 right-3 bg-white px-3 py-1 rounded-md shadow-md text-sm">Buy Now</button>
                                        <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white p-2 rounded-md">
                                            <p className="text-sm">Get up to 5% off</p>
                                            <p className="text-xs">discounts</p>
                                        </div>
                                    </div>
                                    <div className="relative rounded-lg overflow-hidden shadow-md">
                                        <img src="https://picsum.photos/seed/product2/400/250.jpg" alt="Product 2" className="w-full h-48 object-cover" />
                                        <button className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md">
                                            <i className="far fa-heart text-gray-600"></i>
                                        </button>
                                        <button className="absolute bottom-3 right-3 bg-white px-3 py-1 rounded-md shadow-md text-sm">Buy Now</button>
                                        <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white p-2 rounded-md">
                                            <p className="text-sm">Soothing Cap</p>
                                            <p className="text-xs">connected comfort</p>
                                        </div>
                                    </div>
                                    <div className="relative rounded-lg overflow-hidden shadow-md">
                                        <img src="https://picsum.photos/seed/product3/400/250.jpg" alt="Product 3" className="w-full h-48 object-cover" />
                                        <button className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md">
                                            <i className="far fa-heart text-gray-600"></i>
                                        </button>
                                        <button className="absolute bottom-3 right-3 bg-white px-3 py-1 rounded-md shadow-md text-sm">Buy Now</button>
                                        <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white p-2 rounded-md">
                                            <p className="text-sm">Wmx rubber</p>
                                            <p className="text-xs">zebra shoes</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end mt-6">
                                    <button className="border border-gray-300 rounded-full px-4 py-1 text-sm flex items-center">
                                        Featured Work <i className="fas fa-chevron-down ml-2"></i>
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* See More Products */}
                        <section className="py-8 px-4 md:px-8 bg-white">
                            <div className="container mx-auto">
                                <div className="flex justify-between items-center mb-8">
                                    <button className="text-blue-600 text-sm">See More product</button>
                                    <div className="text-right max-w-md">
                                        <p className="text-sm text-gray-600">We don't divide our collections into seasons we create new models every week, and we have a few items.</p>
                                        <button className="mt-2 bg-white border border-gray-300 rounded-full px-4 py-1 text-sm">Shop Now</button>
                                    </div>
                                </div>

                                {/* Top-Selling Products */}
                                <h2 className="text-2xl font-bold mb-6">Top-Selling Product of the year Collection</h2>
                                <div className="relative">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <ProductCard 
                                            image="https://picsum.photos/seed/top1/200/200.jpg"
                                            title="Summer girls dress"
                                            price="150"
                                            rating={3.4}
                                        />
                                        <ProductCard 
                                            image="https://picsum.photos/seed/top2/200/200.jpg"
                                            title="Summer Cloth"
                                            price="120"
                                            rating={3.2}
                                        />
                                        <ProductCard 
                                            image="https://picsum.photos/seed/top3/200/200.jpg"
                                            title="Water Bottle"
                                            price="67"
                                            rating={4.2}
                                        />
                                        <ProductCard 
                                            image="https://picsum.photos/seed/top4/200/200.jpg"
                                            title="Cap"
                                            price="67"
                                            rating={4.2}
                                        />
                                    </div>
                                    <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-8 h-8 shadow-md flex items-center justify-center">
                                        <i className="fas fa-chevron-left text-gray-600"></i>
                                    </button>
                                    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-8 h-8 shadow-md flex items-center justify-center">
                                        <i className="fas fa-chevron-right text-gray-600"></i>
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Why Choose Us */}
                        <section className="py-8 px-4 md:px-8 bg-white">
                            <div className="container mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="rounded-lg overflow-hidden shadow-md">
                                        <img src="https://picsum.photos/seed/whychoose/500/300.jpg" alt="Why Choose Us" className="w-full h-64 object-cover" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
                                        <p className="text-gray-600 mb-6">We pride ourselves on offering products that meet the highest standards of quality. Each item is carefully selected, tested, and crafted to ensure durability and customer satisfaction.</p>
                                        
                                        <div className="space-y-3">
                                            <AccordionItem 
                                                title="Unrivaled Quality" 
                                                isOpen={activeAccordion === 0}
                                                toggleOpen={() => toggleAccordion(0)}
                                            >
                                                We maintain strict quality control at every stage of production to ensure only the best reaches you.
                                            </AccordionItem>
                                            
                                            <AccordionItem 
                                                title="Sustainability" 
                                                isOpen={activeAccordion === 1}
                                                toggleOpen={() => toggleAccordion(1)}
                                            >
                                                Our products are designed to last longer while being environmentally friendly.
                                            </AccordionItem>
                                            
                                            <AccordionItem 
                                                title="Unrivaled Variety" 
                                                isOpen={activeAccordion === 2}
                                                toggleOpen={() => toggleAccordion(2)}
                                            >
                                                We offer a wide range of products to cater to diverse tastes and preferences.
                                            </AccordionItem>
                                            
                                            <AccordionItem 
                                                title="Legacy Of Excellence" 
                                                isOpen={activeAccordion === 3}
                                                toggleOpen={() => toggleAccordion(3)}
                                            >
                                                With years of experience, we continue to set new standards in the industry.
                                            </AccordionItem>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Features */}
                        <section className="py-8 px-4 md:px-8 bg-white">
                            <div className="container mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                    <FeatureCard 
                                        title="100% Authentic Product"
                                        description="Premium quality with clear authenticity guarantee on your purchase"
                                        buttonText="See More"
                                    />
                                    <FeatureCard 
                                        title="Free & Easy Return"
                                        description="Provide customers with prepaid return labels to make the process hassle-free"
                                        buttonText="See More"
                                    />
                                    <FeatureCard 
                                        title="Safe Payments"
                                        description="Use fraud detection tools to identify suspicious activity, such as unusual purchases"
                                        buttonText="See More"
                                    />
                                    <div className="bg-yellow-50 p-6 rounded-lg relative">
                                        <img src="https://picsum.photos/seed/promo/200/150.jpg" alt="Promo" className="w-full h-24 object-cover rounded" />
                                        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">30% OFF</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Best Leather Bag Collection */}
                        <section className="py-8 px-4 md:px-8 bg-white">
                            <div className="container mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4">Best Leather Bag Collection For You</h2>
                                        <p className="text-gray-600 mb-6">For those who prefer a hands-free, stylish, and functional option.</p>
                                        <button className="bg-white border border-gray-300 rounded-full px-4 py-1 text-sm">Shop Now</button>
                                    </div>
                                    <div className="flex justify-center">
                                        <img src="https://picsum.photos/seed/bag/300/200.jpg" alt="Leather Bag" className="w-64 h-40 object-contain" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Our All Products */}
                        <section className="py-8 px-4 md:px-8 bg-white">
                            <div className="container mx-auto">
                                <h2 className="text-2xl font-bold mb-2">Our All Products</h2>
                                <p className="text-gray-600 mb-6">These products can rotate weekly or based on seasonality and demand.</p>
                                
                                <div className="flex space-x-2 mb-6 overflow-x-auto">
                                    <button className="bg-gray-100 px-4 py-1 rounded-full text-sm whitespace-nowrap">Shoes</button>
                                    <button className="bg-gray-100 px-4 py-1 rounded-full text-sm whitespace-nowrap">Clothing</button>
                                    <button className="bg-gray-100 px-4 py-1 rounded-full text-sm whitespace-nowrap">Accessories</button>
                                    <button className="bg-gray-100 px-4 py-1 rounded-full text-sm whitespace-nowrap">Jewellery</button>
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    <ProductCard 
                                        image="https://picsum.photos/seed/wintercloth/200/200.jpg"
                                        title="Winter cloth collection"
                                        price="325.00"
                                        rating={4}
                                    />
                                    <ProductCard 
                                        image="https://picsum.photos/seed/colorfulcap/200/200.jpg"
                                        title="Our all colorful cap"
                                        price="250.00"
                                        rating={4}
                                    />
                                    <ProductCard 
                                        image="https://picsum.photos/seed/handphone/200/200.jpg"
                                        title="Handphone collection"
                                        price="392.00"
                                        rating={4}
                                    />
                                    <ProductCard 
                                        image="https://picsum.photos/seed/newshoe/200/200.jpg"
                                        title="New shoe"
                                        price="299.00"
                                        rating={4}
                                    />
                                    <ProductCard 
                                        image="https://picsum.photos/seed/womenbag/200/200.jpg"
                                        title="Fashionable women bag"
                                        price="750.00"
                                        rating={4}
                                    />
                                    <ProductCard 
                                        image="https://picsum.photos/seed/lamp/200/200.jpg"
                                        title="Luxuries table lamp"
                                        price="220.00"
                                        rating={4}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Testimonials */}
                        <section className="py-8 px-4 md:px-8 bg-white">
                            <div className="container mx-auto">
                                <h2 className="text-2xl font-bold mb-8 text-center">Our happy clients</h2>
                                
                                <div className="relative">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <TestimonialCard 
                                            avatar="https://picsum.photos/seed/apalamil/80/80.jpg"
                                            name="Apalamil"
                                            date="02 February"
                                            rating={5}
                                            title="A Cut Above the Rest"
                                            quote="I recently visited this barber, and I must say it was a classic barber experience. He took the time to understand exactly what I wanted. He took the time to understand exactly what I wanted."
                                        />
                                        <TestimonialCard 
                                            avatar="https://picsum.photos/seed/jinoma/80/80.jpg"
                                            name="Jinoma"
                                            date="02 February"
                                            rating={5}
                                            title="Ahammad billah"
                                            quote="I've been using this blender daily for a month, and it blends smoothly without any issues. It's powerful enough to handle frozen fruits and tough veggies."
                                        />
                                    </div>
                                    <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-8 h-8 shadow-md flex items-center justify-center">
                                        <i className="fas fa-chevron-left text-gray-600"></i>
                                    </button>
                                    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-8 h-8 shadow-md flex items-center justify-center">
                                        <i className="fas fa-chevron-right text-gray-600"></i>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </main>

                    {/* Footer */}
                    <footer className="bg-gray-900 text-white py-10 px-4 md:px-8">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-4">Meher</h3>
                                    <p className="text-gray-400 text-sm mb-4">We Do Not Divide Our Collections To Seasons</p>
                                    <p className="text-gray-400 text-sm mb-1">Technology Park</p>
                                    <p className="text-gray-400 text-sm mb-1">8-14 Marie Curie Street</p>
                                    <p className="text-gray-400 text-sm">09876 Barcelona</p>
                                    <p className="text-gray-400 text-sm mt-4">hello@meherhub.com</p>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-4">Customers Services</h4>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        <li><a href="#" className="hover:text-white">FAQ</a></li>
                                        <li><a href="#" className="hover:text-white">My Orders</a></li>
                                        <li><a href="#" className="hover:text-white">Start a Return</a></li>
                                        <li><a href="#" className="hover:text-white">Shipping and Returns</a></li>
                                        <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
                                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-4">Products</h4>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        <li><a href="#" className="hover:text-white">Shoes</a></li>
                                        <li><a href="#" className="hover:text-white">Clothing</a></li>
                                        <li><a href="#" className="hover:text-white">Accessories</a></li>
                                        <li><a href="#" className="hover:text-white">Jewellery</a></li>
                                        <li><a href="#" className="hover:text-white">Men</a></li>
                                        <li><a href="#" className="hover:text-white">Women</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-4">Company Info</h4>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        <li><a href="#" className="hover:text-white">About Us</a></li>
                                        <li><a href="#" className="hover:text-white">How it works</a></li>
                                        <li><a href="#" className="hover:text-white">Refer and Earn</a></li>
                                        <li><a href="#" className="hover:text-white">our Values</a></li>
                                        <li><a href="#" className="hover:text-white">Service Discount</a></li>
                                        <li><a href="#" className="hover:text-white">Educational Discount</a></li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="my-8 border-gray-800" />
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <p className="text-sm text-gray-400">Copyright ©2024 All rights reserved</p>
                                <div className="flex space-x-4 mt-4 md:mt-0">
                                    <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
                                    <a href="#" className="text-gray-400 hover:text-white">Security</a>
                                    <a href="#" className="text-gray-400 hover:text-white">Terms</a>
                                </div>
                                <div className="flex space-x-4 mt-4 md:mt-0">
                                    <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                                    <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <select className="bg-gray-800 text-white text-sm rounded px-2 py-1">
                                        <option>English</option>
                                        <option>Spanish</option>
                                        <option>French</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>`,
        outputType: "html"
    },
    {
        id: "web-5",
        searchTerm: "Mentoria Platform",
        imagePlaceholder: "/Images/Web5.jpg",
        averageOutput: `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mentoria</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        html, body { height: 100%; }
        body {
            background-color: #121212;
            color: white;
            background-image: linear-gradient(rgba(0, 0, 0, 0.7) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(0, 0, 0, 0.7) 1px, transparent 1px);
            background-size: 40px 40px;
            display: flex;
            flex-direction: column;
        }
        .container {
            min-height: 100%;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        header {
            padding: 20px 0;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #a3e635;
            font-weight: bold;
            font-size: 18px;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 30px;
        }

        .nav-links li a {
            color: white;
            text-decoration: none;
            transition: color 0.3s;
        }

        .register-btn {
            background-color: white;
            color: black;
            padding: 8px 20px;
            border-radius: 20px;
            text-decoration: none;
            font-weight: bold;
        }

        /* Hero Section */
        .hero {
            text-align: center;
            padding: 80px 0;
        }

        .badge {
            background-color: rgba(163, 230, 53, 0.2);
            color: #a3e635;
            padding: 5px 15px;
            border-radius: 20px;
            display: inline-block;
            margin-bottom: 20px;
            font-size: 14px;
        }

        .hero h1 {
            font-size: 48px;
            margin-bottom: 20px;
            line-height: 1.2;
        }

        .hero h1 span {
            color: #a3e635;
        }

        .hero p {
            max-width: 600px;
            margin: 0 auto 40px;
            line-height: 1.6;
            opacity: 0.9;
        }

        .search-bar {
            display: flex;
            max-width: 500px;
            margin: 0 auto;
        }

        .search-input {
            flex: 1;
            padding: 12px 20px;
            border: none;
            border-radius: 25px 0 0 25px;
            background-color: #333;
            color: white;
        }

        .search-btn {
            background-color: #a3e635;
            color: black;
            border: none;
            padding: 12px 25px;
            border-radius: 0 25px 25px 0;
            cursor: pointer;
            font-weight: bold;
        }

        /* Stats Section */
        .stats-section {
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            padding: 30px;
            margin-top: 50px;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .stat-card {
            background-color: rgba(255, 255, 255, 0.08);
            border-radius: 10px;
            padding: 25px;
        }

        .stat-number {
            font-size: 32px;
            color: #a3e635;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .stat-label {
            font-size: 14px;
            opacity: 0.8;
            margin-bottom: 15px;
        }

        .stat-description {
            font-size: 13px;
            opacity: 0.7;
            line-height: 1.5;
        }

        /* Promotional Section */
        .promo-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-top: 30px;
        }

        .promo-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .promo-text h2 {
            font-size: 36px;
            margin-bottom: 20px;
            line-height: 1.2;
        }

        .unlock-icons {
            display: flex;
            gap: 5px;
            margin-bottom: 20px;
        }

        .unlock-icon {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #333;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 14px;
        }

        .unlock-plus {
            background-color: #a3e635;
        }

        .arrow-button {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background-color: transparent;
            border: 2px solid #a3e635;
            color: #a3e635;
            padding: 10px 20px;
            border-radius: 25px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s;
        }

        .arrow-button:hover {
            background-color: #a3e635;
            color: black;
        }

        .promo-image {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
        }

        .promo-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Mentors Section */
        .mentors-section {
            margin-top: 80px;
        }

        .section-title {
            font-size: 36px;
            margin-bottom: 30px;
        }

        .filter-tabs {
            display: flex;
            gap: 20px;
            margin-bottom: 40px;
            border-bottom: 2px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 10px;
        }

        .filter-tab {
            padding: 10px 20px;
            cursor: pointer;
            border-bottom: 2px solid transparent;
            transition: all 0.3s;
        }

        .filter-tab.active,
        .filter-tab:hover {
            color: #a3e635;
            border-bottom-color: #a3e635;
        }

        .mentor-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 25px;
        }

        .mentor-card {
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            overflow: hidden;
            position: relative;
        }

        .mentor-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .mentor-info {
            padding: 20px;
        }

        .mentor-title {
            background-color: rgba(255, 255, 255, 0.1);
            padding: 5px 10px;
            border-radius: 15px;
            display: inline-block;
            font-size: 14px;
            margin-bottom: 10px;
        }

        .mentor-rating {
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 15px;
        }

        .rating-stars {
            color: #ffd700;
        }

        .mentor-name {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .mentor-experience {
            font-size: 14px;
            opacity: 0.7;
        }

        .contact-arrow {
            position: absolute;
            bottom: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            background-color: #a3e635;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: black;
            text-decoration: none;
        }
    </style>
    <script>
        window.onerror = function(message, source, lineno, colno, error) {
            document.body.innerHTML = '<div style="color:red; padding:20px; background:white;"><h1>Error</h1><p>' + message + '</p><p>' + source + ':' + lineno + '</p></div>';
        };
    </script>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header>
            <nav>
                <div class="logo">
                    <i class="fas fa-seedling"></i>
                    <span>Mentoria</span>
                </div>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Mentors</a></li>
                    <li><a href="#">Course</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">About</a></li>
                </ul>
                <a href="#" class="register-btn">Register</a>
            </nav>
        </header>

        <!-- Hero Section -->
        <section class="hero">
            <div class="badge">
                <i class="fas fa-check-circle"></i> Certified & self-paced
            </div>
            <h1>Level up with <span>top mentors</span></h1>
            <p>Gain insights from top industry experts offering personalized mentorship. Enhance your skills and grow with experts.</p>
            <div class="search-bar">
                <input type="text" class="search-input" placeholder="Team management">
                <button class="search-btn">Search</button>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="stats-section">
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number">207K</div>
                    <div class="stat-label">Mentors</div>
                    <div class="stat-description">Expert mentors ready to guide you on your journey.</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">500K</div>
                    <div class="stat-label">Active users</div>
                    <div class="stat-description">Users who have successfully found their ideal mentor.</div>
                </div>
            </div>

            <!-- Promotional Section -->
            <div class="promo-section">
                <div class="promo-text">
                    <div class="unlock-icons">
                        <div class="unlock-icon"><i class="fas fa-user"></i></div>
                        <div class="unlock-icon"><i class="fas fa-user"></i></div>
                        <div class="unlock-icon"><i class="fas fa-user"></i></div>
                        <div class="unlock-icon unlock-plus">+</div>
                    </div>
                    <h2>UNLOCK YOUR<br>LEADERSHIP<br>POTENTIAL WITH US!</h2>
                    <a href="#" class="arrow-button">
                        <span>→</span> LEADERSHIP
                    </a>
                </div>
                <div class="promo-image">
                    <img src="https://picsum.photos/seed/meeting/500/350.jpg" alt="Meeting">
                    <div class="promo-content">
                        <h3 style="font-size: 24px; margin-bottom: 10px;">Book your first free meeting</h3>
                        <p style="opacity: 0.8; margin-bottom: 20px;">Get insights into the process and next steps.</p>
                        <a href="#" class="arrow-button">
                            Get In Touch <span>→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mentors Section -->
        <section class="mentors-section">
            <h2 class="section-title">Mentors</h2>
            <div class="filter-tabs">
                <div class="filter-tab active">All</div>
                <div class="filter-tab">UI/UX</div>
                <div class="filter-tab">Science & Technology</div>
                <div class="filter-tab">Finance & Investment</div>
            </div>
            <div class="mentor-grid">
                <div class="mentor-card">
                    <img src="https://picsum.photos/seed/mentor1/400/300.jpg" alt="Mentor" class="mentor-image">
                    <div class="mentor-info">
                        <div class="mentor-title">Python Developer</div>
                        <div class="mentor-rating">
                            <span class="rating-stars">4.9</span>
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="mentor-name">Ethan Caldwell</div>
                        <div class="mentor-experience">20 years of experience</div>
                    </div>
                    <a href="#" class="contact-arrow">
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
                <div class="mentor-card">
                    <img src="https://picsum.photos/seed/mentor2/400/300.jpg" alt="Mentor" class="mentor-image">
                    <div class="mentor-info">
                        <div class="mentor-title">Python Developer</div>
                        <div class="mentor-rating">
                            <span class="rating-stars">4.9</span>
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="mentor-name">Ethan Caldwell</div>
                        <div class="mentor-experience">20 years of experience</div>
                    </div>
                    <a href="#" class="contact-arrow">
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
                <div class="mentor-card">
                    <img src="https://picsum.photos/seed/mentor3/400/300.jpg" alt="Mentor" class="mentor-image">
                    <div class="mentor-info">
                        <div class="mentor-title">Python Developer</div>
                        <div class="mentor-rating">
                            <span class="rating-stars">4.9</span>
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="mentor-name">Ethan Caldwell</div>
                        <div class="mentor-experience">20 years of experience</div>
                    </div>
                    <a href="#" class="contact-arrow">
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>
    </div>
</body>
</html>
`,
        powerOutput: `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mentoria - Mentorship Platform</title>
    <script src="https://cdn.jsdelivr.net/npm/react@18.0.0/umd/react.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@18.0.0/umd/react-dom.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@babel/standalone/babel.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        html, body { height: 100%; }
        body {
            font-family: 'Inter', sans-serif;
            background-color: #121212;
            color: white;
            display: flex;
            flex-direction: column;
        }
        #root { flex-grow: 1; display: flex; flex-direction: column; }
        .grid-bg {
            background-image: linear-gradient(rgba(75, 75, 75, 0.1) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(75, 75, 75, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
        }
        .green-accent {
            color: #84cc16;
        }
        .btn-green {
            background-color: #84cc16;
        }
        .mentor-card:hover {
            transform: translateY(-5px);
            transition: all 0.3s ease;
        }
    </style>
    <script>
        window.onerror = function(message, source, lineno, colno, error) {
            document.body.innerHTML = '<div style="color:red; padding:20px; background:white;"><h1>Error</h1><p>' + message + '</p><p>' + source + ':' + lineno + '</p></div>';
        };
    </script>
</head>
<body class="grid-bg min-h-screen">
    <div id="root"></div>

    <script type="text/babel">
        const App = () => {
            return (
                <div className="container mx-auto px-4 py-4 min-h-full flex flex-col">
                    {/* Navigation */}
                    <nav className="flex justify-between items-center mb-12">
                        <div className="flex items-center">
                            <span className="text-xl font-bold green-accent flex items-center">
                                <i className="fas fa-star mr-2"></i> Mentoria
                            </span>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <a href="#" className="hover:text-gray-300">Home</a>
                            <a href="#" className="hover:text-gray-300">Mentors</a>
                            <a href="#" className="hover:text-gray-300">Course</a>
                            <a href="#" className="hover:text-gray-300">Categories</a>
                            <a href="#" className="hover:text-gray-300">About</a>
                        </div>
                        <button className="bg-white text-black px-4 py-2 rounded-md font-medium">Register</button>
                    </nav>

                    {/* Hero Section */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center bg-gray-800 bg-opacity-70 px-3 py-1 rounded-full mb-6">
                            <i className="fas fa-check-circle text-green-400 mr-2"></i>
                            <span className="text-sm">Certified & self-paced</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-4">
                            Level up with <span className="green-accent">top mentors</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
                            Gain insights from top industry experts offering personalized mentorship. Enhance your skills and grow with experts.
                        </p>
                        <div className="flex justify-center max-w-lg mx-auto">
                            <input 
                                type="text" 
                                placeholder="Team management" 
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none"
                            />
                            <button className="btn-green px-4 py-2 rounded-r-md font-medium">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Stats and Booking Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {/* Stats */}
                        <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg">
                            <div className="mb-2">
                                <span className="text-3xl font-bold green-accent">207K</span>
                                <p className="text-gray-400">Mentors</p>
                            </div>
                            <p className="text-sm text-gray-300 mt-4">
                                Expert mentors ready to guide you on your journey.
                            </p>
                        </div>
                        <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg">
                            <div className="mb-2">
                                <span className="text-3xl font-bold green-accent">500K</span>
                                <p className="text-gray-400">Active users</p>
                            </div>
                            <p className="text-sm text-gray-300 mt-4">
                                Users who have successfully found their ideal mentor.
                            </p>
                        </div>
                        <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg relative overflow-hidden">
                            <img 
                                src="https://picsum.photos/seed/person1/400/250.jpg" 
                                alt="Booking meeting" 
                                className="absolute inset-0 w-full h-full object-cover opacity-60"
                            />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-2">Book your first<br />free meeting</h3>
                                <p className="text-sm text-gray-300 mb-4">
                                    Get insights into the process and next steps.
                                </p>
                                <button className="border border-green-400 text-green-400 px-4 py-2 rounded-md inline-flex items-center">
                                    Get In Touch
                                    <i className="fas fa-arrow-right ml-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Leadership Potential Section */}
                    <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            UNLOCK <span className="inline-block"><img src="https://picsum.photos/seed/people/30/30.jpg" alt="" className="inline" /></span><span className="inline-block"><img src="https://picsum.photos/seed/people2/30/30.jpg" alt="" className="inline" /></span><span className="inline-block"><img src="https://picsum.photos/seed/people3/30/30.jpg" alt="" className="inline" /></span><span className="btn-green rounded-full w-6 h-6 flex items-center justify-center text-xs">+</span> YOUR
                        </h2>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-1 bg-gray-700 rounded-full mr-2"></div>
                            <i className="fas fa-arrow-right text-green-400"></i>
                        </div>
                        <h2 className="text-3xl font-bold">
                            LEADERSHIP POTENTIAL WITH US!
                        </h2>
                    </div>

                    {/* Mentors Section */}
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-8">Mentors</h2>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <button className="px-4 py-2 bg-green-400 text-black rounded-full font-medium">All</button>
                            <button className="px-4 py-2 bg-transparent border border-gray-600 rounded-full font-medium">UI/UX</button>
                            <button className="px-4 py-2 bg-transparent border border-gray-600 rounded-full font-medium">Science & Technology</button>
                            <button className="px-4 py-2 bg-transparent border border-gray-600 rounded-full font-medium">Finance & Investment</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <MentorCard 
                                image="https://picsum.photos/seed/mentor1/300/350.jpg"
                                title="Python Developer"
                                rating={4.9}
                                name="Ethan Caldwell"
                                experience="20 years of experience"
                            />
                            <MentorCard 
                                image="https://picsum.photos/seed/mentor2/300/350.jpg"
                                title="Python Developer"
                                rating={4.9}
                                name="Ethan Caldwell"
                                experience="20 years of experience"
                            />
                            <MentorCard 
                                image="https://picsum.photos/seed/mentor3/300/350.jpg"
                                title="Python Developer"
                                rating={4.9}
                                name="Ethan Caldwell"
                                experience="20 years of experience"
                            />
                        </div>
                    </div>
                </div>
            );
        };

        const MentorCard = ({ image, title, rating, name, experience }) => {
            return (
                <div className="mentor-card bg-gray-900 bg-opacity-50 rounded-lg overflow-hidden relative">
                    <img src={image} alt={name} className="w-full h-64 object-cover" />
                    <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent">
                        <div className="flex justify-between items-center mb-2">
                            <span className="bg-gray-800 bg-opacity-80 px-2 py-1 rounded text-sm">{title}</span>
                            <div className="flex items-center">
                                <span className="mr-1">{rating}</span>
                                <i className="fas fa-star text-yellow-400"></i>
                            </div>
                        </div>
                        <h3 className="font-semibold mb-1">{name}</h3>
                        <p className="text-sm text-gray-400">{experience}</p>
                        <div className="absolute bottom-4 right-4 bg-green-400 text-black w-8 h-8 rounded-full flex items-center justify-center">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>`,
        outputType: "html"
    }
];
