import { useState } from "react";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";
import "./styles/global.css";
import { calcButtons } from "./utils/dummyData";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("");
  const [prevScreen, setPrevScreen] = useState("");
  const [operator, setOperator] = useState("");

  function changeScreenVal(val) {
    setCurrentScreen(currentScreen + val);
  }
  function operationClick(op) {
    setOperator(op);
    setPrevScreen(currentScreen);
    setCurrentScreen("");
  }

  function clearBtn() {
    setCurrentScreen("");
  }

  function plsMnsBtn() {
    setCurrentScreen(currentScreen * -1);
  }

  function equalHandler() {
    console.log("Equal handler running");
    console.log({ operator });
    let result;
    switch (operator) {
      case "/":
        result = Number(prevScreen) / Number(currentScreen) + "";
        setCurrentScreen(result);
        break;
      case "*":
        result = Number(prevScreen) * Number(currentScreen) + "";
        setCurrentScreen(result);
        break;
      case "-":
        result = Number(prevScreen) - Number(currentScreen) + "";
        setCurrentScreen(result);
        break;
      case "+":
        console.log("Case + ");
        result = Number(prevScreen) + Number(currentScreen) + "";
        setCurrentScreen(result);
        break;
      case "%":
        result = (Number(prevScreen) * Number(currentScreen)) / 100 + "";
        setCurrentScreen(result);
    }
  }

  return (
    <div className="container">
      <Screen value={currentScreen} />
      <div className="grid_buttons">
        {calcButtons.map((btn, index) => (
          <Buttons
            data={btn}
            key={index}
            changeScreenVal={changeScreenVal}
            equalHandler={equalHandler}
            operationClick={operationClick}
            clearBtn={clearBtn}
            plsMnsBtn={plsMnsBtn}
          />
        ))}
      </div>
    </div>
  );
}