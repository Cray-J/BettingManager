import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appKeys' })
export class KeysPipe implements PipeTransform {
  public transform(value,
                   args: string[]): any {
    const keys = [];
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        console.log('key: ' + key + ',  value: ' + value + ', valKey:' + value[key]);
        keys.push({ key, value: value[key] });
      }
    }

    return keys;
  }
}
