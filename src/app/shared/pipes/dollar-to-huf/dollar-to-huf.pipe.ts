import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollarToHuf',
  standalone: true
})
export class DollarToHufPipe implements PipeTransform {
  transform(dollars: number, ...args: unknown[]): string {
    if (dollars == 0 || dollars == null) { return "Nem elérhető" }
    const forints = dollars * 361.76;
    return forints.toFixed(2) + ' Ft';
  }

}
