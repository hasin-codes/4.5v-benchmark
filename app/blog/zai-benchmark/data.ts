export interface BenchmarkScenario {
    id: string;
    searchTerm: string;
    imagePlaceholder: string; // URL or path
    averagePrompt: string;
    powerPrompt: string;
}

export const standardScenarios: BenchmarkScenario[] = [
    {
        id: "std-1",
        searchTerm: "Eiffel Tower at night from Seine River",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Where is this photo taken?",
        powerPrompt: "Analyze this image for geographic clues like architecture, lighting, and water features. Provide a step-by-step reasoning to identify the exact location, including country, city, and landmark. Consider any seasonal or time-of-day hints."
    },
    {
        id: "std-2",
        searchTerm: "Great Wall of China misty morning",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Guess the location in this image.",
        powerPrompt: "Examine the terrain, vegetation, and structure in this foggy landscape image. Deduce the location with historical context, specifying continent, country, and specific section if possible. Explain visual cues like wall patterns."
    },
    {
        id: "std-3",
        searchTerm: "Sydney Opera House harbor view",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "What city is this landmark in?",
        powerPrompt: "Based on the unique sail-like architecture and surrounding water/body, identify this urban landmark. Include city, country, and nearby features like bridges. Reason through potential confusions with similar structures."
    },
    {
        id: "std-4",
        searchTerm: "Machu Picchu ruins aerial",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Identify the place shown here.",
        powerPrompt: "From this overhead view of ancient stone terraces and mountains, determine the archaeological site. Provide latitude/longitude estimates, country, and cultural significance. Note altitude and flora as clues."
    },
    {
        id: "std-5",
        searchTerm: "Times Square New York rainy day",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Where was this picture captured?",
        powerPrompt: "Inspect the billboards, crowds, and wet streets in this bustling scene. Pinpoint the exact intersection, city, and country. Discuss how weather affects identification."
    },
    {
        id: "std-6",
        searchTerm: "Taj Mahal sunrise",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "What's the location of this monument?",
        powerPrompt: "Using the dome shape, minarets, and warm lighting, identify this mausoleum. Specify river proximity, city, and country. Include symmetry as a key visual hint."
    },
    {
        id: "std-7",
        searchTerm: "Grand Canyon sunset overlook",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Guess where this is.",
        powerPrompt: "Analyze rock layers, depth, and color gradients in this canyon image. Determine national park, state, and country. Explain erosion patterns as evidence."
    },
    {
        id: "std-8",
        searchTerm: "Mount Fuji cherry blossoms",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "What country and landmark is this?",
        powerPrompt: "From the conical peak and pink flowers, deduce the volcano's location. Include region, country, and seasonal context. Compare to similar mountains."
    },
    {
        id: "std-9",
        searchTerm: "Colosseum Rome interior",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Identify this historical site.",
        powerPrompt: "Examine the arched ruins and seating tiers inside this amphitheater. Identify city, country, and historical era. Note any restoration clues."
    },
    {
        id: "std-10",
        searchTerm: "Niagara Falls Canadian side",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Where is this waterfall located?",
        powerPrompt: "Based on the horseshoe shape and mist, locate this waterfall. Specify border details, countries involved, and viewpoint."
    },
    {
        id: "std-11",
        searchTerm: "Santorini Greece blue domes",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Guess the island in this photo.",
        powerPrompt: "Using white buildings, blue roofs, and sea views, identify the island group and country. Provide volcanic history as context."
    },
    {
        id: "std-12",
        searchTerm: "Pyramids of Giza camel foreground",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "What ancient site is this?",
        powerPrompt: "From the triangular structures and desert animal, determine the ancient complex. Include city, country, and pharaoh associations."
    }
];

