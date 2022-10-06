import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  UntypedFormArray,
  Validators,
} from '@angular/forms';

/**
 * @title Stepper vertical
 */
@Component({
  selector: 'stepper-vertical-example',
  templateUrl: 'stepper-vertical-example.html',
  styleUrls: ['stepper-vertical-example.css'],
})
export class StepperVerticalExample implements OnInit, AfterViewInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  stepperFormArray: UntypedFormArray = new UntypedFormArray([]);

  entitiesCollection: any = [
    {
      entity: 'Tranglo Sdn Bhd',
      department: 'Finance',
      role: 'Admin',
    },
    {
      entity: 'Tranglo Private Limited',
      department: 'Finance',
      role: 'Admin',
    },
    {
      entity: 'xxx Sdn Bhd',
      department: 'Compliance',
      role: 'Finance',
    },
  ];

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.stepperFormArray = new UntypedFormArray([]);

    this.stepperFormArray.push(this.firstFormGroup);
    this.stepperFormArray.push(this.secondFormGroup);
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.stepperFormArray.push(this.firstFormGroup);
    this.stepperFormArray.push(this.secondFormGroup);
  }
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
