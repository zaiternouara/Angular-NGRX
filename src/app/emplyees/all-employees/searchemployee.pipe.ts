import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from "../employee.model";
@Pipe({
  name: 'searchemployee'
})
export class SearchemployeePipe implements PipeTransform {

  transform(employees: Employee[], search: string): Employee[] {
    if(!employees|| !search ) {
      return  employees;
    }
    return employees.filter(employee => employee.nom.toLocaleLowerCase().includes(search.toLocaleLowerCase()))   ;
  }
  }
