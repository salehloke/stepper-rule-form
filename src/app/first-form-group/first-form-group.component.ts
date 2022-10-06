import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-first-form-group',
  templateUrl: './first-form-group.component.html',
  styleUrls: ['./first-form-group.component.css']
})
export class FirstFormGroupComponent implements OnInit {
@Input() firstFormGroup: FormGroup
  constructor() { }

  ngOnInit() {
  }

}