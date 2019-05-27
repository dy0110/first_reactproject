import React from "react";
import "./Title.css";

// functional component
//functional componentは、class componentと違い機能がほとんどありません。
//また、stateを持つことができません
//functional componentは、functional componentのみインポート可能
const Title = props => {
  return (
    <div className="titleSection">
      <h2 style={props.titleStyle} id="versionStatement">
        {props.children}
      </h2>
    </div>
  );
};

export default Title;
