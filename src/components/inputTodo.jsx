import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input
        placeholder="ここに入力〜"
        value={todoText}
        onChange={onChange}
      ></input>
      <button onClick={onClick}>追加ボタン</button>
    </div>
  );
};
