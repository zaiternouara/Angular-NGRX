import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import * as employeeActions from "../state/employee.actions";
import * as fromEmployee from "../state/employee.reducer";
import { Employee } from "../employee.model";

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

  employees$ :Observable <Employee[]>;
  error$: Observable<String>;
  search:string;

    constructor(private store: Store<fromEmployee.AppState>) { }

    ngOnInit(): void {
      this.store.dispatch(new employeeActions.LoadEmployees());
      this.employees$=this.store.pipe(select(fromEmployee.getEmployees));
       this.error$ = this.store.pipe(select(fromEmployee.getError));
    }
    deleteEmployee(employee: Employee) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet employé ?")) {
      this.store.dispatch(new employeeActions.DeleteEmployee(employee.id));
    }
  }

  editEmployee(employee: Employee) {
    this.store.dispatch(new employeeActions.LoadEmployee(employee.id));
  }

}
