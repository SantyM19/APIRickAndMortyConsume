import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultC = [];
    if(arg != null || arg != "" ){
      for(const char of value){
        if(char.name.indexOf(arg) > -1){
           resultC.push(char);
        };
      };
    }
    return resultC;

}
}
