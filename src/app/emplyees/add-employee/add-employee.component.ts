import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, State, select } from "@ngrx/store";
import * as employeeActions from "../state/employee.actions";
import * as fromEmployee from "../state/employee.reducer";
import { Employee } from "../employee.model";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


    employeeForm!: FormGroup;


    constructor(
       private fb: FormBuilder,
      private store: Store<fromEmployee.AppState>) { }

      ngOnInit() {
         this.employeeForm = this.fb.group({
           nom: ["", Validators.required],
           prenom: ["", Validators.required],
           genre: ["", Validators.required],
           adressMail: ["", Validators.required]
         });

       }

       createEmployee() {
     const newEmployee: Employee = {
       nom: this.employeeForm.get("nom").value,
       prenom: this.employeeForm.get("prenom").value,
       genre: this.employeeForm.get("genre").value,
       adressMail: this.employeeForm.get("adressMail").value
     };

       this.store.dispatch(new employeeActions.CreateEmployee(newEmployee));
       this.employeeForm.reset();


}
}
