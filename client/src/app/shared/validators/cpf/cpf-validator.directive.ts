import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS, ValidatorFn, ValidationErrors } from '@angular/forms';

function testsCpf(cpf: string) {
  let sum: number = 0;
  let mod: number;

  for (let i=1; i<=9; i++) sum = sum + parseInt(cpf.substring(i-1, i)) * (11 - i);
  mod = (sum * 10) % 11;

    if ((mod == 10) || (mod == 11))  mod = 0;
    if (mod != parseInt(cpf.substring(9, 10)) ) return false;

  sum = 0;
    for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i-1, i)) * (12 - i);
    mod = (sum * 10) % 11;

    if ((mod == 10) || (mod == 11))  mod = 0;
    if (mod != parseInt(cpf.substring(10, 11) ) ) return false;
    return true;
}

export function validatesCpf(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let cpf = control.value.toString();

    let valid: boolean;
  
    const regex = new RegExp('[0-9]{11}');
  
    if (
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999' ||
      cpf == '00000000000' ||
      !regex.test(cpf)
    ) {
      valid = false;
    }    
    else {
      valid = testsCpf(cpf);
    }
    return !valid ? { cpf: {value: control.value}} : null;
  }
}

@Directive({
  selector: '[validatesCpf]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CpfValidator,
    multi: true
  }]
})

export class CpfValidator implements Validator {
  
  validate(control: AbstractControl): {[key: string]: any} | null {
    return validatesCpf()(control);
  }
  constructor() { }
}