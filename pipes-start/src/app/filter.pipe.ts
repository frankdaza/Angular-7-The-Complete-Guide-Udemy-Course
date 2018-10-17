import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const resultArray = [];

    value.forEach(element => {
      if (element[propName] === filterString) {
        resultArray.push(element);
      }
    });

    return resultArray;
  }

}
