export interface BenchmarkScenario {
    id: string;
    searchTerm: string;
    imagePlaceholder: string; // URL or path
    averagePrompt: string;
    powerPrompt: string;
    averageOutput?: string; // Markdown output for average prompt
    powerOutput?: string; // Markdown output for power prompt
}

export const standardScenarios: BenchmarkScenario[] = [
    {
        id: "std-1",
        searchTerm: "Eiffel Tower at night from Seine River",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Where is this photo taken?",
        powerPrompt: "Analyze this image for geographic clues like architecture, lighting, and water features. Provide a step-by-step reasoning to identify the exact location, including country, city, and landmark. Consider any seasonal or time-of-day hints.",
        averageOutput: `

The photo features the Eiffel Tower, a globally recognized landmark located in Paris, France. The tower is illuminated at night, with surrounding elements like water (likely the Seine River) and city lights visible. Therefore, the location is Paris, France.`,
        powerOutput: `

To determine the location, we analyze key geographic clues:  

1. **Architecture**: The central structure is the Eiffel Tower, an iconic iron lattice tower in Paris, France. Its distinctive shape and illumination pattern (golden lights against the night sky) are unmistakable.  
2. **Lighting**: The scene is set at night, evidenced by the dark sky, artificial lighting on the tower, and the presence of a moon. The Eiffel Tower’s nightly light display is a hallmark of its operation.  
3. **Water Features**: A body of water (likely the Seine River) is visible in the foreground, with boats docked along the shore. The Seine flows through Paris and is adjacent to the Eiffel Tower, confirming the riverine context.  


### Step-by-Step Reasoning:  
- **Landmark Identification**: The Eiffel Tower is globally recognized and located only in Paris, France. No other structure matches its design.  
- **City and Country**: Paris is the capital of France, and the Eiffel Tower is situated in the Champ de Mars area, near the Seine.  
- **Time of Day/Season**: Nighttime (dark sky, artificial lighting) with a visible moon suggests evening hours. While seasonal cues (e.g., foliage) are minimal, the focus remains on the landmark’s universal recognition.  


**Final Answer**: The image depicts the Eiffel Tower in Paris, France, captured at night with the Seine River in the foreground.  

Country: France  
City: Paris  
Landmark: Eiffel Tower`
    },
    {
        id: "std-2",
        searchTerm: "Great Wall of China misty morning",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Guess the location in this image.",
        powerPrompt: "Examine the terrain, vegetation, and structure in this foggy landscape image. Deduce the location with historical context, specifying continent, country, and specific section if possible. Explain visual cues like wall patterns.",
        averageOutput: `

The image depicts a section of the Great Wall of China, characterized by its iconic stone structures, watchtowers, and winding path across mountainous terrain, partially shrouded in mist. This renowned historical monument is located in China.`,
        powerOutput: `

To determine the location, we analyze **terrain**, **vegetation**, **structure**, and **historical context**:  

### 1. Terrain & Vegetation  
The image shows a mountainous landscape with rolling ridges covered in dense, temperate vegetation (likely deciduous forests). This topography is characteristic of northern China’s mountain ranges, where the Great Wall was strategically built to follow natural contours.  


### 2. Structural Cues  
The prominent feature is a massive stone-and-brick wall with **watchtowers** (beacon towers) atop peaks. Key details include:  
- **Wall pattern**: It winds continuously along ridgelines, a defining trait of the Great Wall.  
- **Watchtower design**: Flat-roofed, crenellated (battlement-style) towers with rectangular bases—typical of *Ming Dynasty* (1368–1644) construction, the era when most surviving sections were reinforced.  
- **Material**: Weathered stone and brick, consistent with ancient Chinese masonry techniques.  


### 3. Historical Context  
The Great Wall of China is one of the world’s most iconic historical structures, spanning over 20,000 km across northern China. While built by multiple dynasties, the best-preserved and most visually striking sections (like those in the image) date to the Ming Dynasty. Regions near Beijing (e.g., Hebei Province) are renowned for such scenic, well-maintained segments.  


### 4. Specific Section Deduction  
The combination of rugged, forested mountains, numerous watchtowers, and the wall’s serpentine path suggests a section like **Jinshanling** or **Simatai** in Hebei Province, northeast of Beijing. These areas are celebrated for their dramatic landscapes, historical significance, and frequent fog (as seen in the image), which enhances their picturesque quality.  


### Final Conclusion  
- **Continent**: Asia  
- **Country**: China  
- **Specific Section**: Likely the **Great Wall of China in Jinshanling or Simatai (Hebei Province)**, characterized by Ming Dynasty architecture, mountainous terrain, and scenic foggy vistas.`
    },
    {
        id: "std-3",
        searchTerm: "Sydney Opera House harbor view",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "What city is this landmark in?",
        powerPrompt: "Based on the unique sail-like architecture and surrounding water/body, identify this urban landmark. Include city, country, and nearby features like bridges. Reason through potential confusions with similar structures.",
        averageOutput: `

To determine the city, we identify the iconic landmarks: the Sydney Opera House (with its distinctive sail - like design) and the Sydney Harbour Bridge. These are world - renowned symbols of Sydney, Australia. Therefore, the city is Sydney.`,
        powerOutput: `

The landmark is the **Sydney Opera House**, located in **Sydney, Australia**. It is situated on the shores of Sydney Harbour, with the **Sydney Harbour Bridge** prominently visible behind it.  

### Reasoning:  
1. **Unique Sail-Like Architecture**: The Sydney Opera House’s iconic shell-shaped roofs are instantly recognizable and unmatched by other major landmarks. While structures like the Bahrain World Trade Center (three vertical sails) or the Milwaukee Art Museum (retractable wings) have "sail" elements, their designs and contexts differ drastically.  
2. **Surrounding Water and Bridges**: The presence of a large steel arch bridge (Sydney Harbour Bridge) directly behind the Opera House is a key clue. No other major city combines such a distinctive architectural pair in a harbour setting.  
3. **Urban Context**: The background skyline and harbor layout align with Sydney’s central business district, further confirming the location.  

This combination of architectural uniqueness, geographic context, and nearby infrastructure eliminates confusion with similar structures.  

**Answer:** Sydney Opera House, Sydney, Australia; nearby feature is the Sydney Harbour Bridge.`
    },
    {
        id: "std-4",
        searchTerm: "Machu Picchu ruins aerial",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Identify the place shown here.",
        powerPrompt: "From this overhead view of ancient stone terraces and mountains, determine the archaeological site. Provide latitude/longitude estimates, country, and cultural significance. Note altitude and flora as clues.",
        averageOutput: `

The image depicts the ancient Incan city of Machu Picchu, located in the Andes Mountains of Peru. This UNESCO World Heritage Site is known for its intricate stone structures, terraced agricultural fields, and stunning mountainous surroundings. 

The answer is Machu Picchu`,
        powerOutput: `

To determine the archaeological site, we analyze key visual and contextual clues:  

### Step 1: Identify Architectural & Environmental Features  
The image shows **stone terraces** (a hallmark of Inca engineering), dense mountainous terrain, and mist-shrouded peaks—consistent with high-altitude Andean landscapes.  


### Step 2: Link to Known Sites  
These features match **Machu Picchu**, the iconic Inca citadel in Peru. Key supporting details:  
- **Altitude**: ~2,430 meters (7,970 ft) above sea level, typical of the Peruvian Andes.  
- **Flora**: Lush greenery and cloud forest vegetation, characteristic of the region’s microclimate.  


### Step 3: Cultural & Geographic Context  
- **Country**: Peru.  
- **Latitude/Longitude**: Approximate coordinates are **-13.1631° S, -72.5450° W**.  
- **Cultural Significance**: Built in the 15th century by the Inca Empire, Machu Picchu served as a royal estate and religious site. It is a UNESCO World Heritage Site and symbolizes Inca civilization’s architectural and agricultural prowess.  


### Final Answer  
The site is **Machu Picchu**, Peru.  
- Latitude/Longitude: ~-13.1631° S, -72.5450° W  
- Country: Peru  
- Cultural Significance: A 15th-century Inca citadel, renowned for its terraced agriculture, stonework, and role as a political/religious center; a UNESCO World Heritage Site and emblem of Inca civilization.`
    },
    {
        id: "std-5",
        searchTerm: "Times Square New York rainy day",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Where was this picture captured?",
        powerPrompt: "Inspect the billboards, crowds, and wet streets in this bustling scene. Pinpoint the exact intersection, city, and country. Discuss how weather affects identification.",
        averageOutput: `

To determine the location, analyze key elements: the street sign “W 49 St” (West 49th Street) and the dense, brightly lit billboards and commercial signage characteristic of a major urban hub. These features, along with the vibrant nighttime atmosphere and reflective wet streets, are iconic of **Times Square in New York City**.

Times Square, New York City`,
        powerOutput: `

To determine the location, analyze key visual cues:  
1. **Street Sign**: A clear “W 49 St” sign indicates West 49th Street.  
2. **Landmarks & Branding**: Prominent billboards, neon signs, and the “Times Square” text on a building confirm the area is Times Square, a iconic neighborhood in Manhattan.  
3. **Urban Environment**: Tall buildings, dense commercial signage, and the layout match New York City’s Times Square.  


### Exact Intersection, City, and Country:  
- **Intersection**: West 49th Street (likely intersecting with Broadway or another major avenue in Times Square).  
- **City**: New York  
- **Country**: United States  


### Impact of Weather on Identification:  
The wet streets reflect neon lights, enhancing the vibrant atmosphere but not obscuring critical landmarks (e.g., “Times Square” signage, street name). Rain does not alter the identifiable features of Times Square, so weather conditions do not hinder location recognition—instead, they emphasize the area’s characteristic luminosity.`
    },
    {
        id: "std-6",
        searchTerm: "Taj Mahal sunrise",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "What's the location of this monument?",
        powerPrompt: "Using the dome shape, minarets, and warm lighting, identify this mausoleum. Specify river proximity, city, and country. Include symmetry as a key visual hint.",
        averageOutput: `

The monument in the image is the Taj Mahal, which is located in Agra, Uttar Pradesh, India.`,
        powerOutput: `

The mausoleum depicted is the **Taj Mahal**. It features a prominent central dome, four symmetrically placed minarets, and is renowned for its architectural symmetry. The structure is situated in **Agra, India**, adjacent to the **Yamuna River**, and the warm lighting in the image reflects its iconic appearance during sunrise or sunset.

Taj Mahal; Yamuna River; Agra; India; Symmetrical design`
    },
    {
        id: "std-7",
        searchTerm: "Grand Canyon sunset overlook",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Guess where this is.",
        powerPrompt: "Analyze rock layers, depth, and color gradients in this canyon image. Determine national park, state, and country. Explain erosion patterns as evidence.",
        averageOutput: `

The image depicts a vast canyon with distinct layered rock formations, a winding river (likely the Colorado River), and a dramatic sunset. These features are iconic of the Grand Canyon National Park in Arizona, USA.`,
        powerOutput: `

To analyze the canyon image and determine its location, we examine **rock layers**, **depth**, **color gradients**, and **erosion patterns**:  


### 1. Rock Layers  
The canyon displays **horizontal sedimentary rock strata**, typical of ancient depositional environments (e.g., rivers, oceans). These layers represent millions of years of geological history, with each band corresponding to a distinct period of sediment accumulation. Common rock types in such formations include sandstone, limestone, and shale, which vary in hardness and composition.    


### 2. Depth  
The immense vertical extent of the canyon—exposing dozens of rock layers—indicates prolonged erosion by the **Colorado River**. Over ~6 million years, the river has carved downward (a process called *downcutting*), revealing rock layers that were once buried deep underground.    


### 3. Color Gradients  
The vibrant reds, oranges, and purples result from **mineral composition**:  
- Red hues stem from *hematite* (iron oxide), formed when iron in rocks oxidizes (rusts).  
- Lighter browns and tans reflect less oxidized minerals or sediments with lower iron content.  
- Purple tones may arise from trace elements like manganese or variations in clay minerals.  

These gradients highlight differences in rock age, chemistry, and exposure to weathering.    


### 4. Location Identification  
The combination of massive sedimentary layers, iconic color palette, and scale points to the **Grand Canyon**.  
- **National Park**: Grand Canyon National Park  
- **State**: Arizona  
- **Country**: United States    


### 5. Erosion Patterns as Evidence  
The canyon’s shape and structure reveal key erosional processes:  
- **Fluvial Downcutting**: The Colorado River’s persistent flow erodes bedrock vertically, deepening the canyon over millennia.  
- **Differential Erosion**: Softer rock layers (e.g., shale) erode faster than harder layers (e.g., sandstone), creating the “stepped” cliff-and-terrace landscape.  
- **Tributary Erosion**: Smaller side canyons (visible as branching valleys) form where tributaries cut into the main canyon walls, further shaping the topography.  
- **Weathering**: Physical (freeze-thaw cycles breaking rocks) and chemical (dissolution of minerals) weathering weaken rock, making it easier for the river to carry away sediment.    


In summary, the image depicts the Grand Canyon in Arizona, USA, where sedimentary rock layers, extreme depth, and vivid color gradients are direct results of millions of years of river erosion and weathering.`
    },
    {
        id: "std-8",
        searchTerm: "Mount Fuji cherry blossoms",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "What country and landmark is this?",
        powerPrompt: "From the conical peak and pink flowers, deduce the volcano's location. Include region, country, and seasonal context. Compare to similar mountains.",
        averageOutput: `

The image shows Mount Fuji, a prominent volcanic mountain in Japan, with a body of water (likely one of the Fuji Five Lakes) in the foreground and cherry blossoms in bloom. Therefore, the country is Japan and the landmark is Mount Fuji.
Japan, Mount Fuji`,
        powerOutput: `

To deduce the volcano’s location, we analyze key clues:  

1. **Conical Peak**: The symmetrical, snow-capped cone is characteristic of a *stratovolcano*. Among the world’s most iconic stratovolcanoes, this shape is closely associated with **Mount Fuji** in Japan.  
2. **Pink Flowers**: The delicate pink blooms are cherry blossoms (*sakura*), which are culturally and ecologically tied to Japan. Cherry blossoms typically bloom in **spring (March–April)** in Japan, aligning with the seasonal context.  
3. **Geographic Context**: Mount Fuji is located in the **Chūbu region** of Japan, straddling Yamanashi and Shizuoka prefectures. It is often viewed from lakes like Kawaguchi or Motosu, which matches the water body in the foreground.  


### Comparison to Similar Mountains:  
- **Mount Vesuvius (Italy)**: Less symmetric, surrounded by urban development, and lacks the iconic cherry blossom association.  
- **Mount Rainier (USA)**: Taller and more rugged, with a different ecological setting (no widespread cherry blossom culture).  
- **Mount Kilimanjaro (Tanzania)**: A dormant volcanic complex, not a single conical stratovolcano, and no cherry blossom connection.  

Mount Fuji’s uniqueness lies in its perfect symmetry, cultural symbolism (cherry blossoms), and role as Japan’s national icon—distinguishing it from other volcanoes.  


**Location**: Chūbu region, Japan (specifically near Mount Fuji); **Seasonal Context**: Spring (cherry blossom blooming period).`
    },
    {
        id: "std-9",
        searchTerm: "Colosseum Rome interior",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Identify this historical site.",
        powerPrompt: "Examine the arched ruins and seating tiers inside this amphitheater. Identify city, country, and historical era. Note any restoration clues.",
        averageOutput: `

The historical site in the image is the **Colosseum** in Rome, Italy. This iconic ancient amphitheater is known for its distinctive architecture, including massive stone walls, arched openings, and tiered seating, which were used for gladiatorial contests and public spectacles in Roman times.
The final result is Colosseum.`,
        powerOutput: `

To determine the location and context of the amphitheater:  

### **City, Country, and Historical Era**  
The structure is the **Colosseum** in **Rome, Italy**, built during the **Roman Empire’s Flavian Dynasty (c. 70–80 CE)**. This is identified by its iconic architectural features: multi-tiered arched seating, the elliptical arena floor, and the layered stone construction typical of Roman amphitheaters.  


### **Restoration Clues**  
- **Modern Infrastructure**: The metal walkway and railings for tourists indicate contemporary preservation efforts to allow safe access to the ruins.  
- **Reconstructed Sections**: Some stonework (e.g., the lighter-colored patches on walls) likely represents repairs or reinforcements added during restoration projects.  
- **Preserved Ruins**: While much of the original structure remains in ruin (exposing underground tunnels and foundations), key elements like the main arches and seating tiers have been stabilized for public viewing.  


**Final Answer:**  
City: Rome; Country: Italy; Historical Era: Roman Empire (Flavian period, 1st century CE); Restoration clues include modern walkways, reinforced stonework, and preserved ruins for tourism.`
    },
    {
        id: "std-10",
        searchTerm: "Niagara Falls Canadian side",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Where is this waterfall located?",
        powerPrompt: "Based on the horseshoe shape and mist, locate this waterfall. Specify border details, countries involved, and viewpoint.",
        averageOutput: `

To determine the location of the waterfall in the image, we analyze key visual features: the massive scale of the falls, the mist rising from the cascading water, and the characteristic landscape (including the river below and the cliffside terrain). These elements are iconic of **Niagara Falls**, one of the world’s most renowned waterfalls straddling the border between the United States and Canada. 

Thus, the waterfall is located at Niagara Falls.`,
        powerOutput: `

To determine the location, we analyze the **horseshoe - shaped waterfall** and mist, which are iconic features of **Niagara Falls**, specifically **Horseshoe Falls** (also known as Canadian Falls).  

### Border Details & Countries Involved  
Niagara Falls straddles the international border between two countries:  
- **Canada**: The province of Ontario.  
- **United States**: The state of New York.  
The falls are part of the Niagara River, which flows from Lake Erie to Lake Ontario, with the border running through the river.    

### Viewpoint  
The image’s perspective aligns with views from the **Canadian side** (Ontario), where Horseshoe Falls is most prominently observed. This area includes landmarks like Queen Victoria Park, offering panoramic vistas of the falls’ curved shape and mist.    


Thus, the waterfall is **Niagara Falls (Horseshoe Falls)**, located on the border between **Canada (Ontario)** and the **United States (New York)**, with the viewpoint typically from the Canadian side.`
    },
    {
        id: "std-11",
        searchTerm: "Santorini Greece blue domes",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "Guess the island in this photo.",
        powerPrompt: "Using white buildings, blue roofs, and sea views, identify the island group and country. Provide volcanic history as context.",
        averageOutput: `

The image features a white building with a distinctive blue dome, characteristic of Greek Orthodox churches found in the Cyclades islands. The backdrop includes rugged cliffs and the deep blue waters of the Aegean Sea, which are iconic elements of Santorini's landscape. Santorini is renowned for its whitewashed structures, blue-domed churches, and dramatic volcanic caldera views, making it highly recognizable. 

Therefore, the island in the photo is Santorini.`,
        powerOutput: `

The image depicts **Santorini**, part of the **Cyclades** island group in **Greece**.  

### Volcanic History Context:  
Santorini’s dramatic landscape is shaped by its volcanic origins. The island is the remnant of a massive volcanic caldera formed by the catastrophic **Minoan eruption** (c. 1600 BCE), one of the largest volcanic events in recorded history. This eruption collapsed the volcano’s central cone, creating the iconic caldera cliffs and deep bay seen today. Subsequent smaller eruptions (notably in 1707–1711 CE) further modified the terrain, while ongoing seismic activity highlights the region’s active volcanic legacy. The white-washed buildings and blue-domed churches are traditional architectural responses to the island’s arid climate and volcanic soil, blending functionality with aesthetic charm against the backdrop of the Aegean Sea.`
    },
    {
        id: "std-12",
        searchTerm: "Pyramids of Giza camel foreground",
        imagePlaceholder: "/placeholder-image.jpg",
        averagePrompt: "What ancient site is this?",
        powerPrompt: "From the triangular structures and desert animal, determine the ancient complex. Include city, country, and pharaoh associations.",
        averageOutput: `

To determine the ancient site, we analyze the key visual elements: the prominent pyramids in the background are characteristic of the Giza Pyramid Complex in Egypt, one of the most iconic ancient sites. The desert landscape and presence of camels (common in Egyptian tourism around these pyramids) further support this identification. 

Thus, the ancient site is the Giza Pyramid Complex.`,
        powerOutput: `

The image shows the **Giza Pyramid Complex** in **Giza, Egypt**. This ancient complex features the iconic triangular pyramids, which were built as tombs for pharaohs during the Old Kingdom period. The most prominent pyramids here are attributed to:  
- **Khufu** (Great Pyramid),  
- **Khafre** (second-largest pyramid),  
- **Menkaure** (smallest of the three main pyramids).  

Camels, visible in the foreground, are typical of the Egyptian desert environment surrounding this historic site.  

**Answer:** The ancient complex is the Giza Pyramid Complex in Giza, Egypt, associated with Pharaohs Khufu, Khafre, and Menkaure.`
    }
];

