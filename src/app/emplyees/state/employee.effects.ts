import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { filter } from 'rxjs/operators';
import { EmployeeService } from "../employee.service";
import * as employeeActions from "../state/employee.actions";
import {Employee } from "../employee.model";
@Injectable()
export class EmployeeEffect {
  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService
  ) {}

  @Effect()
  LoadEmployees$: Observable<Action> = this.actions$.pipe(
    ofType<employeeActions.LoadEmployees>(
      employeeActions.EmployeeActionTypes.LOAD_EMPLOYEES
    ),
    mergeMap((actions: employeeActions.LoadEmployees) =>
      this.employeeService.getEmployees().pipe(
        map(
          (employees: Employee[]) =>
            new employeeActions.LoadEmployeesSuccess(employees)
        ),
        catchError(err => of(new employeeActions.LoadEmployeesFail(err)))
      )
    )
  );



  @Effect()
  loadEmployee$: Observable<Action> = this.actions$.pipe(
    ofType<employeeActions.LoadEmployee>(
      employeeActions.EmployeeActionTypes.LOAD_EMPLOYEE
    ),
    mergeMap((action: employeeActions.LoadEmployee) =>
      this.employeeService.getEmployeeById(action.payload).pipe(
        map(
          (employee: Employee) =>
            new employeeActions.LoadEmployeeSuccess(employee)
        ),
        catchError(err => of(new employeeActions.LoadEmployeeFail(err)))
      )
    )
  );

  @Effect()
  createEmployee$: Observable<Action> = this.actions$.pipe(
    ofType<employeeActions.CreateEmployee>(
      employeeActions.EmployeeActionTypes.CREATE_EMPLOYEE
    ),
    map((action: employeeActions.CreateEmployee) => action.payload),
    mergeMap((employee:Employee) =>
      this.employeeService.createEmployee(employee).pipe(
        map(
          (newEmployee: Employee) =>
            new employeeActions.CreateEmployeeSuccess(newEmployee)
        ),
        catchError(err => of(new employeeActions.CreateEmployeeFail(err)))
      )
    )
  );

  @Effect()
  updateEmployee$: Observable<Action> = this.actions$.pipe(
    ofType<employeeActions.UpdateEmployee>(
      employeeActions.EmployeeActionTypes.UPDATE_EMPLOYEE
    ),
    map((action: employeeActions.UpdateEmployee) => action.payload),
    mergeMap((employee: Employee) =>
      this.employeeService.updateEmployee(employee).pipe(
        map(
          (updateEmployee: Employee) =>
            new employeeActions.UpdateEmployeeSuccess({
              id: updateEmployee.id,
              changes: updateEmployee
            })
        ),
        catchError(err => of(new employeeActions.UpdateEmployeeFail(err)))
      )
    )
  );

  @Effect()
  deleteEmployee$: Observable<Action> = this.actions$.pipe(
    ofType<employeeActions.DeleteEmployee>(
      employeeActions.EmployeeActionTypes.DELETE_EMPLOYEE
    ),
    map((action: employeeActions.DeleteEmployee) => action.payload),
    mergeMap((id: number) =>
      this.employeeService.deleteEmployee(id).pipe(
        map(() => new employeeActions.DeleteEmployeeSuccess(id)),
        catchError(err => of(new employeeActions.DeleteEmployeeFail(err)))
      )
    )
  );



   /*@Effect()
    searchEmployee$: Observable<Action>  = this.actions$.pipe(
        ofType<employeeActions.SearchEmployees>(

        employeeActions.EmployeeActionTypes.SEARCH_EMPLOYEES
    ) ,map((action: employeeActions.SearchEmployees) => action.payload)
    , mergeMap((name: string) =>
      this.employeeService.selectBookByname(name).pipe(
        map(
          (employees: Employee[]) =>
            new employeeActions.LoadSearchEmployeesSuccess(employees)
        ),
        catchError(err => of(new employeeActions.LoadSearchEmployeesFail(err)))
      )
    ));*/




  /*@Effect()
  load$ = this.actions$
    .ofType(employeeActions.LoadEmployees)
      .pipe(
        mergeMap(() => {
          return this.employeeService.getContentsFromApi()
            .pipe(
              map((employees: Employee[]) => {
                return new new employeeActions.LoadSearchEmployeesSuccess(employees);
              }),
              catchError(() => {
                // do something
              })
            );
        })
    )
  ;*/

}
