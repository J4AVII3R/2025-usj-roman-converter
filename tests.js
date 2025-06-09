const expect = chai.expect;
describe('integerToRoman - Manual Test Cases (Set A)', function() {
  it('should convert 1 to "I"', function() {
    expect(integerToRoman(1)).to.equal('I');
  });

  it('should convert 3999 to "MMMCMXCIX"', function() {
    expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
  });

  it('should convert 44 to "XLIV"', function() {
    expect(integerToRoman(44)).to.equal('XLIV');
  });

  it('should throw an error for 0', function() {
    expect(() => integerToRoman(0)).to.throw();
  });

  it('should throw an error for 4000', function() {
    expect(() => integerToRoman(4000)).to.throw();
  });

  it('should throw an error for non-numeric input "ABC"', function() {
    expect(() => integerToRoman("ABC")).to.throw();
  });

  it('should throw an error for negative numbers', function() {
    expect(() => integerToRoman(-12)).to.throw();
  });
});

describe('romanToInteger - Manual Test Cases (Set A)', function() {
  it('should convert "I" to 1', function() {
    expect(romanToInteger('I')).to.equal(1);
  });

  it('should convert "MMMCMXCIX" to 3999', function() {
    expect(romanToInteger('MMMCMXCIX')).to.equal(3999);
  });

  it('should convert "IV" to 4', function() {
    expect(romanToInteger('IV')).to.equal(4);
  });

  it('should throw an error for invalid repetition "IIII"', function() {
    expect(() => romanToInteger('IIII')).to.throw();
  });

  it('should throw an error for invalid input "ABC"', function() {
    expect(() => romanToInteger('ABC')).to.throw();
  });

  it('should throw an error for empty string', function() {
    expect(() => romanToInteger('')).to.throw();
  });
});

describe('integerToRoman - AI-Assisted Test Cases (Set B)', function() {
  it('should convert 1 to "I"', function() {
    expect(integerToRoman(1)).to.equal('I');
  });

  it('should convert 58 to "LVIII"', function() {
    expect(integerToRoman(58)).to.equal('LVIII');
  });

  it('should convert 1994 to "MCMXCIV"', function() {
    expect(integerToRoman(1994)).to.equal('MCMXCIV');
  });

  it('should throw an error for 0', function() {
    expect(() => integerToRoman(0)).to.throw();
  });

  it('should throw an error for 4000', function() {
    expect(() => integerToRoman(4000)).to.throw();
  });

  it('should throw an error for null', function() {
    expect(() => integerToRoman(null)).to.throw();
  });

  it('should throw an error for "abc"', function() {
    expect(() => integerToRoman("abc")).to.throw();
  });
});

describe('romanToInteger - AI-Assisted Test Cases (Set B)', function() {
  it('should convert "IX" to 9', function() {
    expect(romanToInteger('IX')).to.equal(9);
  });

  it('should convert "XLII" to 42', function() {
    expect(romanToInteger('XLII')).to.equal(42);
  });

  it('should convert "MMM" to 3000', function() {
    expect(romanToInteger('MMM')).to.equal(3000);
  });

  it('should throw an error for invalid subtractive "IL"', function() {
    expect(() => romanToInteger('IL')).to.throw();
  });

  it('should throw an error for "MMMM"', function() {
    expect(() => romanToInteger('MMMM')).to.throw();
  });

  it('should throw an error for "VX"', function() {
    expect(() => romanToInteger('VX')).to.throw();
  });
});