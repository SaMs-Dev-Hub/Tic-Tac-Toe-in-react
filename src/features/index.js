import React, { useState } from "react";

const TicTacToe = () => {
  const [val, setVal] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);

  const Square = ({ value, onHandler }) => {
    console.log("value", value);
    return (
      <div className="square" onClick={onHandler}>
        <h1>{value}</h1>
      </div>
    );
  };
  const onValueHandler = (i) => {
    const newValue = val.slice();
    if (val[i] !== null) {
      return 0;
    }
    if (isNext) {
      newValue[i] = "X";
    } else {
      newValue[i] = "O";
    }
    console.log("newValue", newValue);
    setVal(newValue);
    setIsNext(!isNext);
  };
  return (
    <div>
      <div>
        <h1>Tic Tac Toe in React</h1>
      </div>
      <div className="main-grid">
        <div className="row">
          <Square value={val[0]} onHandler={() => onValueHandler(0)} />
          <Square value={val[1]} onHandler={() => onValueHandler(1)} />
          <Square value={val[2]} onHandler={() => onValueHandler(2)} />
        </div>
        <div className="row">
          <Square value={val[3]} onHandler={() => onValueHandler(3)} />
          <Square value={val[4]} onHandler={() => onValueHandler(4)} />
          <Square value={val[5]} onHandler={() => onValueHandler(5)} />
        </div>
        <div className="row">
          <Square value={val[6]} onHandler={() => onValueHandler(6)} />
          <Square value={val[7]} onHandler={() => onValueHandler(7)} />
          <Square value={val[8]} onHandler={() => onValueHandler(8)} />
        </div>
      </div>
      <div>
        <p>Winner:</p>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default TicTacToe;
