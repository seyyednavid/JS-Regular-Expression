let re;
// literal character
re = /hello/;
re = /hello/i; // i => case sensitive

//  Meta character symbol
re = /^h/i; // Must start with h
re = /d$/i; // Must ends with d
re = /^hello$/i; // Must begin and end with hello
re = /^h.llo$/i; // Matches any one character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // Optional character - the first(e) or the second(a) or none of them or both of them
re = /gre?a?y\?/i; // Escape character (\(everything) => must be the exact everything)

// Brackets [] - Character set
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/; // Must be a G or F
re = /[^GF]ray/; // Match anything except a G or F (^ inside brackets means => NOT)
re = /^[GF]ray/; // Must start with G or F
re = /^[A-Z]ray/; // Match any uppercase letter
re = /^[a-z]ray/; // Match any lowercase letter
re = /^[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit with any number of digits
re = /[0-3]ray/; // Match any digit with any number of digits between 0 to 3
re = /[0-3][0-3]ray/; // Match digit with at least two number of digits between 0 to 3

//  Braces {} -  Quantifiers
re = /Hel{2}o/i; //Must occur exactly {2} times of (l)
re = /Hel{2,4}o/i; //Must occur exactly {2 to 4} times of l
re = /Hel{2,}o/i; //Must occur at least {m} times

// parentheses () - Grouping
re = /([0-9]x){3}/; // if we wanna to have just 3 times no more => /^([0-9]x){3}$/

//  Shorthand character classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // + = No(Word character - alphanumeric or _)
re = /\d/; // Match any digit
re = /\d+/; // Match any digit one or more
re = /\D/; //Match  Non-digit
re = /\s/; //Match  whitespace char
re = /\S/; //Match  Non-whitespace char
re = /Hell/i; //Match without considering boundary(for example it accept Hello)
re = /Hell\b/i; //Word boundary(the exact chars) (for example it does not accept Hello just accept Hell)

// Assertions
re = /x(?=y)/; //match x only if followed by y like => xy in anywhere
re = /x(?!y)/; //match x only if  Not followed by y

// String to match
const str = "xl";

//  Log result
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);
