import { VisualPositioningScenario } from './types';

export const visualPositioningScenarios: VisualPositioningScenario[] = [
    {
        id: "vis-1",
        searchTerm: "Find Waldo in Crowded Beach",
        imagePlaceholder: "/Images/MainWaldo.jpg",
        averagePrompt: "Find Waldo in this image",
        powerPrompt: "Scan this crowded beach image for Waldo in his red-striped shirt, glasses, and hat. Describe his exact position relative to other elements like umbrellas or people, using grid coordinates (e.g., top-left quadrant). Explain visual distractions",
        averageOutput: "Waldo is located at [[432,826,464,904]] in the image.\n\n![Waldo Output 1](/Images/Waldo%201.jpg)",
        powerOutput: `To locate Waldo in the crowded beach image, we analyze his distinctive red-and-white striped shirt, glasses, and hat. He is situated in the **bottom-left quadrant** of the image. Relative to other elements, he is near blue-and-white striped beach huts and surrounded by a dense crowd of people.

Visual distractions that make finding Waldo difficult include:
1. The overwhelming number of beachgoers, each with unique clothing and poses.
2. Numerous colorful umbrellas (in red, blue, green, etc.) scattered across the sand.
3. Various beach activities and objects (like towels, balls, and boats in the water) that draw attention away from Waldo's specific appearance.

These elements create a visually busy scene, requiring careful scanning to spot Waldo's distinct outfit amid the chaos.

The final result is [[120,820,150,880]].

![Waldo Output 2](/Images/Waldo%202.jpg)`,
        outputType: "markdown"
    },
    {
        id: "vis-2",
        searchTerm: "Locate Keys on Messy Desk",
        imagePlaceholder: "/Images/Main%20key.jpg",
        averagePrompt: "Where are the keys located?",
        powerPrompt: "Analyze this messy desk for the silver keys. Note their position relative to papers, monitor, and edges (e.g., under stack, bottom-right). Discuss occlusion by other items",
        averageOutput: "The keys are located at [[312,629,454,749]].\n\n![Key Output 1](/Images/Key1.jpg)",
        powerOutput: `The silver keys are located at [[312,631,454,747]]. They are positioned beneath a stack of papers and envelopes, making them partially occluded by these documents. Relative to other items, they lie near the left-hand side of the desk, close to a ceramic mug and amidst various papers and stationery.

![Key Output 2](/Images/Key2.jpg)`,
        outputType: "markdown"
    },
    {
        id: "vis-3",
        searchTerm: "Maze Path Navigation",
        imagePlaceholder: "/Images/Maze.jpg",
        averagePrompt: "Describe the path from start to end",
        powerPrompt: "Trace the shortest path in this maze from entrance to exit. Describe turns, dead-ends avoided, and spatial relationships between walls. Use directions like north/south.",
        averageOutput: `To describe the path from start to end in the maze:
- **Start**: The bee begins at the left entrance of the maze (indicated by the left-facing arrow next to the bee).
- **Path through the maze**: From the start, move right into the first horizontal corridor, then go down, then right again into another horizontal section, then up, then right once more, and finally exit to the right where the flowers are located (marked by the right-facing arrow).

This path navigates through the open corridors of the maze, avoiding walls, to reach the end point near the flowers.
The answer is [[265,366,696,931]].

![Maze Output 1](/Images/maze1.jpg)`,
        powerOutput: `To determine the shortest path in the maze, we analyze the layout and directional movements:

### Step-by-Step Path Description:
1. **Entrance to Maze**: Start at the bee's position (left side, marked by the left arrow). Move **east** (right) into the maze.
2. **First Turn**: Immediately after entering, a vertical inner wall blocks further eastward movement. Turn **south** (down) to navigate around this wall.
3. **Southward Movement**: Continue moving south until reaching the bottom section of the maze. Here, the path opens to the east.
4. **Second Eastward Movement**: Turn **east** (right) and move along this horizontal corridor. Another vertical inner wall will block continued eastward travel, so…
5. **Northward Turn**: Turn **north** (up) to bypass this second vertical wall.
6. **Final Eastward Movement**: After moving north sufficiently, the path clears to the east. Proceed **east** to reach the exit (right side, marked by the right arrow).

### Key Details:
- **Turns**: East → South → East → North → East.
- **Dead-Ends Avoided**: The path steers clear of enclosed areas (dead-ends) by following open corridors created by the maze's walls. For example, after the initial east move, turning south avoids a dead-end blocked by the first inner wall; later, turning north avoids another blocked section.
- **Spatial Relationships**: Outer walls form a large rectangle, while inner walls create "corridors" that guide the path. The inner walls are positioned to force directional changes (south, then north) before allowing final eastward progress to the exit.

This sequence ensures the shortest route by minimizing unnecessary detours and leveraging the maze's structural constraints.`,
        outputType: "markdown"
    },
    {
        id: "vis-4",
        searchTerm: "Animal Track Identification",
        imagePlaceholder: "/Images/animal.jpg",
        averagePrompt: "Identify animal positions.",
        powerPrompt: "Examine tracks in this forest image. Identify animal types (e.g., deer) and their spatial sequence along the path. Note directions and distances.",
        averageOutput: `The animal positions in the image are represented by the bounding box [[0,162,998,996]].

![Animal Output 1](/Images/Animal1.jpg)`,
        powerOutput: `[[152,167,998,988]]

![Animal Output 2](/Images/Animal2.jpg)`,
        outputType: "markdown"
    },
    {
        id: "vis-5",
        searchTerm: "Interior Object Relationships",
        imagePlaceholder: "/Images/Interior.jpeg",
        averagePrompt: "Describe object relationships.",
        powerPrompt: "Map object relationships in this room: e.g., chair 2 feet left of table. Analyze depths, angles, and potential movements",
        averageOutput: `To describe the object relationships in the floor plan, we analyze spatial positioning, functional zones, and adjacencies:

### 1. **Dining Areas**
- **Upper-left dining table**: Surrounded by chairs, positioned in a dedicated dining zone.
- **Lower-left long table**: Below the first dining table, also with chairs—likely a secondary dining or work table. These two dining setups are vertically aligned but separated by a small table/desk.

### 2. **Living Spaces**
- **Middle-left living room**: Features a sofa against the wall, with a round coffee table in front. This space connects to the bedroom and hallway.
- **Upper-right family room**: Contains a large sofa, a square coffee table, and chairs around a small table. It is adjacent to the bedroom and hallway, creating a distinct relaxation zone.

### 3. **Bedroom**
- Centrally located, with a bed flanked by nightstands. It acts as a buffer between the middle-left living room and upper-right family room, linking these two social spaces.

### 4. **Bathroom & Stairs**
- **Bathroom**: In the lower-middle area, with a toilet and sink. It is adjacent to the main living spaces via hallways, ensuring accessibility.
- **Stairs**: Near the bathroom, leading upward—connecting the ground floor to another level (e.g., upper floor or basement).

### 5. **Open Space (Bottom Right)**
- A large, unpartitioned area (possibly a garage or unfinished room) adjacent to the main house, extending from the lower-middle section.

### Key Relationships
- **Functional Zones**: Dining, living, sleeping, and hygiene areas are segregated but interconnected via hallways.
- **Spatial Proximity**: The bedroom bridges the two living rooms; the bathroom serves all main areas.
- **Adjacency**: Objects within each room (e.g., sofa + coffee table) are purposefully arranged for use, while rooms relate to one another through doorways and hallways.

This structure highlights how objects and spaces interact to form a cohesive living environment, balancing privacy, functionality, and flow.`,
        powerOutput: `To analyze the object relationships, depths, angles, and potential movements in the room, we'll break down the floor plan into key zones and elements:

### **1. Object Relationships**
We identify core furniture and their spatial connections:

- **Top-Left Dining Area**:
  - *Dining Table 1* (rectangular) is centered, with chairs positioned symmetrically:
    - *Chair A*: 2 ft left of Dining Table 1
    - *Chair B*: 2 ft right of Dining Table 1
    - *Chair C*: 2 ft north (above) Dining Table 1
    - *Chair D*: 2 ft south (below) Dining Table 1

- **Lower-Left Conference Area**:
  - *Conference Table 1* (long rectangular) has chairs aligned along its length:
    - *Chair E*: 1 ft north of Conference Table 1 (along the long edge)
    - *Chair F*: 1 ft south of Conference Table 1

- **Middle-Left Living Room**:
  - *Sofa 1* faces *Coffee Table 1* (round):
    - Sofa 1 is 3 ft north of Coffee Table 1

- **Middle-Right Bedroom**:
  - *Bed 1* (double/queen) is against the west wall, flanked by nightstands:
    - *Nightstand 1*: 1 ft west of Bed 1
    - *Nightstand 2*: 1 ft east of Bed 1

- **Top-Right Sitting Area**:
  - *Circular Table 1* (centerpiece) is surrounded by sofas:
    - *Sofa 2*: 2 ft north of Circular Table 1
    - *Sofa 3*: 2 ft south of Circular Table 1
    - *Sofa 4*: 2 ft east of Circular Table 1
    - *Sofa 5*: 2 ft west of Circular Table 1

- **Bottom-Middle Bathroom**:
  - *Toilet* is against the south wall; *Sink* is 2 ft north of the Toilet; *Shower* is 1 ft east of the Sink.

### **2. Depths**
The floor plan uses a top-down perspective, with "depth" indicating distance from the viewer (assuming the bottom of the plan is "deeper" into the space):
- **Shallow Zones**: Top-left dining area and top-right sitting area (closer to the viewer).
- **Medium Depth**: Middle-left living room and middle-right bedroom (central layers).
- **Deep Zones**: Lower-left conference area, bathroom, and stairs (furthest from the viewer).

### **3. Angles**
All walls and furniture are aligned with **90° angles** (typical of rectangular rooms). The only exception is the staircase, which may have a slight incline but maintains straight-line geometry in the plan.

### **4. Potential Movements**
Movement is constrained by walls and doorways, creating linear pathways:
- **Entry Point**: The large open area on the right likely serves as the main entrance.
- **Path 1**: Enter → Top-right sitting area → Corridor to middle-right bedroom → Corridor to middle-left living room → Lower-left conference area → Bathroom/stairs.
- **Path 2**: Direct access to the top-left dining area from the entry (if a doorway exists).

Movements are efficient within zones but require traversing corridors between rooms. No obstacles block primary paths, but tight spaces (e.g., bathroom) limit maneuverability.

This analysis clarifies how objects are positioned relative to one another, their spatial hierarchy (depth), geometric constraints (angles), and how people would navigate the space.`,
        outputType: "markdown"
    }
];
