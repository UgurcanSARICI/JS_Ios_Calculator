let firstScreen = document.querySelector(".firstScreen");
let secondScreen = document.querySelector(".secondScreen");
let buttons = document.querySelector(".buttons");

function operation() {
  switch (firstScreen.innerText[firstScreen.innerText.length - 1]) {
    case "+":
      secondScreen.innerText = Number(
        (
          Number(
            firstScreen.innerText.slice(0, firstScreen.innerText.length - 1)
          ) + Number(secondScreen.innerText)
        ).toFixed(4)
      );
      firstScreen.innerText = "";
      break;
    case "-":
      secondScreen.innerText = Number(
        (
          Number(
            firstScreen.innerText.slice(0, firstScreen.innerText.length - 1)
          ) - Number(secondScreen.innerText)
        ).toFixed(4)
      );
      firstScreen.innerText = "";
      break;
    case "x":
      secondScreen.innerText = Number(
        (
          Number(
            firstScreen.innerText.slice(0, firstScreen.innerText.length - 1)
          ) * Number(secondScreen.innerText)
        ).toFixed(4)
      );
      firstScreen.innerText = "";
      break;
    case "/":
      secondScreen.innerText = Number(
        (
          Number(
            firstScreen.innerText.slice(0, firstScreen.innerText.length - 1)
          ) / Number(secondScreen.innerText)
        ).toFixed(4)
      );
      firstScreen.innerText = "";
      break;
    default:
      break;
  }
}

function operationSecond() {
  switch (firstScreen.innerText[firstScreen.innerText.length - 1]) {
    case "+":
      firstScreen.innerText = Number(
        (
          Number(
            firstScreen.innerText.slice(0, firstScreen.innerText.length - 1)
          ) + Number(secondScreen.innerText)
        ).toFixed(4)
      );
      secondScreen.innerText = "";
      break;
    case "-":
      firstScreen.innerText = Number(
        (
          Number(
            firstScreen.innerText.slice(0, firstScreen.innerText.length - 1)
          ) - Number(secondScreen.innerText)
        ).toFixed(4)
      );
      secondScreen.innerText = "";
      break;
    case "x":
      firstScreen.innerText = Number(
        (
          Number(
            firstScreen.innerText.slice(0, firstScreen.innerText.length - 1)
          ) * Number(secondScreen.innerText)
        ).toFixed(4)
      );
      secondScreen.innerText = "";
      break;
    case "/":
      firstScreen.innerText = Number(
        (
          Number(
            firstScreen.innerText.slice(0, firstScreen.innerText.length - 1)
          ) / Number(secondScreen.innerText)
        ).toFixed(4)
      );
      secondScreen.innerText = "";
      break;
    default:
      break;
  }
}
