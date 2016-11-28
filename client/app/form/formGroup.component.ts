import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'formGroup',
    templateUrl: './formGroup.component.html'
})
export class FormGroupComponent {

    @Input() campo: AbstractControl;
}