export const toughScenarios: BenchmarkScenario[] = [
    {
        id: "tough-1",
        searchTerm: "Obscure alley in Tokyo Shibuya rainy night no signs",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Where is this photo taken?",
        powerPrompt: "Analyze this dimly lit urban alley for geographic clues like pavement style, neon reflections, and rain patterns. Provide step-by-step reasoning to identify the exact neighborhood, city, and country, considering Asian architectural hints and weather common to the area."
    },
    {
        id: "tough-2",
        searchTerm: "Remote Icelandic waterfall foggy day no people",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Guess the location in this image.",
        powerPrompt: "Examine the rocky terrain, mist, and basaltic formations in this isolated cascade image. Deduce the location with geological context, specifying island region, country, and potential name if inferable. Explain visual cues like fog density and vegetation sparsity."
    },
    {
        id: "tough-3",
        searchTerm: "Anonymous street in Marrakech medina cluttered",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "What city is this scene in?",
        powerPrompt: "Based on the riad-style doors, market stalls, and earthen walls in this bustling lane, identify this historic quarter. Include city, country, and nearby souk references. Reason through potential confusions with similar Middle Eastern or North African medinas."
    },
    {
        id: "tough-4",
        searchTerm: "Overgrown ruins in Cambodian jungle partial view",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Identify the place shown here.",
        powerPrompt: "From this vine-covered stone structure and humid foliage, determine the lesser-known archaeological site. Provide latitude/longitude estimates, country, and historical era. Note tropical overgrowth and partial occlusion as clues."
    },
    {
        id: "tough-5",
        searchTerm: "Snowy rural road in Norwegian fjord obscured",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Where was this picture captured?",
        powerPrompt: "Inspect the icy path, steep cliffs, and faint water glimpses in this winter scene. Pinpoint the fjord area, region, and country. Discuss how snow cover affects identification and shadow directions for latitude."
    },
    {
        id: "tough-6",
        searchTerm: "Deserted beach in Patagonia Chile windy",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "What's the location of this coast?",
        powerPrompt: "Using the rugged pebbles, wind-swept waves, and distant mountains, identify this coastal stretch. Specify subregion, country, and environmental factors like wind erosion. Include ecosystem hints like kelp."
    },
    {
        id: "tough-7",
        searchTerm: "Misty forest path in New Zealand South Island no trails",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Guess where this is.",
        powerPrompt: "Analyze fern undergrowth, podocarp trees, and fog in this woodland image. Determine national park or range, island, and country. Explain biodiversity as evidence and compare to similar temperate rainforests."
    },
    {
        id: "tough-8",
        searchTerm: "Urban park in Seoul Korea autumn leaves no landmarks",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "What country and area is this?",
        powerPrompt: "From the ginkgo trees, bench designs, and urban skyline peeks, deduce the park's location. Include district, city, and country. Note seasonal foliage colors and air quality hints."
    },
    {
        id: "tough-9",
        searchTerm: "Abandoned village in Italian Dolomites foggy",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Identify this remote site.",
        powerPrompt: "Examine the stone huts, alpine meadows, and mist-shrouded peaks in this deserted hamlet. Identify valley, region, and country. Note architectural style for era and any restoration absences."
    },
    {
        id: "tough-10",
        searchTerm: "Riverbank in Amazon Brazil dense foliage",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Where is this waterway located?",
        powerPrompt: "Based on the muddy waters, vine tangles, and canopy density, locate this riparian zone. Specify basin tributary, state, and country. Consider biodiversity clues like visible insects or birds."
    },
    {
        id: "tough-11",
        searchTerm: "Cliffside path in Scottish Highlands overcast",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Guess the region in this photo.",
        powerPrompt: "Using heather plants, sheer drops, and gray skies, identify the highland trail. Provide area, country, and geological features. Discuss weather patterns as regional indicators."
    },
    {
        id: "tough-12",
        searchTerm: "Winding road in Swiss Alps snow partial view",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "What mountainous area is this?",
        powerPrompt: "From the switchback curves, conifer trees, and fresh powder, determine the pass or valley. Include canton, country, and altitude estimates. Analyze snow texture for recency and avalanche risks."
    }
];
