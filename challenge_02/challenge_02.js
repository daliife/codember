const inputMessage = `&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&`;

let number = 0;

let printResult = "";

for (let i = 0; i < inputMessage.length; i++) {
  switch (inputMessage[i]) {
    case "#":
      number++;
      break;
    case "@":
      number--;
      break;
    case "*":
      number *= number;
      break;
    case "&":
      printResult += number;
      break;
  }
}
console.log(printResult);