export const toughScenarios: BenchmarkScenario[] = [
    {
        id: "tough-1",
        searchTerm: "Obscure alley in Tokyo Shibuya rainy night no signs",
        imagePlaceholder: "/Images/Shibuya.jpg",
        averagePrompt: "Where is this photo taken?",
        powerPrompt: "Analyze this dimly lit urban alley for geographic clues like pavement style, neon reflections, and rain patterns. Provide step-by-step reasoning to identify the exact neighborhood, city, and country, considering Asian architectural hints and weather common to the area.",
        averageOutput: `

To determine the location, analyze visual clues:  
1. **Language and Text**: Signs feature Japanese characters (e.g., “お買い物して楽しく元気” and “上原仲通り商店街”), indicating a Japanese-speaking region.  
2. **Cultural Elements**: Traditional paper lanterns (andōrō) are common in Japanese streets, especially in shopping districts.  
3. **Street Layout and Architecture**: Narrow streets with closely packed buildings, typical of urban Japanese neighborhoods or shopping streets (*shōtengai*).  

The sign “上原仲通り商店街” explicitly names a shopping street, confirming the location is in Japan.  

Japan, specifically Uehara Nakadori Shopping Street`,
        powerOutput: `

To determine the location, we analyze key visual and textual clues systematically:  


### Step 1: Identify Language and Cultural Hints  
- **Japanese Text**: Signs include “お買い物して楽しく元気” (a cheerful shopping slogan) and “上原仲通り商店街” (“Uehara Nakadori Shopping Street”). This confirms the country is **Japan**, as Japanese script is exclusive to Japan.  


### Step 2: Analyze Architectural and Urban Features  
- **Lanterns**: Traditional Japanese *andon* (paper lanterns) line the street, a hallmark of local shopping districts (*shotengai*) in Japan.  
- **Building Style**: Mixed modern and modest structures with tiled exteriors and glass-block windows, typical of mid-20th to early 21st-century urban Japan.  
- **Pavement and Infrastructure**: The road has a reddish surface with white lane markings and green curbside strips—common in Japanese residential/commercial alleys. Overhead utility wires are also characteristic of Japanese cities.  


### Step 3: Contextualize the “Shopping Street” Sign  
- “上原仲通り商店街” (*Uehara Nakadori Shōtengai*) references a specific shopping street. “Uehara” is a neighborhood in **Shibuya, Tokyo** (a major urban district known for such local markets). This narrows the location to Tokyo’s Uehara area.  


### Step 4: Weather and Environmental Cues  
- **Rain Patterns**: Wet pavement reflects neon/lantern light, indicating recent rain. Japan’s humid climate (especially in coastal regions like Tokyo) frequently experiences such weather, aligning with the scene.  


### Final Conclusion  
The combination of Japanese text, traditional lanterns, urban infrastructure, and the named “shopping street” points to:  
- **Country**: Japan  
- **City**: Tokyo  
- **Neighborhood**: Uehara (specifically the Nakadori Shopping Street area)  


**Answer:** The location is Uehara Nakadori Shopping Street in Shibuya, Tokyo, Japan.`
    },
    {
        id: "tough-2",
        searchTerm: "Remote Icelandic waterfall foggy day no people",
        imagePlaceholder: "/Images/iceland.webp",
        averagePrompt: "Guess the location in this image.",
        powerPrompt: "Examine the rocky terrain, mist, and basaltic formations in this isolated cascade image. Deduce the location with geological context, specifying island region, country, and potential name if inferable. Explain visual cues like fog density and vegetation sparsity.",
        averageOutput: `The image depicts a dramatic landscape featuring a waterfall cascading down steep, moss-covered cliffs amidst a misty atmosphere. Such geological formations, characterized by volcanic rock structures and lush greenery, are iconic of Iceland’s rugged terrain. The combination of towering cliffs, a prominent waterfall, and the moody, foggy environment aligns closely with the natural beauty found in Icelandic valleys and fjords. Iceland`,
        powerOutput: `

To deduce the location, we analyze geological and environmental cues:  

### Geological Context  
The **basaltic rock formations** (dark, columnar-jointed cliffs) indicate volcanic activity, as basalt forms from cooled lava flows. This is characteristic of regions with recent or ongoing volcanism, such as Iceland or the Faroe Islands. The steep, layered cliffs suggest erosion by glacial or fluvial processes, common in post-glacial landscapes.    

### Environmental Cues  
- **Mist Density**: Thick, persistent fog implies high atmospheric moisture, consistent with a **maritime climate** influenced by ocean currents (e.g., the North Atlantic’s Gulf Stream). Such conditions are typical of Iceland, where moist air from the ocean collides with cold landmasses, creating frequent mist.  
- **Vegetation Sparsity**: Sparse grass cover with no tall trees reflects a **subarctic/tundra climate**, where short growing seasons, volcanic soils, and strong winds limit forest growth. Iceland’s harsh environment favors low-lying mosses, lichens, and hardy grasses over arboreal species.    

### Location Inference  
Iceland is renowned for its basalt landscapes, waterfalls, and maritime mist. While the exact waterfall name is not definitively identifiable without additional data, the combination of volcanic geology, misty atmosphere, and sparse vegetation strongly points to **Iceland**.  


**Answer:**  
Island Region: Iceland  
Country: Iceland  
Potential Name: A remote Icelandic waterfall (e.g., in the Westfjords or East Iceland, though specific naming requires further detail).  

Visual cues align with Iceland’s volcanic geology (basalt cliffs), maritime climate (dense mist), and subarctic ecology (sparse vegetation).`
    },
    {
        id: "tough-3",
        searchTerm: "Anonymous street in Marrakech medina cluttered",
        imagePlaceholder: "/Images/Marrakech.jpeg",
        averagePrompt: "What city is this scene in?",
        powerPrompt: "Based on the riad-style doors, market stalls, and earthen walls in this bustling lane, identify this historic quarter. Include city, country, and nearby souk references. Reason through potential confusions with similar Middle Eastern or North African medinas.",
        averageOutput: `

To determine the city, analyze key visual elements: the narrow cobblestone street, colorful traditional rugs (common in North African markets), ornate architectural details (arched doorway, decorative tile work), and the presence of palm trees. These features are characteristic of **Marrakech, Morocco**, particularly its historic medina (old city) and souks (markets). 

Marrakech`,
        powerOutput: `

To identify the historic quarter, we analyze key visual and cultural clues:  

1. **Riad-Style Doors**: The arched doorway with intricate geometric tilework and wooden detailing is iconic of traditional Moroccan *riad* architecture, found in cities like Marrakech and Fez.  
2. **Market Stalls & Rugs**: The hanging textiles (rugs, blankets) are typical of North African souks (markets), where artisanal goods are displayed openly. This aligns with Morocco’s rich tradition of carpet weaving and market culture.  
3. **Earthen Walls**: The warm, earth-toned walls (likely made of adobe or plaster) are characteristic of Moroccan medinas, which use local materials for insulation and aesthetic harmony.  


### Potential Confusions & Rationale:  
- **Fez vs. Marrakech**: While both have medinas with similar architecture, Marrakech’s medina is more tourist-centric and vibrant, with souks clustered near Jamaa el-Fna square. Fez’s medina is older and more labyrinthine, with a stronger focus on leatherworking (e.g., Chouara Tannery). The image’s lively, accessible market stalls and the prominence of rug displays lean toward Marrakech.  
- **Tunis (Tunisia)**: Tunis’s medina (*medina of Tunis*) features Ottoman-influenced architecture and blue-tiled mosques, which differ from the earthy tones and riad details here.  
- **Cairo (Egypt)**: Cairo’s Islamic Cairo has medieval architecture but less emphasis on open-air rug markets and more on stone/brick structures, distinct from Morocco’s adobe-based aesthetics.  


### Conclusion:  
The historic quarter is the **Medina of Marrakech, Morocco**, near souks like *Souk Cherratine* (leatherworkers) or *Souk El Bahja* (textiles). The combination of riad doors, vibrant market stalls, and earthen walls is definitive of Marrakech’s iconic old town.  

**Answer:** Marrakech, Morocco; nearby souks include Souk Cherratine and Souk El Bahja.`
    },
    {
        id: "tough-4",
        searchTerm: "Overgrown ruins in Cambodian jungle partial view",
        imagePlaceholder: "/Images/Ta Prohm.jpg",
        averagePrompt: "Identify the place shown here.",
        powerPrompt: "From this vine-covered stone structure and humid foliage, determine the lesser-known archaeological site. Provide latitude/longitude estimates, country, and historical era. Note tropical overgrowth and partial occlusion as clues.",
        averageOutput: `

The image depicts Ta Prohm Temple, a renowned structure within the Angkor complex in Siem Reap, Cambodia. It is characterized by massive tree roots (from silk-cotton or strangler fig trees) that have grown over and through the ancient stone ruins, creating a striking blend of nature and architecture. This temple is one of the most iconic sites in Angkor due to its unique appearance where vegetation has reclaimed parts of the historic site.

The answer is Ta Prohm Temple, Angkor, Cambodia`,
        powerOutput: `

To determine the site, analyze the clues: **vine-covered stone structure**, **humid tropical foliage** (indicating a monsoon climate), and **tree roots partially occluding the building** (typical of ancient ruins reclaimed by nature). The architectural style—with intricate stone carvings and weathered sandstone—aligns with the Khmer Empire’s temple complexes in Southeast Asia.  

While Angkor Wat is iconic, the scene matches **Ta Prohm**, a lesser-known (but still renowned) temple within the Angkor Archaeological Park. It was constructed in the late 12th century under King Jayavarman VII and is distinguished by its dramatic fusion with nature.  


### Details:  
- **Site**: Ta Prohm  
- **Country**: Cambodia  
- **Historical Era**: Khmer Empire (late 12th–early 13th century)  
- **Latitude/Longitude Estimates**: ~13.415° N, 103.823° E (Siem Reap Province, near Angkor Wat)  


This site exemplifies the Khmer’s integration of religious architecture with the surrounding jungle, making it a striking example of how nature reclaims human-made structures over centuries.`
    },
    {
        id: "tough-5",
        searchTerm: "Snowy rural road in Norwegian fjord obscured",
        imagePlaceholder: "/Images/norway.jpg",
        averagePrompt: "Where was this picture captured?",
        powerPrompt: "Inspect the icy path, steep cliffs, and faint water glimpses in this winter scene. Pinpoint the fjord area, region, and country. Discuss how snow cover affects identification and shadow directions for latitude.",
        averageOutput: `

To determine the location, we analyze the key feature: extremely high snow walls flanking a road, a phenomenon associated with regions known for heavy winter snow and seasonal road clearing. The **Tateyama Kurobe Alpine Route** in Japan is renowned for its towering snow walls (reaching up to 20 meters) during late spring/early summer when roads are opened after winter closures. This matches the visual context of the image.

Tateyama Kurobe Alpine Route, Japan`,
        powerOutput: `

To determine the location and analyze the scene:  

### 1. **Pinpointing the Fjord Area, Region, and Country**  
The image depicts a narrow road flanked by towering snow walls, indicative of a high-snowfall, mountainous region. Fjords are iconic to **Norway**, particularly in its western and northern coastal areas. The steep, snow-covered cliffs and icy path align with Norway’s rugged topography, where glacial activity and oceanic weather patterns create dramatic landscapes. While specific fjords (e.g., Sognefjord, Geirangerfjord) are not directly visible, the environmental clues (extreme snow accumulation, alpine terrain) point to **Western Norway (Vestlandet)** or adjacent inland regions (Innlandet). Thus, the country is **Norway**, with the fjord area likely in its western or central mountainous zones.  


### 2. **Impact of Snow Cover on Identification**  
- **Obscuring Landmarks**: Heavy snow can mask underlying terrain features (e.g., cliff faces, vegetation, or fjord shorelines), making it harder to identify specific locations. However, the uniformity of the snow walls (suggesting regular plowing) and the road’s alignment hint at maintained mountain passes, common in Norway’s winter road networks.  
- **Concealing Context**: Snow may hide signs of human activity (e.g., buildings, signage) or natural markers (e.g., rock formations), reducing visual cues for precise identification. Yet, the sheer scale of snow accumulation—typical of Norway’s maritime climate (where moist air from the Atlantic dumps heavy snow on mountains)—reinforces the regional context.  


### 3. **Shadow Directions and Latitude Clues**  
Shadows are not clearly visible due to the overcast sky, but two key observations relate to latitude:  
- **Low Sun Angle**: In high-latitude regions (like Norway, above 60°N), winter sunlight is weak and diffuse, creating soft, indistinct shadows even on clear days. The gray, featureless sky here reflects this “low-angle light” characteristic of polar winters.  
- **Snow Persistence**: Prolonged snow cover (seen in the deep, consolidated snow walls) indicates a cold climate with limited seasonal thaw—consistent with Norway’s subarctic and alpine zones, where snow lingers for months.  


In summary, the scene is most consistent with **Norway’s western or central mountainous fjord regions**, where extreme snowfall, alpine terrain, and high-latitude winter conditions dominate. Snow cover complicates detailed landmark identification but reinforces the geographic context of Norway’s wintry, fjord-influenced landscapes.`
    },
    {
        id: "tough-6",
        searchTerm: "Deserted beach in Patagonia Chile windy",
        imagePlaceholder: "/Images/Patagonia.jpg",
        averagePrompt: "What's the location of this coast?",
        powerPrompt: "Using the rugged pebbles, wind-swept waves, and distant mountains, identify this coastal stretch. Specify subregion, country, and environmental factors like wind erosion. Include ecosystem hints like kelp.",
        averageOutput: `

To determine the location of the coast, analyze visual cues: the beach features **pebbles** (not sand), clear blue water, a sunny sky, and people engaging in typical beach activities. Pebble beaches are common in temperate regions, particularly in Europe (e.g., the UK, Denmark) or parts of South America. The absence of distinct landmarks makes precise identification challenging, but the overall setting aligns with coastal areas known for pebble shores. Based on typical environments and common beach characteristics, the most plausible location is a **temperate coastal region with pebble beaches**, such as those found in the United Kingdom (e.g., Brighton) or similar European locales.

The answer is A pebble beach in a temperate coastal region, likely in Europe (e.g., the UK or Denmark)`,
        powerOutput: `

To identify the coastal stretch, we analyze the visual cues and ecological/environmental context:  

### 1. **Subregion & Country**  
The rugged pebble beach, wind-swept conditions, and distant topography align with the **Atlantic coast of Uruguay**, specifically the *Rocha Department* (eastern Uruguay). This region is known for its pebble-dominated shores, dune systems, and proximity to the Sierra de las Ánimas (a low mountain range inland).    

### 2. **Environmental Factors (Wind Erosion)**  
Strong onshore winds from the Atlantic drive **wind erosion**, shaping the pebble deposits into dunes and transporting sediments along the coast. The absence of dense vegetation on the upper beach (visible in the image) further indicates wind’s role in sculpting the landscape, as sparse plant cover allows unimpeded sediment movement.    

### 3. **Ecosystem Hints (Kelp)**  
Temperate waters off Uruguay support **kelp forests** (e.g., *Macrocystis pyrifera*), which thrive in nutrient-rich, cool currents. These forests provide critical habitat for fish, invertebrates, and marine mammals, characteristic of Uruguay’s coastal ecosystems.    


**Final Identification**:  
- **Subregion**: Atlantic Coast (Rocha Department)  
- **Country**: Uruguay  
- **Key Environmental Factors**: Wind erosion shaping pebble beaches/dunes; strong onshore Atlantic winds driving sediment dynamics.  
- **Ecosystem Hint**: Kelp forests in adjacent waters support rich marine biodiversity.`
    },
    {
        id: "tough-7",
        searchTerm: "Misty forest path in New Zealand South Island no trails",
        imagePlaceholder: "/Images/nz.jpg",
        averagePrompt: "Guess where this is.",
        powerPrompt: "Analyze fern undergrowth, podocarp trees, and fog in this woodland image. Determine national park or range, island, and country. Explain biodiversity as evidence and compare to similar temperate rainforests.",
        averageOutput: `

To determine the location, analyze the environmental features: the dense forest with moss - covered, twisted trees, misty atmosphere, and gravel path suggest a **montane cloud forest** with high humidity and frequent fog. Such ecosystems are found in mountainous regions with consistent moisture.  

Key clues:  
- The gnarled tree trunks and heavy moss indicate a cool, wet climate typical of high - elevation or coastal mountain ranges.  
- Gravel paths are common in managed hiking trails, hinting at a protected natural area.  

Considering iconic cloud forests, **New Zealand’s Milford Track** (in Fiordland National Park) fits: it features dense beech forests with moss - draped trees, misty conditions, and gravel trails, matching the image’s characteristics.  


New Zealand’s Milford Track (Fiordland National Park)`,
        powerOutput: `

To determine the location and analyze the ecosystem, we examine the key features: **fern undergrowth**, **podocarp trees**, and **fog**.


### **1. Identifying the Location**
- **Podocarp Trees**: These conifers (e.g., *Dacrydium*, *Prumnopitys*) are iconic to the Southern Hemisphere, particularly New Zealand’s temperate rainforests. They dominate the canopy in moist, cool environments.  
- **Fern Undergrowth**: Lush ferns (e.g., *Cyathea* tree ferns, ground ferns) thrive in the damp, shaded conditions created by the dense canopy and frequent fog. This is characteristic of New Zealand’s “bush” ecosystems.  
- **Fog**: Persistent mist indicates high humidity and orographic precipitation (rain/snow from mountains intercepting moisture-laden winds), common in New Zealand’s west coast (e.g., Fiordland, Westland).  

These features align with **temperate rainforests of New Zealand’s South Island**, specifically within national parks like **Fiordland National Park** or **Westland Tai Poutini National Park**.  


### **2. Biodiversity Evidence**
The ecosystem exhibits high biodiversity, driven by:  
- **Endemic Flora**: Podocarps (ancient conifers) and ferns are foundational, with many species unique to New Zealand (e.g., *Dacrycarpus* spp., *Cyathea dealbata*). Mosses, liverworts, and epiphytes (plants growing on trees) further enrich the understory.  
- **Moisture Dependence**: Fog and high rainfall create microhabitats for moisture-loving species, reducing competition and supporting niche specialization.  
- **Isolation**: New Zealand’s geographic isolation (over 1,000 km from Australia) limited species exchange, leading to high endemism (~80% of vascular plants are endemic).  


### **3. Comparison to Similar Temperate Rainforests**
Temperate rainforests exist in other regions (e.g., Pacific Northwest USA/Canada, Valdivian Chile, Tasmania), but New Zealand’s stand out due to:  
- **Dominant Conifers**: While PNW rainforests feature *Sitka spruce* and *western hemlock*, New Zealand’s rely on podocarps (a Gondwanan relict group).  
- **Endemism**: New Zealand’s isolation resulted in far higher plant endemism than, say, the PNW (where ~30% of plants are endemic).  
- **Fern Diversity**: New Zealand hosts over 200 fern species, compared to ~50 in the PNW, reflecting its wetter, milder climate.  


### **Conclusion**
This woodland is likely in **Fiordland or Westland Tai Poutini National Park, South Island, New Zealand**. The combination of podocarps, dense ferns, and fog confirms a temperate rainforest ecosystem, distinguished by high endemism and moisture-dependent biodiversity—unique among global temperate rainforests due to New Zealand’s geological and climatic history.


**Final Answer:**  
The woodland is located in **Fiordland or Westland Tai Poutini National Park, South Island, New Zealand**. Key evidence includes podocarp trees (iconic to NZ’s temperate rainforests), dense fern undergrowth (adapted to high moisture), and persistent fog (from oceanic influences). Biodiversity is high due to endemism (driven by isolation) and moisture-dependent niches. Compared to similar temperate rainforests (e.g., Pacific Northwest USA/Canada), New Zealand’s forests have greater plant endemism and distinct conifer dominance (podocarps vs. spruces/hemlocks).`
    },
    {
        id: "tough-8",
        searchTerm: "Urban park in Seoul Korea autumn leaves no landmarks",
        imagePlaceholder: "/Images/Seoul.jpg",
        averagePrompt: "What country and area is this?",
        powerPrompt: "From the ginkgo trees, bench designs, and urban skyline peeks, deduce the park's location. Include district, city, and country. Note seasonal foliage colors and air quality hints.",
        averageOutput: `

To determine the country and area, analyze architectural and environmental clues:  
1. **Traditional Architecture**: The buildings feature curved tile roofs and wooden structures, characteristic of Korean (Joseon dynasty) design, seen in palaces or historical parks.  
2. **Natural Features**: The vibrant red maple leaves indicate autumn, a season when such foliage is prominent in East Asia, particularly Korea.  
3. **Urban Context**: Modern buildings in the background suggest a city that preserves historical sites alongside urban development, typical of Seoul, South Korea.  

Combining these elements, the location is likely a historical park or palace garden in Seoul, South Korea.  

South Korea, Seoul (likely a historical park or palace garden such as Changdeokgung or Deoksugung)`,
        powerOutput: `

To deduce the park’s location, analyze key visual cues:  

1. **Architectural Style**: The traditional pavilions with curved tile roofs and wooden structures are characteristic of *Joseon Dynasty-era architecture*, common in historic sites across South Korea.  
2. **Urban Skyline**: Modern high-rises in the background indicate a major metropolitan area. Seoul, South Korea’s capital, blends historic palaces with contemporary skyscrapers.  
3. **Seasonal Foliage**: Vibrant red/orange leaves signal **autumn** (October–November), typical of temperate climates where maple or ginkgo trees change color.  
4. **Air Quality Hint**: The clear sky and bright lighting suggest relatively good air quality, consistent with Seoul’s efforts to improve urban environmental conditions.  


Combining these, the park is likely within a historic palace complex in Seoul. The most iconic such site with similar architecture and urban integration is **Changdeokgung Palace**, located in **Jongno-gu, Seoul, South Korea**.  


**Answer**: Jongno-gu, Seoul, South Korea; seasonal foliage shows autumn red/orange hues, and air quality appears clear.`
    },
    {
        id: "tough-9",
        searchTerm: "Abandoned village in Italian Dolomites foggy",
        imagePlaceholder: "/Images/Italy.avif",
        averagePrompt: "Identify this remote site.",
        powerPrompt: "Examine the stone huts, alpine meadows, and mist-shrouded peaks in this deserted hamlet. Identify valley, region, and country. Note architectural style for era and any restoration absences.",
        averageOutput: `

The image depicts Craco, an abandoned medieval village in the region of Basilicata, Italy. Known for its dramatic location atop a steep cliff and distinctive rock formations, Craco was deserted in the 20th century due to geological instability. The stone buildings, including a prominent church with a spire, and the surrounding arid, rocky landscape are characteristic features of this historic site.

Craco, Italy`,
        powerOutput: `

To identify the location and details:  

### **Valley, Region, and Country**  
- **Country**: Italy  
- **Region**: Basilicata (southern Italy)  
- **Valley/Specific Area**: The hamlet is **Craco**, situated in the Val d’Agri valley within the Lucanian Apennines.  


### **Architectural Style and Era**  
The stone huts reflect **medieval to early modern rural architecture** (roughly 10th–19th centuries). Key features include:  
- **Stone construction**: Local limestone/sandstone, adapted to the rugged terrain.  
- **Compact, terraced layout**: Buildings cluster on steep slopes, maximizing limited flat space.  
- **Simple forms**: Rectangular structures with minimal ornamentation, suited for defensive and practical needs.  


### **Restoration Absences**  
Craco was abandoned in the 1960s due to landslides and soil instability. Most buildings remain in **ruinous condition** with no large-scale restoration. The site is preserved as a “ghost town” to showcase its historical decay, with only minor stabilization (e.g., securing loose stones) rather than full reconstruction.  


This analysis aligns with Craco’s iconic status as an abandoned medieval settlement in southern Italy, defined by its dramatic landscape and untouched ruins.`
    },
    {
        id: "tough-10",
        searchTerm: "Riverbank in Amazon Brazil dense foliage",
        imagePlaceholder: "/Images/Amazon.jpeg",
        averagePrompt: "Where is this waterway located?",
        powerPrompt: "Based on the muddy waters, vine tangles, and canopy density, locate this riparian zone. Specify basin tributary, state, and country. Consider biodiversity clues like visible insects or birds.",
        averageOutput: `

To determine the location of the waterway, we analyze the image’s key features: dense tropical rainforest, a multi - step waterfall, dark water (likely from tannins in tropical ecosystems), and recreational activity (swimming, ropes). These elements are characteristic of the Amazon Basin, particularly in **Brazil**, where such blackwater rivers and waterfalls are common in rainforest environments. The lush vegetation and natural recreation align with regions like the Amazon or Cerrado biomes in Brazil.

The answer is Brazil`,
        powerOutput: `

To determine the location of this riparian zone, we analyze key features:  

1. **Environmental Clues**:  
   - **Muddy Waters & Tannin Staining**: Dark water suggests high organic content or tannins, common in tropical rainforest rivers (e.g., Amazon Basin).  
   - **Dense Canopy & Vine Tangles**: Lush, multi-layered vegetation indicates a tropical rainforest ecosystem, characteristic of the Amazon.  
   - **Waterfall Structure**: Small cascades over rocky terrain are typical of upland streams in the Amazon’s headwaters.  

2. **Biodiversity Context**:  
   Tropical riparian zones in the Amazon support exceptional biodiversity (e.g., birds, insects, aquatic life), aligning with the dense, intact forest seen here.  

3. **Geographic Inference**:  
   The Amazon Basin dominates this landscape. While multiple Brazilian states host Amazonian tributaries, the combination of forest density, water chemistry, and ecological traits points to a **tributary within the Amazon Basin**, most likely in **Brazil** (the largest portion of the Amazon lies here).  


**Answer**: Basin: Amazon; State: Amazonas (or similar Amazonian state); Country: Brazil.`
    },
    {
        id: "tough-11",
        searchTerm: "Cliffside path in Scottish Highlands overcast",
        imagePlaceholder: "/Images/scottish.jpeg",
        averagePrompt: "Guess the region in this photo.",
        powerPrompt: "Using heather plants, sheer drops, and gray skies, identify the highland trail. Provide area, country, and geological features. Discuss weather patterns as regional indicators.",
        averageOutput: `The image depicts a mountainous valley with rugged terrain, grassy slopes, and scattered trees, characteristic of the Scottish Highlands. The landscape features typical elements like steep hills, a winding dirt path, and temperate vegetation, which align with regions such as Glencoe or other parts of the Scottish Highlands known for their dramatic natural beauty. `,
        powerOutput: `

To address the query, we analyze the environmental cues (heather, sheer drops, gray skies) and contextualize them within a highland landscape:  


### **1. Identification of the Highland Trail**  
The combination of **heather** (*Calluna vulgaris*), **sheer drops** (steep mountain slopes/cliffs), and **gray skies** (maritime cloud cover) points to the **Scottish Highlands**, a iconic highland region in the United Kingdom. While specific trails (e.g., West Highland Way, Cape Wrath Trail) fit this profile, the broader geographic context defines the area.    


### **2. Area, Country, and Geological Features**  
- **Area**: Scottish Highlands (encompassing rugged uplands, glens, and coastal fringes).  
- **Country**: Scotland (United Kingdom).  

**Geological Features**:  
The Highlands are shaped by two key processes:  
- **Caledonian Orogeny**: A 400–500 million-year-old mountain-building event where continental plates collided, forming metamorphic (schist, gneiss) and igneous (granite) rocks. These ancient bedrocks underpin the region’s dramatic topography.  
- **Pleistocene Glaciation**: During the last ice age, glaciers carved the landscape into *U-shaped glens* (valleys), *corries* (bowl-shaped cirques), and *lochs* (lakes). Steep “sheer drops” are remnants of glacial erosion, where ice sculpted sharp cliff faces.    


### **3. Weather Patterns as Regional Indicators**  
The Scottish Highlands exhibit a **temperate maritime climate**, driven by their proximity to the Atlantic Ocean and the Gulf Stream:  
- **Gray Skies & Cloud Cover**: Moist Atlantic air masses collide with the Highlands’ topography, forcing uplift and condensation. This results in persistent overcast conditions (gray skies) and ~200+ days of rain annually.  
- **Precipitation**: High rainfall (1,500–3,000 mm/year) sustains heather moorlands and feeds rivers/lochs. Western areas (e.g., Lochaber) receive more rain than eastern zones.  
- **Temperatures**: Mild for latitude (average 5–15°C in summer; -2–8°C in winter) due to the Gulf Stream, but wind chill and sudden weather shifts are common in exposed highland areas.    


In summary, the described landscape aligns with the Scottish Highlands—a region defined by ancient geology, glacial heritage, and a dynamic maritime climate that shapes its iconic scenery.`
    },
    {
        id: "tough-12",
        searchTerm: "Winding road in Swiss Alps snow partial view",
        imagePlaceholder: "/Images/Alps.jpeg",
        averagePrompt: "What mountainous area is this?",
        powerPrompt: "From the switchback curves, conifer trees, and fresh powder, determine the pass or valley. Include canton, country, and altitude estimates. Analyze snow texture for recency and avalanche risks.",
        averageOutput: `

To determine the mountainous area, we analyze key features: steep green slopes, a winding road, a river valley, and snow - capped peaks in the distance. These characteristics are typical of the **European Alps**, a major mountain range known for such dramatic landscapes. While specific sub - regions (like the Swiss or Austrian Alps) could be considered, the broad geographic feature matching the visual elements is the Alps.

The answer is the Alps`,
        powerOutput: `

To determine the location and analyze snow conditions, we break down the clues:  

### 1. **Pass vs. Valley**  
The **switchback curves** (winding road) are characteristic of mountain *passes*, where roads climb steep terrain to cross between valleys. Valleys typically have gentler gradients and less extreme road engineering. Thus, this is a **mountain pass**.  


### 2. **Location (Canton, Country, Altitude)**  
- **Canton/Country**: The alpine landscape—with rugged peaks, conifer forests, and engineered switchbacks—matches the Swiss Alps. A likely candidate is the **Grimsel Pass** in **Canton Bern, Switzerland**, known for its dramatic switchbacks and alpine scenery.  
- **Altitude Estimate**: Grimsel Pass sits at approximately **2,165 meters (7,100 feet)** above sea level.  


### 3. **Snow Texture & Avalanche Risk**  
- **Recency of Snow**: “Fresh powder” implies recent snowfall (likely within the past 24–72 hours), as powder snow is light, fluffy, and uncompacted.  
- **Avalanche Risk**: Fresh powder on steep slopes increases avalanche risk. If the snow fell rapidly or onto a weak underlying layer (e.g., old snow or ice), it may not bond well, creating unstable slabs. In alpine passes like Grimsel, avalanche risk is monitored closely; fresh snow would elevate risk to **moderate–high** until stability tests confirm bonding.  


### Final Summary  
- **Type**: Mountain pass  
- **Location**: Grimsel Pass, Canton Bern, Switzerland  
- **Altitude**: ~2,165 meters (7,100 ft)  
- **Snow Analysis**: Fresh powder indicates recent snowfall; avalanche risk is elevated due to unconsolidated snow on steep terrain.`
    }
];
