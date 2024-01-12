import "../styles/buttons.css";

function Buttons(props) {
  const {
    data,
    changeScreenVal,
    equalHandler,
    operationClick,
    clearBtn,
    plsMnsBtn,
  } = props;

  function clickHandler() {
    if (data.button == "=") {
      equalHandler();
    }
    if (data.type == "num") {
      changeScreenVal(data.button);
    }
    if (data.type == "C") {
      clearBtn();
    }
    if (data.type == "op") {
      operationClick(data.button);
    }
    if (data.type == "+/-") {
      plsMnsBtn();
    }
  }

  return (
    <button
      className={data.className}
      value={data.button}
      onClick={clickHandler}
    >
      {data.button}
    </button>
  );
}
export default Buttons;