import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(rawValue: number): string {
    let formattedValue = '';

    if (rawValue) {
      const value = rawValue.toString().replace(/\D/g, '');     

      if (value.length > 12) {
        formattedValue = value.replace(/(\d{2})?(\d{2})?(\d{5})?(\d{4})/, '+$1 ($2) $3-$4');

      } else if (value.length > 11) {
        formattedValue = value.replace(/(\d{2})?(\d{2})?(\d{4})?(\d{4})/, '+$1 ($2) $3-$4');

      } else if (value.length > 10) {
        formattedValue = value.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');

      } else if (value.length > 9) {
        formattedValue = value.replace(/(\d{2})?(\d{4})?(\d{4})/, '($1) $2-$3');

      } else if (value.length > 5) {
        formattedValue = value.replace(/^(\d{2})?(\d{4})?(\d{0,4})/, '($1) $2-$3');

      } else if (value.length > 1) {
        formattedValue = value.replace(/^(\d{2})?(\d{0,5})/, '($1) $2');
      } else {
        if (value !== '') { formattedValue = value.replace(/^(\d*)/, '($1'); }
      }      
    }
    return formattedValue;
  }
}
