import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dijkstra',
  templateUrl: './dijkstra.component.html',
  styleUrls: ['./dijkstra.component.css']
})
export class DijkstraComponent {

  form: FormGroup;

  intMax = 2147483647;
  path = new Map([['A', 0], ['B', this.intMax], ['C', this.intMax], ['D', this.intMax], ['E', this.intMax], ['F', this.intMax]]);
  elements = ['A', 'B', 'C', 'D', 'E', 'F'];
  unsettledArray1 = [];
  unsettledArray2 = [];
  settledArray1 = [];
  settledArray2 = [];
  evaluationNode = "A";
  evaluationNode1: string;
  evaluationNode2: string;

  dijkstra;
  distances: string[] = [];



  constructor(private formBuilder: FormBuilder) {

    this.dijkstra ={
      'atob': '∞',
      'atoc':'∞',
      'atod':'∞',
      'atoe':'∞',
      'atof':'∞',
      'btoc':'∞',
      'btod':'∞',
      'btoe':'∞',
      'btof':'∞',
      'ctod':'∞',
      'ctoe':'∞',
      'ctof':'∞',
      'dtoe':'∞',
      'dtof':'∞',
      'etof':'∞',
      'pathDistance1': 0,
      'pathDistance2': 0,
      'pathDistance3': 0,
      'pathDistance4': 0,
      'pathDistance5': 0,
      'pathDistance6': 0,
      'pathDistance7': 0
    };


  }


  ngOnInit() {

    this.form = this.formBuilder.group({
      ab: '∞', ac: '∞', ad: '∞', ae: '∞', af: '∞',
      bc: '∞', bd: '∞', be: '∞', bf: '∞',
      cd: '∞', ce: '∞', cf: '∞',
      de: '∞', df: '∞',
      ef: '∞'
    });


    this.onValueChanges();

  }

  onValueChanges(): void {

    this.form.valueChanges.subscribe(val => {

      this.distances = [
        val['ab'], val['ac'], val['ad'], val['ae'], val['af'],
        val['bc'], val['bd'], val['be'], val['bf'],
        val['cd'], val['ce'], val['cf'],
        val['de'], val['df'],
        val['ef']
      ];

      var counter = 0;

      for (let [key, value] of Object.entries(this.dijkstra)) {

        if (this.distances[counter] === '∞' || this.distances[counter] === '' || this.distances[counter] === ' ') {

          this.dijkstra[key] = '∞';

        } else {

          this.dijkstra[key] = this.distances[counter];

        }

        counter++;

      }


      this.unsettledArray1.length = 0;
      this.unsettledArray2.length = 0;



      var smallest = {key: 0, value: this.intMax};


      for (let i = 0; i < 5; i++) {

        if (this.distances[i] !== '∞') {

          this.unsettledArray1[i] = this.elements[i + 1];

          if (Number(this.distances[i]) < smallest['value']) {

            smallest['key'] = i;
            smallest['value'] = Number(this.distances[i]);

          }

        }

      }

      this.evaluationNode1 = this.elements[smallest['key'] + 1];
      this.settledArray1 = [];
      this.settledArray1.push(this.evaluationNode1);

      this.dijkstra.pathDistance1 = smallest['value'];

      smallest = {key: 0, value: this.intMax};


      for (let i = 5; i < 9; i++) {

        if (this.distances[i] !== '∞') {

          this.unsettledArray2[i - 5] = this.elements[i];

          if (Number(this.distances[i]) < smallest['value']) {

            smallest['key'] = i;
            smallest['value'] = Number(this.distances[i]);

          }

        }

      }

      this.evaluationNode2 = this.elements[smallest['key'] + 1];
      this.settledArray2 = [];
      this.settledArray2.push('A');
      this.settledArray2.push(this.evaluationNode1);
      this.dijkstra.pathDistance2 = smallest['value'];


    });

  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.key;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }


}

