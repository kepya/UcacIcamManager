import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sessionNameFormat'
})
export class SessionNameFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    // let result = value.replaceAll("Concours", "");
    // let val = result.replaceAll("Session", "");
    // return val;
    return "";
  }

}
