import { Employee } from "../employee.model";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createFeatureSelector, createSelector } from "@ngrx/store";

import * as fromRoot from "../../state/app-state";
import * as employeeActions from "./employee.actions";

 export interface EmployeeState extends EntityState<Employee> {
   selectedEmployeeId: number | null;
   loading: boolean;
   loaded: boolean;
   error: string;
 }

 export interface AppState extends fromRoot.AppState {
  employees: EmployeeState;
}
export const employeeAdapter: EntityAdapter<Employee> = createEntityAdapter<
  Employee
>();

export const defaultEmployee: EmployeeState = {
  ids: [],
  entities: {},
  selectedEmployeeId: null,
  loading: false,
  loaded: false,
  error: ""
};

export const initialState = employeeAdapter.getInitialState(defaultEmployee);


export function EmployeeReducer(
  state = initialState,
  action: employeeActions.SettingsAction
): EmployeeState {
  switch (action.type) {

    case  employeeActions.EmployeeActionTypes.LOAD_EMPLOYEES_SUCCESS: {
      return employeeAdapter.addMany(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case  employeeActions.EmployeeActionTypes.LOAD_EMPLOYEES_FAIL: {
      return  {
        ...state,
        entities:{},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }






    case  employeeActions.EmployeeActionTypes.LOAD_EMPLOYEE_SUCCESS: {
      return employeeAdapter.addOne(action.payload, {
        ...state,
       selectedEmployeeId: action.payload.id
      });
    }
    case  employeeActions.EmployeeActionTypes.LOAD_EMPLOYEE_FAIL: {
      return  {
        ...state,

        error: action.payload
      };
    }



    case  employeeActions.EmployeeActionTypes.CREATE_EMPLOYEE_SUCCESS: {
      return employeeAdapter.addOne(action.payload,state);
    }

    case  employeeActions.EmployeeActionTypes.CREATE_EMPLOYEE_FAIL: {
      return  {
        ...state,

        error: action.payload
      };
    }



        case employeeActions.EmployeeActionTypes.UPDATE_EMPLOYEE_SUCCESS: {
          return employeeAdapter.updateOne(action.payload, state);
        }
        case employeeActions.EmployeeActionTypes.UPDATE_EMPLOYEE_FAIL: {
          return {
            ...state,
            error: action.payload
          };
        }

        case employeeActions.EmployeeActionTypes.DELETE_EMPLOYEE_SUCCESS: {
          return employeeAdapter.removeOne(action.payload, state);
        }
        case employeeActions.EmployeeActionTypes.DELETE_EMPLOYEE_FAIL: {
          return {
            ...state,
            error: action.payload
          };
        }



        /*case  employeeActions.EmployeeActionTypes.LOAD_SEARCH_EMPLOYEES_SUCCESS: {
          return employeeAdapter.addMany(action.payload, {
            ...state,
            loading: false,
            loaded: true
          });
        }
        case  employeeActions.EmployeeActionTypes.LOAD_SEARCH_EMPLOYEES_FAIL: {
          return  {
            ...state,
            entities:{},
            loading: false,
            loaded: false,
            error: action.payload
          };
        }*/

    default:{
      return state;
    }
  }
  }

  const getEmployeeFeatureState = createFeatureSelector<EmployeeState>(
    "employees"
  );

export const getEmployees = createSelector(
  getEmployeeFeatureState,
  employeeAdapter.getSelectors().selectAll
);
export const getEmployeesLoading = createSelector(
  getEmployeeFeatureState,
  (state:EmployeeState)=>state.loading
);
export const getEmployeesLoaded = createSelector(
  getEmployeeFeatureState,
  (state:EmployeeState)=>state.loaded
);
export const getError = createSelector(
  getEmployeeFeatureState,
  (state:EmployeeState)=>state.error
);
export const getCurrentEmployeeId = createSelector(
  getEmployeeFeatureState,
  (state: EmployeeState) => state.selectedEmployeeId
);
export const getCurrentEmployee = createSelector(
  getEmployeeFeatureState,
  getCurrentEmployeeId,
  state => state.entities[state.selectedEmployeeId]
);

 /*export const selectEmployeeByname = createSelector(
  getEmployees,
  (all : Employee[], props) => {
    const { name} = props;
    return all.filter((a : Employee[],) => a.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
} )*/
