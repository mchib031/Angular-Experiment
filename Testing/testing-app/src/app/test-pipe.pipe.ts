import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // change name to pipe used in HTML Template
  name: 'formalText'
})
export class TestPipePipe implements PipeTransform {
  // implement the transform interface
  transform(value: string, ...args: unknown[]): string {
    if (value.includes('wassup')){
      value = value.replace('wassup','How are you today?')
    }
    return value;
  }

}
