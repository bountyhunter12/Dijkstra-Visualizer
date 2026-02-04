# Pathfinding Visualizer

A React-based interactive pathfinding algorithm visualizer that demonstrates Dijkstra's algorithm in action.

## Features

- **Interactive Grid**: Click and drag to create walls
- **Dijkstra's Algorithm Visualization**: Watch the algorithm explore nodes in real-time
- **Shortest Path Display**: See the optimal path highlighted after the algorithm completes
- **Clear Functions**: Reset the board or just clear the path while keeping walls

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Extract the zip file
2. Navigate to the project directory:
   ```bash
   cd pathfinding-visualizer
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

## Future Enhancements

Potential additions to the project:
- More algorithms (A*, BFS, DFS, Greedy Best-First Search)
- Weighted nodes
- Maze generation algorithms
- Adjustable animation speed
- Drag-and-drop for start/finish nodes
- Mobile-responsive design improvements

## Technologies Used

- React 18
- CSS3 with animations
- JavaScript ES6+

## License

This project is open source and available for educational purposes.

## Acknowledgments

Inspired by pathfinding visualizers and algorithm education tools.
