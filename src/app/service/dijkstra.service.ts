import {Injectable} from '@angular/core';
import {Graph} from '../models/graph.model';
import {Node} from '../models/node.model';

@Injectable({providedIn: 'root'})
export class DijkstraService {

  constructor() {

  }

  calculateShortestPathFromSource(graph: Graph, source: Node) {

    var unVisitedNodes = new Set<Node>();

    source.distance = 0;
    source.predecessor = source;

    unVisitedNodes.add(source);

    while (unVisitedNodes.size != 0) {

      let currentNode = this.getLowestDistanceNode(unVisitedNodes);
      unVisitedNodes.delete(currentNode);

      for (let child of currentNode.childNodes.entries()) {

        let childNode = child[0];
        let storedDistanceOfChildNode = child[1];

          // 3. Calculate the distance for this adjacent node by summing the cost of the edges leading from the start node
          this.calculateMinimumDistance(childNode, storedDistanceOfChildNode, currentNode);
          unVisitedNodes.add(childNode);

      }

    }



    return graph;

  }

  getLowestDistanceNode(unsettledNodes: Set<Node>) {

    let lowestDistanceNode: Node = null;
    let lowestDistance = 2147483647;

    for (let unsettled of unsettledNodes) {

      let nodeDistance = unsettled.distance;

      if (nodeDistance < lowestDistance) {

        lowestDistance = nodeDistance;
        lowestDistanceNode = unsettled;

      }

    }

    return lowestDistanceNode;

  }


  // 4. If the distance to the current node is less than the known distance, update the distance of the node and the predecessor of the
  // adjacent node to the current node
  calculateMinimumDistance(adjacentNode: Node, distanceOfAdjacentNode: number, currentNode: Node) {

    let knownDistance = currentNode.distance;

    if (knownDistance + distanceOfAdjacentNode < adjacentNode.distance) {

      adjacentNode.distance = knownDistance + distanceOfAdjacentNode;
      adjacentNode.predecessor = currentNode;
      console.log(adjacentNode.predecessor);

    }

  }

}
