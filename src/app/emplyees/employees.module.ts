import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { EmployeeReducer } from "./state/employee.reducer";
import { EmployeeEffect } from "./state/employee.effects";
import { EffectsModule, Actions } from "@ngrx/effects";
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { SearchemployeePipe } from './all-employees/searchemployee.pipe';

const EmployeeRoutes: Routes = [
  { path:"", component :  EmployeeComponent}
 ];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(EmployeeRoutes),
    StoreModule.forFeature("employees",  EmployeeReducer),
    EffectsModule.forFeature([EmployeeEffect])
  ],
  declarations: [
    EmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    AllEmployeesComponent,
    SearchemployeePipe
  ]

})
export class EmployeesModule { }
