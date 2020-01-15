import {Node} from './node.model';

export class Graph {

  nodes = new Set<Node>();

  addNode(node: Node) {

    this.nodes.add(node);

  }

}
