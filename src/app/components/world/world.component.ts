import {Component, OnInit} from '@angular/core';
import {CountryModel} from '../../models/country.model';
import {WorldService} from '../../service/world.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

  form: FormGroup;
  formPop: FormGroup;
  country: CountryModel;
  countries: CountryModel[];
  countriesByPopulation: CountryModel[] = [];
  oneRow : boolean;

  constructor(private worldService: WorldService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      ccode: ['']
    });

    this.formPop = this.formBuilder.group({
      population1: 0,
      population2: 0
    });
  }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {

    this.worldService.getAllCountries().subscribe(
      (data: CountryModel[]) => {
        this.countries = data;
        console.log(data);

      },
    );
  }

  cCodeSubmit() {

    this.oneRow = true;

    for (var i = 0, len = this.countries.length; i < len; i++) {

      if (this.countries[i].code === this.form.get('ccode').value) {

        this.country = this.countries[i];

      }

    }

  }

  populationSubmit() {

    this.oneRow = false;

    if (this.formPop.get('population1').value <= this.formPop.get('population2').value) {

      this.countriesByPopulation = [];

      for (var i = 0, len = this.countries.length; i < len; i++) {

        if (this.countries[i].population >= this.formPop.get('population1').value &&
          this.countries[i].population <= this.formPop.get('population2').value) {

          this.countriesByPopulation.push(this.countries[i]);

        }

      }

    }

  }

}
