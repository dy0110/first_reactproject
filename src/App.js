import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// コンポーネントをインポート
import Title from "./components/Title/Tiltle";

class App extends Component {
  // イベントハンドラー
  onClickHandler = () => {
    // h2タグを取得
    let title = document.getElementById("versionCounter");

    // upgradeのボタン
    let upgradeButton = document.getElementById("upgradeButton");

    // タイトルを更新
    title.textContent = "4.0";

    // pタグ(upgradeのボタン)を非表示
    upgradeButton.style.display = "none";
    
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title
            title="Hello World 3.0"
            titleStyle={{ color: "orange" }}
            onClick={this.onClickHandler}
          >
            Hello World{" "}
            <span
              id="versionCounter"
              style={{ borderBottom: "1px solid orange" }}
            >
              3.0
            </span>
          </Title>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
