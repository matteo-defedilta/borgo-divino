import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'uselessPipe'})
export class UselessPipe implements PipeTransform {
  transform(value: string): string {      
    let newStr = value.replace(/\s+/g,'').toLocaleLowerCase();
    return newStr;
  }
}