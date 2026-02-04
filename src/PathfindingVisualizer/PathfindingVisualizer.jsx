import React, {Component} from 'react';
import Node from './Node/Node';
import {dijkstra, getNodesInShortestPathOrder} from '../algorithms/dijkstra';
import './PathfindingVisualizer.css';

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

export default class PathfindingVisualizer extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      mouseIsPressed: false,
    };
  }

  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({grid});
  }

  handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({grid: newGrid, mouseIsPressed: true});
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({grid: newGrid});
  }

  handleMouseUp() {
    this.setState({mouseIsPressed: false});
  }

  animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-visited';
      }, 10 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-shortest-path';
      }, 50 * i);
    }
  }

  visualizeDijkstra() {
    const {grid} = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  clearBoard() {
    const grid = getInitialGrid();
    this.setState({grid});
    
    // Clear all node animations
    const allNodes = document.querySelectorAll('.node');
    allNodes.forEach(node => {
      if (!node.classList.contains('node-start') && 
          !node.classList.contains('node-finish') &&
          !node.classList.contains('node-wall')) {
        node.className = 'node';
      }
    });
  }

  clearPath() {
    // Only clear visited and shortest path nodes, keep walls
    const allNodes = document.querySelectorAll('.node');
    allNodes.forEach(node => {
      if (node.classList.contains('node-visited') || 
          node.classList.contains('node-shortest-path')) {
        const id = node.id;
        const [, row, col] = id.split('-');
        const gridNode = this.state.grid[row][col];
        
        let className = 'node';
        if (gridNode.isStart) className += ' node-start';
        if (gridNode.isFinish) className += ' node-finish';
        if (gridNode.isWall) className += ' node-wall';
        
        node.className = className;
      }
    });
  }

  render() {
    const {grid, mouseIsPressed} = this.state;

    return (
      <>
        <nav className="navbar">
          <div className="navbar-brand">
            <h1>Pathfinding Visualizer</h1>
          </div>
          <div className="navbar-controls">
            <button 
              className="btn btn-primary" 
              onClick={() => this.visualizeDijkstra()}>
              Visualize Dijkstra's Algorithm
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => this.clearPath()}>
              Clear Path
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => this.clearBoard()}>
              Clear Board
            </button>
          </div>
        </nav>
        
        <div className="instructions">
          <div className="legend">
            <div className="legend-item">
              <div className="legend-node node-start"></div>
              <span>Start Node</span>
            </div>
            <div className="legend-item">
              <div className="legend-node node-finish"></div>
              <span>Target Node</span>
            </div>
            <div className="legend-item">
              <div className="legend-node node-wall"></div>
              <span>Wall Node</span>
            </div>
            <div className="legend-item">
              <div className="legend-node node-visited"></div>
              <span>Visited Node</span>
            </div>
            <div className="legend-item">
              <div className="legend-node node-shortest-path"></div>
              <span>Shortest Path</span>
            </div>
          </div>
          <p className="hint">Click and drag to create walls!</p>
        </div>

        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const {row, col, isFinish, isStart, isWall} = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
                      row={row}></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0; col < 50; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  
  // Don't allow toggling walls on start or finish nodes
  if (node.isStart || node.isFinish) {
    return newGrid;
  }
  
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};
