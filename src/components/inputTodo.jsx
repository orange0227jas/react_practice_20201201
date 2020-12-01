import React from "react";

const style = {
  backgroundColor: "aqua",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "10px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div style={style}>
      <input
        placeholder="ここに入力〜"
        value={todoText}
        onChange={onChange}
      ></input>
      <button onClick={onClick}>追加ボタン</button>
    </div>
  );
};
