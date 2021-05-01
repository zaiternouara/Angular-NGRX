import {Action} from "@ngrx/store";
import { Update } from "@ngrx/entity";
import {Employee} from "../employee.model";

export enum EmployeeActionTypes{
LOAD_EMPLOYEES="[Employee] Load Employees",
 LOAD_EMPLOYEES_SUCCESS="[Employee] Load Employees Succes",
LOAD_EMPLOYEES_FAIL="[Employee] Load Employees FAIL",
LOAD_EMPLOYEE="[Employee] Load Employee",
LOAD_EMPLOYEE_SUCCESS="[Employee] Load Employee Succes",
LOAD_EMPLOYEE_FAIL="[Employee] Load Employee FAIL",
CREATE_EMPLOYEE="[Employee] Create Employee",
CREATE_EMPLOYEE_SUCCESS="[Employee] Create Employee Succes",
CREATE_EMPLOYEE_FAIL="[Employee] Create Employee FAIL",
UPDATE_EMPLOYEE="[Employee] Update Employee",
UPDATE_EMPLOYEE_SUCCESS="[Employee] Update Employee Succes",
UPDATE_EMPLOYEE_FAIL="[Employee] Update Employee FAIL",
DELETE_EMPLOYEE="[Employee] Delete Employee",
DELETE_EMPLOYEE_SUCCESS="[Employee] Delete Employee Succes",
DELETE_EMPLOYEE_FAIL="[Employee] Delete Employee FAIL",
SEARCH_EMPLOYEES= "[Employee] Search Employees",
LOAD_SEARCH_EMPLOYEES_SUCCESS= "[Employee] Load Search Employees Success",
LOAD_SEARCH_EMPLOYEES_FAIL="[Employee] Load Search Employees Fail",
}
export class  LoadEmployees implements Action {
 readonly type = EmployeeActionTypes.LOAD_EMPLOYEES;
}

export class  LoadEmployeesSuccess implements Action {
 readonly type = EmployeeActionTypes.LOAD_EMPLOYEES_SUCCESS;

 constructor(public payload: Employee[] ){}
}

export class  LoadEmployeesFail implements Action {
 readonly type = EmployeeActionTypes.LOAD_EMPLOYEES_FAIL;
 constructor(public payload: string){}
}



export class  LoadEmployee implements Action {
 readonly type = EmployeeActionTypes.LOAD_EMPLOYEE;
 constructor(public payload: number) {}
}

export class  LoadEmployeeSuccess implements Action {
 readonly type = EmployeeActionTypes.LOAD_EMPLOYEE_SUCCESS;

 constructor(public payload: Employee ){}
}

export class  LoadEmployeeFail implements Action {
 readonly type = EmployeeActionTypes.LOAD_EMPLOYEE_FAIL;
 constructor(public payload: string){}
}

export class CreateEmployee implements Action {
 readonly type = EmployeeActionTypes.CREATE_EMPLOYEE;

 constructor(public payload: Employee) {}
}

export class CreateEmployeeSuccess implements Action {
 readonly type = EmployeeActionTypes.CREATE_EMPLOYEE_SUCCESS;

 constructor(public payload: Employee) {}
}

export class CreateEmployeeFail implements Action {
 readonly type = EmployeeActionTypes.CREATE_EMPLOYEE_FAIL;

 constructor(public payload: string) {}
}



export class UpdateEmployee implements Action {
 readonly type = EmployeeActionTypes.UPDATE_EMPLOYEE;

 constructor(public payload: Employee) {}
}

export class UpdateEmployeeSuccess implements Action {
 readonly type = EmployeeActionTypes.UPDATE_EMPLOYEE_SUCCESS;

 constructor(public payload: Update<Employee>) {}
}

export class UpdateEmployeeFail implements Action {
 readonly type = EmployeeActionTypes.UPDATE_EMPLOYEE_FAIL;

 constructor(public payload: string) {}
}





export class DeleteEmployee implements Action {
 readonly type =EmployeeActionTypes.DELETE_EMPLOYEE;

 constructor(public payload: number) {}
}

export class DeleteEmployeeSuccess implements Action {
 readonly type = EmployeeActionTypes.DELETE_EMPLOYEE_SUCCESS;

 constructor(public payload: number) {}
}

export class DeleteEmployeeFail implements Action {
 readonly type = EmployeeActionTypes.DELETE_EMPLOYEE_FAIL;

 constructor(public payload: string) {}
}


export class SearchEmployees implements Action {
 readonly type =  EmployeeActionTypes.SEARCH_EMPLOYEES;
 constructor(public payload: Employee ){}

}

export class LoadSearchEmployeesSuccess implements Action {
 readonly type = EmployeeActionTypes.LOAD_SEARCH_EMPLOYEES_SUCCESS;
 constructor(public payload: Employee[]) { }
}

export class LoadSearchEmployeesFail implements Action {
 readonly type = EmployeeActionTypes.LOAD_SEARCH_EMPLOYEES_FAIL;
 constructor(public payload: string) { }
}

export type SettingsAction = LoadEmployees
 | LoadEmployeesSuccess
 | LoadEmployeesFail
 | LoadEmployee
 | LoadEmployeeSuccess
 | LoadEmployeeFail
 | CreateEmployee
 | CreateEmployeeSuccess
 | CreateEmployeeFail
 | UpdateEmployee
 | UpdateEmployeeSuccess
 | UpdateEmployeeFail
 | DeleteEmployee
 | DeleteEmployeeSuccess
 | DeleteEmployeeFail
 | SearchEmployees
 | LoadSearchEmployeesFail
 | LoadSearchEmployeesSuccess;
