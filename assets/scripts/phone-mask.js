import { phoneMaskList } from './phone-mask-list.js';

export const phoneMask = (selector) => {
  function setMask() {
    let matrix = '+###############';

    phoneMaskList.forEach(item => {
      let code = item.code.replace(/[\s#]/g, '');
      let phone = this.value.replace(/[\s#-)()]/g, '');

      if (phone.includes(code)) {
        matrix = item.code;
      }
    });

    let i = 0;
    let val = this.value.replace(/\D/g, '');

    this.value = matrix.replace(/(?!\+)./g, (number) => {
      return /[#\d]/.test(number) && i < val.length ? val.charAt(i++) : ( i >= val.length ? '' : number);
    });
  }

  let inputs = document.querySelectorAll(selector);

  inputs.forEach(input => {
    input.addEventListener('input', setMask);
    input.addEventListener('focus', setMask);
    input.addEventListener('blur', setMask);
  });
}