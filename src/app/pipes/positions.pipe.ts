import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positions'
})
export class PositionsPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): string | null {

    if (!value || value.length <= 0) {
      return null;
    }

    return value.join(" / ");
  }

}
