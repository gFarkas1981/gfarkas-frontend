import { Component, OnInit } from '@angular/core';
import {Graph} from '../../models/graph.model';
import {Node} from '../../models/node.model';
import {DijkstraService} from '../../service/dijkstra.service';

@Component({
  selector: 'app-dijkstra-algoritm',
  templateUrl: './dijkstra-algoritm.component.html',
  styleUrls: ['./dijkstra-algoritm.component.css']
})
export class DijkstraAlgoritmComponent implements OnInit {

  graph1 = new Graph();
  graph2 = new Graph();
  graphNodes1 : Node[] = [];
  node1;

  constructor(private dijkstraService : DijkstraService) { }

  ngOnInit() {
    this.algorithm();
  }

  algorithm() {

    this.node1 = new Node("Budapest");
    let node2 = new Node("Salgótarján");
    let node3 = new Node("Eger");
    let node4 = new Node("Miskolc");
    let node5 = new Node("Nyíregyháza");
    let node6 = new Node("Debrecen");
    let node7 = new Node("Szolnok");
    let node8 = new Node("Kecskemét");
    let node9 = new Node("Békéscsaba");
    let node10 = new Node("Szeged");
    let node11 = new Node("Tatabánya");
    let node12 = new Node("Székesfehérvár");
    let node13 = new Node("Dunaújváros");
    let node14 = new Node("Szekszárd");
    let node15 = new Node("Pécs");
    let node16 = new Node("Kaposvár");
    let node17 = new Node("Veszprém");
    let node18 = new Node("Győr");
    let node19 = new Node("Sopron");
    let node20 = new Node("Szombathely");
    let node21 = new Node("Zalaegerszeg");


    let nodeG2_1 = new Node("Budapest");
    let nodeG2_2 = new Node("Salgótarján");
    let nodeG2_3 = new Node("Eger");
    let nodeG2_4 = new Node("Miskolc");
    let nodeG2_5 = new Node("Nyíregyháza");
    let nodeG2_6 = new Node("Debrecen");
    let nodeG2_7 = new Node("Szolnok");
    let nodeG2_8 = new Node("Kecskemét");
    let nodeG2_9 = new Node("Békéscsaba");
    let nodeG2_10 = new Node("Szeged");
    let nodeG2_11 = new Node("Tatabánya");
    let nodeG2_12 = new Node("Székesfehérvár");
    let nodeG2_13 = new Node("Dunaújváros");
    let nodeG2_14 = new Node("Szekszárd");
    let nodeG2_15 = new Node("Pécs");
    let nodeG2_16 = new Node("Kaposvár");
    let nodeG2_17 = new Node("Veszprém");
    let nodeG2_18 = new Node("Győr");
    let nodeG2_19 = new Node("Sopron");
    let nodeG2_20 = new Node("Szombathely");
    let nodeG2_21 = new Node("Zalaegerszeg");

    this.node1.addDestination(node2, 86);
    nodeG2_2.addDestination(nodeG2_1, 86);
    this.node1.addDestination(node3, 105);
    nodeG2_3.addDestination(nodeG2_1, 105);
    this.node1.addDestination(node5, 140);
    nodeG2_5.addDestination(nodeG2_1, 140);
    this.node1.addDestination(node6, 145);
    nodeG2_6.addDestination(nodeG2_1, 145);
    this.node1.addDestination(node7, 97);
    nodeG2_7.addDestination(nodeG2_1, 97);
    this.node1.addDestination(node8, 68);
    nodeG2_8.addDestination(nodeG2_1, 68);
    this.node1.addDestination(node13, 58);
    nodeG2_13.addDestination(nodeG2_1, 58);
    this.node1.addDestination(node12, 48);
    nodeG2_12.addDestination(nodeG2_1, 48);
    this.node1.addDestination(node11, 48);
    nodeG2_11.addDestination(nodeG2_1, 43);

    node2.addDestination(node3, 68);
    nodeG2_3.addDestination(nodeG2_2, 68);
    node2.addDestination(node4, 118);
    nodeG2_4.addDestination(nodeG2_2, 118);

    node3.addDestination(node4, 69);
    nodeG2_4.addDestination(nodeG2_3, 69);
    node3.addDestination(node6, 95);
    nodeG2_6.addDestination(nodeG2_3, 95);
    node3.addDestination(node7, 112);
    nodeG2_7.addDestination(nodeG2_3, 112);

    node4.addDestination(node5, 76);
    nodeG2_5.addDestination(nodeG2_4, 76);

    node5.addDestination(node6, 53);
    nodeG2_6.addDestination(nodeG2_5, 53);

    node6.addDestination(node9, 117);
    nodeG2_9.addDestination(nodeG2_6, 117);

    node7.addDestination(node9, 87);
    nodeG2_9.addDestination(nodeG2_7, 87);
    node7.addDestination(node8, 61);
    nodeG2_8.addDestination(nodeG2_7, 61);

    node8.addDestination(node9, 90);
    nodeG2_9.addDestination(nodeG2_8, 90);
    node8.addDestination(node10, 61);
    nodeG2_10.addDestination(nodeG2_8, 61);
    node8.addDestination(node14, 93);
    nodeG2_14.addDestination(nodeG2_8, 93);
    node8.addDestination(node13, 73);
    nodeG2_13.addDestination(nodeG2_8, 73);

    node9.addDestination(node10, 86);
    nodeG2_10.addDestination(nodeG2_9, 86);

    node10.addDestination(node13, 115);
    nodeG2_13.addDestination(nodeG2_10, 115);
    node10.addDestination(node15, 123);
    nodeG2_15.addDestination(nodeG2_10, 123);

    node11.addDestination(node12, 57);
    nodeG2_12.addDestination(nodeG2_11, 57);
    node11.addDestination(node18, 45);
    nodeG2_18.addDestination(nodeG2_11, 45);

    node12.addDestination(node13, 52);
    nodeG2_13.addDestination(nodeG2_12, 52);
    node12.addDestination(node14, 83);
    nodeG2_14.addDestination(nodeG2_12, 83);
    node12.addDestination(node15, 125);
    nodeG2_15.addDestination(nodeG2_12, 125);
    node12.addDestination(node16, 92);
    nodeG2_16.addDestination(nodeG2_12, 92);
    node12.addDestination(node17, 45);
    nodeG2_17.addDestination(nodeG2_12, 45);

    node13.addDestination(node14, 52);
    nodeG2_14.addDestination(nodeG2_13, 52);

    node14.addDestination(node15, 55);
    nodeG2_15.addDestination(nodeG2_14, 55);

    node15.addDestination(node16, 70);
    nodeG2_16.addDestination(nodeG2_15, 70);
    node15.addDestination(node17, 143);
    nodeG2_17.addDestination(nodeG2_15, 143);

    node16.addDestination(node21, 110);
    nodeG2_21.addDestination(nodeG2_16, 110);

    node17.addDestination(node18, 87);
    nodeG2_18.addDestination(nodeG2_17, 87);
    node17.addDestination(node20, 89);
    nodeG2_20.addDestination(nodeG2_17, 89);
    node17.addDestination(node21, 94);
    nodeG2_21.addDestination(nodeG2_17, 94);

    node18.addDestination(node19, 88);
    nodeG2_19.addDestination(nodeG2_18, 88);
    node18.addDestination(node20, 71);
    nodeG2_20.addDestination(nodeG2_18, 71);

    node19.addDestination(node20, 70);
    nodeG2_20.addDestination(nodeG2_19, 70);

    node20.addDestination(node21, 56);
    nodeG2_21.addDestination(nodeG2_20, 56);


    this.graph1.addNode(this.node1);
    this.graph1.addNode(node2);
    this.graph1.addNode(node3);
    this.graph1.addNode(node4);
    this.graph1.addNode(node5);
    this.graph1.addNode(node6);
    this.graph1.addNode(node7);
    this.graph1.addNode(node8);
    this.graph1.addNode(node9);
    this.graph1.addNode(node10);
    this.graph1.addNode(node11);
    this.graph1.addNode(node12);
    this.graph1.addNode(node13);
    this.graph1.addNode(node14);
    this.graph1.addNode(node15);
    this.graph1.addNode(node16);
    this.graph1.addNode(node17);
    this.graph1.addNode(node18);
    this.graph1.addNode(node19);
    this.graph1.addNode(node20);
    this.graph1.addNode(node21);

    this.graph1.addNode(nodeG2_1);
    this.graph1.addNode(nodeG2_2);
    this.graph1.addNode(nodeG2_3);
    this.graph1.addNode(nodeG2_4);
    this.graph1.addNode(nodeG2_5);
    this.graph1.addNode(nodeG2_6);
    this.graph1.addNode(nodeG2_7);
    this.graph1.addNode(nodeG2_8);
    this.graph1.addNode(nodeG2_9);
    this.graph1.addNode(nodeG2_10);
    this.graph1.addNode(nodeG2_11);
    this.graph1.addNode(nodeG2_12);
    this.graph1.addNode(nodeG2_13);
    this.graph1.addNode(nodeG2_14);
    this.graph1.addNode(nodeG2_15);
    this.graph1.addNode(nodeG2_16);
    this.graph1.addNode(nodeG2_17);
    this.graph1.addNode(nodeG2_18);
    this.graph1.addNode(nodeG2_19);
    this.graph1.addNode(nodeG2_20);
    this.graph1.addNode(nodeG2_21);




    this.graph1 = this.dijkstraService.calculateShortestPathFromSource(this.graph1, this.node1);
    this.graph2 = this.dijkstraService.calculateShortestPathFromSource(this.graph2, nodeG2_1);

    for (let nodeG1 of this.graph1.nodes) {

      for (let nodeG2 of this.graph2.nodes) {

        if (nodeG1.name === nodeG2.name && nodeG1.distance > nodeG2.distance && nodeG2.distance > 0) {

          nodeG1.distance = nodeG2.distance;
          nodeG1.predecessor = nodeG2.predecessor;

        }

      }

      this.graphNodes1.push(nodeG1);

    }

  }

  timeConvert(n) {


    let text = '';
    let h = '';
    let m = '';
    let minutes = 0;

    if (n > 59) {

      let hours = (n / 60);
      let realHours = Math.floor(hours);
      minutes = n - (realHours * 60);

      if (realHours === 1) {

        h = '1 hour ';

      } else if (realHours > 1) {

        h = realHours + ' hours ';

      }

    }

    if (minutes != 0) {

      if (minutes > 1) {

        m = minutes + ' minutes ';

      } else {

        m = minutes + ' minute ';

      }

    }

    text = h + m;

    return text;
  }

}
