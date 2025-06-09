function integerToRoman(number) {
  if (typeof number !== 'number' || !Number.isInteger(number) || number < 1 || number > 3999) {
    throw new Error('Input must be an integer between 1 and 3999.');
  }


  const values = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  let roman = '';
  let remainder = number;

  for (const { value, symbol } of values) {
    while (remainder >= value) {
      roman += symbol;
      remainder -= value;
    }
  }

  return roman;
}

function romanToInteger(romanInput) {
  if (typeof romanInput !== 'string' || romanInput.trim() === '') {
    throw new Error('Input must be a non-empty string.');
  }

  const input = romanInput.toUpperCase().trim();

  const tooManyRepeats = /(I{4,}|X{4,}|C{4,}|M{4,}|V{2,}|L{2,}|D{2,})/;
  const invalidSubtractives = /(IL|IC|ID|IM|VX|VL|VC|VD|VM|XD|XM|LC|LD|LM|DM)/;
  const validRomanRegex = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

  if (
    !validRomanRegex.test(input) ||
    tooManyRepeats.test(input) ||
    invalidSubtractives.test(input)
  ) {
    throw new Error('Invalid Roman numeral.');
  }

  const romanMap = {
    M: 1000, CM: 900, D: 500, CD: 400,
    C: 100, XC: 90, L: 50, XL: 40,
    X: 10, IX: 9, V: 5, IV: 4, I: 1
  };

  let i = 0;
  let total = 0;

  while (i < input.length) {
    const double = input.slice(i, i + 2);
    const single = input[i];

    if (romanMap[double]) {
      total += romanMap[double];
      i += 2;
    } else if (romanMap[single]) {
      total += romanMap[single];
      i++;
    } else {
      throw new Error('Unexpected character in Roman numeral.');
    }
  }

  if (total < 1 || total > 3999) {
    throw new Error('Roman numeral must represent a value between 1 and 3999.');
  }

  return total;
}

// Ejecuta la conversión
function convert() {
  const mode = document.getElementById('mode').value;
  const input = document.getElementById('input').value.trim();
  const resultDiv = document.getElementById('result');

  resultDiv.innerHTML = '';
  resultDiv.className = '';

  try {
    if (mode === 'toRoman') {
      if (!/^\d+$/.test(input)) {
        throw new Error('Only digits (0-9) are allowed in this mode.');
      }
      const number = parseInt(input, 10);
      const roman = integerToRoman(number);
      resultDiv.innerHTML = `The number ${number} in Roman numerals is:<div class="roman">${roman}</div>`;
    } else {
      const roman = input.toUpperCase();
      const arabic = romanToInteger(roman);
      resultDiv.innerHTML = `The Roman numeral ${roman} equals:<div class="roman">${arabic}</div>`;
    }
    resultDiv.classList.add('success');
  } catch (error) {
    resultDiv.innerText = error.message;
    resultDiv.classList.add('error');
  }
}

// Función para limpiar campos
function clearFields() {
  document.getElementById('input').value = '';
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';
  resultDiv.className = '';
}
