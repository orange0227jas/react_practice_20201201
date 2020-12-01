import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="ここに入力〜"></input>
        <button>追加ボタン</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了エリア</p>
        <ul>
          <div className="list-row">
            <li></li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了した！</p>
        <ul>
          <div className="list-row">
            <li></li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
