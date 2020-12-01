import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState();
  const [incompleteTodos, setIncompleteTodos] = useState([
    "もちもち！！！",
    "もちだ！！"
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "終わった！！",
    "もう、終わり！！"
  ]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newCompleteTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newCompleteTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="ここに入力〜"
          value={todoText}
          onChange={onChangeTodoText}
        ></input>
        <button onClick={onClickAdd}>追加ボタン</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了エリア</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了した！</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
