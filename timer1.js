const argv = process.argv.slice(2);

for (const num of argv) {

  if(argv.length === 0) {
    setTimeout(() => {  
      console.log("no numbers provided.");
      //process.stdout.write(`no numbers provided.\n`);
      }, 0);
  }

  if(num !== Number) {
    setTimeout(() => {  
      process.stdout.write(`no numbers provided.\n`);
      }, 0);
  }

  if(num <= 0) {
    setTimeout(() => {  
      process.stdout.write(`${num} seconds is not a valid number\n`);
      }, num * 1000);
  }

  if(num > 0) {
    setTimeout(() => {  
      process.stdout.write(`${num} seconds is not an option\n`);
      process.stdout.write('\x07');
    }, num * 1000);
  }

};

// output
// 2 seconds
// 3 seconds
// 4 seconds
// 5 seconds
// 8 seconds



