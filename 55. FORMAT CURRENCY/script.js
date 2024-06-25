// .toLocaleString() = returns a string with a language 
//sensitive representation of a number
//.toLocaleString("locale", {options});

//'locate' = specify the language (undefined = default set in browser)
//'options' = object with formatting options

let num = 123456.789;
/* num = num.toLocaleString("en-US");
num = num.toLocaleString("hi-IN");
num = num.toLocaleString("de-DE");
num = num.toLocaleString(undefined); */
/* num = num.toLocaleString("en-US", {style: "currency", currency: "USD"}); */
/* num = num.toLocaleString("hi-IN", {style: "currency", currency: "INR"}); */
num = num.toLocaleString("de-DE", {style: "currency", currency: "EUR"});
console.log(num);