import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Card from './Card';
import SData from './Sdata'

function ncard(val) {
  return (
    <Card
      MovName={val.MovName}
      imgsrc={val.imgsrc}
      title={val.title}
      links={val.links}
    />
  );
}

ReactDOM.render(
  <>
 {SData.map(ncard)}
  </>,document.getElementById('root')
);