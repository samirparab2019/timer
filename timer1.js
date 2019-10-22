const argv = process.argv.slice(2);

for (const num of argv) {
  
  setTimeout(() => {  
    process.stdout.write(`${num} seconds\n`);
    process.stdout.write('\x07');
  }, num * 1000);
};

// output
// 2 seconds
// 3 seconds
// 4 seconds
// 5 seconds
// 8 seconds



