process.stdout.write("Welcome to Holberton School, what is your name?\n")
process.stdin.setEncoding('utf8')
process.stdin.on('data', (data) => {
    const input = data.trim();
    
    if (input === 'exit') {
      process.stdout.write("This important software is now closing\n");
      process.exit();
    } else {
      process.stdout.write(`Your name is: ${input}\n`);
    }
  });
  
  process.on('exit', () => {
    process.stdout.write("This important software is now closing\n");
  });
  