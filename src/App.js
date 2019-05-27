import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// コンポーネントをインポート
import Title from "./components/Title/Tiltle";

//class component
//class componentは、stateを持つことのできるcomponentです。
//event handler を定義したり、他のcomponentにpropsとして情報を渡したりできる高機能なcomponentです。
//class componentは、両種類のcomponentをインポートすることができる
//Reactの流儀としては 少数のclass componentがtateを管理していて、情報が必要な時だけpropsでfunctional componentに渡す
class App extends Component {
  // イベントハンドラー
  onClickHandler = () => {
    let nextVersion = parseInt(this.state.version, 10) + 1;

    // 直接変更してはいけないので setState を使う
    this.setState({
      version: nextVersion.toFixed(1)
    });
    //this.state = { version: nextVersion.toFixed(1)} // <= これはダメ
  };

  state = {
    version: "1.0"
  };

  render() {
    if (parseInt(this.state.version, 10) > 1) {
      console.log(
        "アップグレード成功！！ 新しいバージョンは　" + this.state.version
      );
    }

    // letで変数を定義して、if文で代入する要素を入れ替える手法
    // upgradeButton初期の要素
    let upgradeButton = (
      <p
        onClick={this.onClickHandler}
        id="upgradeButton"
        className="upgrade-button"
      >
        Upgrade
      </p>
    );

    // upgradeButton初期の要素
    if (this.state.version === "5.0") {
      upgradeButton = (
        //バージョンが5.0になった時に表示されて欲しいボタン
        <p className="upgraded-button">Already up-to-date</p>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title
            title="Hello World 3.0"
            titleStyle={{ color: "orange" }}
            onClick={this.onClickHandler}
          >
            Hello World{' '}
            <span
              id="versionCounter"
              style={{ borderBottom: "1px solid orange" }}
            >
              {this.state.version}
            </span>
          </Title>
          {upgradeButton}
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
