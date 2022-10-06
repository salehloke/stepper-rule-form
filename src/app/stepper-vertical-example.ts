import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  UntypedFormArray,
  UntypedFormGroup,
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
export class StepperVerticalExample implements OnInit {
  isLinear = false;
  mainFormGroup: UntypedFormGroup;
  firstFormGroup: UntypedFormGroup;
  secondFormGroup: UntypedFormGroup;
  thirdFormGroup: UntypedFormGroup;
  stepperFormArray: FormArray;
  currentStep = 0;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.stepperFormArray = new FormArray([
      this._formBuilder.group({
        name: ['', Validators.required],
      }),
    ]);
    this.mainFormGroup = this._formBuilder.group({
      formCount: 1,
      stepData: new FormArray([
        this._formBuilder.group({
          name: ['', Validators.required],
        }),
      ]),
    });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  addInput(currentIndex: number): void {
    const arrayControl = <FormArray>this.mainFormGroup.controls['stepData'];
    let newGroup = this._formBuilder.group({
      name: ['', Validators.required],
    });
    arrayControl.push(newGroup);
    const content = this;
    setTimeout((element: any) => {
      content.currentStep = currentIndex + 1;
    });
  }
  delInput(index: number): void {
    const arrayControl = <FormArray>this.mainFormGroup.controls['stepData'];
    arrayControl.removeAt(index);
  }

  get stepData() {
    const arrayControl = <FormArray>this.mainFormGroup.controls['stepData'];
    console.log(arrayControl);
    return arrayControl;
  }
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
