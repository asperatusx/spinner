const spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

const writeSpinner = (string) => {
  process.stdout.write(string)
}

setTimeout(() => writeSpinner(spinnerArray[0]), 100);
setTimeout(() => writeSpinner(spinnerArray[1]), 300);
setTimeout(() => writeSpinner(spinnerArray[2]), 500);
setTimeout(() => writeSpinner(spinnerArray[3]), 700);
setTimeout(() => writeSpinner(spinnerArray[0]), 900);


// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
  
//   process.stdout.write('\r\\   '); 
// }, 1500);