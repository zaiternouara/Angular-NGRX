import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as employeeActions from "../state/employee.actions";
import * as fromEmployee from "../state/employee.reducer";
import { Employee } from "../employee.model";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  EmployeeForm: FormGroup;


  constructor(
     private fb: FormBuilder,
    private store: Store<fromEmployee.AppState>) { }

    ngOnInit() {
      this.EmployeeForm = this.fb.group({
        name: ["", Validators.required],
        prenom: ["", Validators.required],
        genre: ["", Validators.required],
        adressMail: ["", Validators.required],
        id: null
      })

      const employee$: Observable<Employee> = this.store.select(
        fromEmployee.getCurrentEmployee
      )

      employee$.subscribe(currentEmployee => {
        if (currentEmployee) {
          this.EmployeeForm.patchValue({
            nom: currentEmployee.nom,
            prenom: currentEmployee.prenom,
            genre: currentEmployee.genre,
            adressMail: currentEmployee.adressMail,
            id: currentEmployee.id
          });
        }
      })
    }

    updateEmployee() {
      const updatedEmployee: Employee = {
        nom: this.EmployeeForm.get("nom").value,
        prenom: this.EmployeeForm.get("prenom").value,
        genre: this.EmployeeForm.get("genre").value,
        adressMail: this.EmployeeForm.get("adressMail").value,
        id: this.EmployeeForm.get("id").value
      };

      this.store.dispatch(new employeeActions.UpdateEmployee(updatedEmployee))
    }

}
