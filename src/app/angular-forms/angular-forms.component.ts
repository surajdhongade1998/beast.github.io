import { Component, OnInit } from '@angular/core';
import {User} from '../user'

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.css']
})
export class AngularFormsComponent implements OnInit {
  topics=['Angular', 'Nodejs' , 'React']
  constructor() { }

  ngOnInit(): void {
  }
 userModel = new User ('SURAJ', 'dhongade1998@gmail.com', 7738613689,'','morning',true);
}
