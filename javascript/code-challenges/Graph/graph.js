"use strict";

const Edge = require("./edge");

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  addNode(node) {
    this.adjacencyList.set(node, []);
    return node;
  }
  addEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      console.error("One or both of the nodes does not exist");
      return;
    }
    const adjecencies = this.getNeighbors(start);
    adjecencies.push(new Edge(end, weight));
  }

  getNeighbors(node) {
    if (!this.adjacencyList.has(node)) return null;
    return this.adjacencyList.get(node);
  }

  getNodes() {
    return Array.from(this.adjacencyList.keys());
  }

  size() {
    if (!this.adjacencyList.size) {
      return 0;
    }
    return this.adjacencyList.size;
  }
  bft(root) {
    if (!root) return null;
    let queue = [];
    let visited = new Set();

    queue.push(root);
    visited.add(root);

    let result = [root];
    while (queue.length) {
      const current = queue.shift();
      const neighbors = this.getNeighbors(current);
      for (let neighbor of neighbors) {
        const neighborN = neighbor.vertex;
        if (visited.has(neighborN)) {
          continue;
        } else {
          result.push(neighborN);
          visited.add(neighborN);
        }
        queue.push(neighborN);
      }
    }
    return result;
  }

  dfs(root) {
    if (!root) return null;
    let stack = [];
    let visited = new Set();

    stack.push(root);
    visited.add(root);

    let result = [root];
    while (stack.length) {
      const current = stack.pop();
      const neighbors = this.getNeighbors(current);
      for (let neighbor of neighbors) {
        const neighborN = neighbor.vertex;
        if (visited.has(neighborN)) {
          continue;
        } else {
          result.push(neighborN);
          visited.add(neighborN);
        }
        stack.push(neighborN);
      }
    }
    return result;
  }
}

function businessTrip(graph, path) {
  let cost = 0;
  for (let i = 0; i < path.length - 1; i++) {
    let start = path[i];
    let end = path[i + 1];
    let edge = graph.getNeighbors(start).find((edge) => edge.vertex === end);
    if (!edge) return -1;
    cost += edge.weight;
  }
  return cost;
}

let graph = new Graph();
graph.addNode("Las Vegas");
graph.addNode("Denver");
graph.addNode("Phoenix");
graph.addNode("Dallas");
graph.addNode("Seattle");
graph.addEdge("Las Vegas", "Denver", 100);
graph.addEdge("Las Vegas", "Phoenix", 50);
graph.addEdge("Las Vegas", "Dallas", 250);
graph.addEdge("Denver", "Phoenix", 110);
graph.addEdge("Denver", "Dallas", 190);
graph.addEdge("Dallas", "Phoenix", 80);
graph.addEdge("Dallas", "Seattle", 300);
graph.addEdge("Phoenix", "Seattle", 120);

module.exports = { Graph, businessTrip };
