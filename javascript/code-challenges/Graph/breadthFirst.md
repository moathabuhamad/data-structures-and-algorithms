# Graph

## Challenge
Extend your graph object with a breadth-first traversal method that accepts a starting node.
return a collection of nodes in the order they were visited. Display the collection.

## Approach & Efficiency
I used for Classes ,for and while loops , if statment

## Big O
space(n)
time(n^2)

# Code:

    class BreadthFirst extends Graph {
    bfs(startNode) {
    const queue = [];
    const vistedNodes = new Set();

    queue.push(startNode);
    vistedNodes.add(startNode);

    while (queue.length) {
      const currentNode = queue.shift();

      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if (vistedNodes.has(neighborNode)) {
          continue;
        } else {
          vistedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }
    }

    return vistedNodes;
      }
    }




## Solution
[ Pandora , Arendelle , Metroville , Monstropolis , Narnia , Naboo ]

![](./breadthFirst.png)