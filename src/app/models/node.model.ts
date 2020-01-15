export class Node {

  name: string;

  predecessor : Node = null;
  path : Array<Node> = new Array<Node>();

  distance = 2147483647;

  childNodes = new Map<Node, number>();

  constructor(name: string) {

    this.name = name;

  }

  addDestination(adjacentNode: Node, distance: number) {

    this.childNodes.set(adjacentNode, distance);

  }

}
