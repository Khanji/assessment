import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  /**
   * transform the given string so that the first letter of the string is capitalized.
   * @param value
   * @param args
   * @returns {any}
   */
  transform(value: any, args?: any): any {
    if (value) {
      value = value.toLowerCase();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return null;
  }

}
