import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-places-visit',
  templateUrl: './places-visit.component.html',
  styleUrls: ['./places-visit.component.css']
})
export class PlacesVisitComponent implements OnInit {

  addPlaceform!: FormGroup;
  private placeDetails :any;
  validPattern = "^[a-zA-Z0-9]{10}$";
  submitted = false;
  show = false;
  placeData: any = [{}];

 


  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.addPlaceform = this.formBuilder.group({
      yourname: ['', [Validators.required, Validators.pattern(this.validPattern)]],
      city: ['', [Validators.required]],
      pinCode: ['', [Validators.required]],
      ratings: ['', [Validators.required]],
    });
  }

  get placeFormControl() { return this.addPlaceform.controls; }


  submit() {
    this.submitted = true;
    if (this.addPlaceform.valid) {

    } else {
      return
    }
  }

  showForm() {
    this.show = true;
  }
}
