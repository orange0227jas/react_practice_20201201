import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "もちもち！！！",
    "もちだ！！"
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "終わった！！",
    "もう、終わり！！"
  ]);
  return (
    <>
      <div className="input-area">
        <input placeholder="ここに入力〜"></input>
        <button>追加ボタン</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了エリア</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
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
              <div className="list-row">
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
