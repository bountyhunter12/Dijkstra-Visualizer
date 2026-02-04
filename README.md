# Pathfinding Visualizer

A React-based interactive pathfinding algorithm visualizer that demonstrates Dijkstra's algorithm in action.

## Features

- **Interactive Grid**: Click and drag to create walls
- **Dijkstra's Algorithm Visualization**: Watch the algorithm explore nodes in real-time
- **Shortest Path Display**: See the optimal path highlighted after the algorithm completes
- **Clear Functions**: Reset the board or just clear the path while keeping walls
## Dijkstra Visualizer Demo

<img width="1860" height="890" alt="Screenshot 2026-02-05 032751" src="https://github.com/user-attachments/assets/44053d21-8d94-469e-b18f-c4c94f17fea7" />

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Extract the zip file
2. Navigate to the project directory:
   ```bash
   cd Dijkstra-Visualizer
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## How to Use

1. **Create Walls**: Click and drag on the grid to create walls (dark blue nodes)
2. **Run Algorithm**: Click "Visualize Dijkstra's Algorithm" to start the visualization
3. **Clear Path**: Remove the visualization while keeping your walls
4. **Clear Board**: Reset everything to start fresh

## Legend

- 🟢 **Green Node**: Start node
- 🔴 **Red Node**: Target/Finish node
- ⬛ **Dark Blue Node**: Wall node
- 🔵 **Blue Nodes**: Visited nodes during algorithm execution
- 🟡 **Yellow Nodes**: Shortest path from start to finish

## Algorithm

This visualizer implements **Dijkstra's Algorithm**, which:
- Guarantees the shortest path
- Uses a weighted graph approach
- Explores nodes in order of their distance from the start

## Project Structure

```
pathfinding-visualizer/
├── public/
│   └── index.html
├── src/
│   ├── algorithms/
│   │   └── dijkstra.js
│   ├── PathfindingVisualizer/
│   │   ├── Node/
│   │   │   ├── Node.jsx
│   │   │   └── Node.css
│   │   ├── PathfindingVisualizer.jsx
│   │   └── PathfindingVisualizer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Technologies Used

- React 18
- CSS3 with animations
- JavaScript ES6+


