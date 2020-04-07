
const spinnerArray = ["\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  ", "\n"];

for (const index in spinnerArray) {
  setTimeout(() => {
    process.stdout.write(spinnerArray[index]);
  }, index * 100)
};