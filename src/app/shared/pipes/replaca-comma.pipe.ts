import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceComma'
})

export class ReplaceComma implements PipeTransform {
  transform(value:any): string {
    if( !!value){
      return value.replace(/,/g, '.' );
    }
    else{
      return '';
    }
  }
}
/* !!value pour dire: si la valeu n'est ni indifine ni Null*/
