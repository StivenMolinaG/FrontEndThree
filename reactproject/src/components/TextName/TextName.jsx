import * as React from 'react';

export default function TextName(props) {
  return (
    <React.Fragment>
      <div style={{backgroundColor: "steelblue", display: "flex", justifyContent: "center", alignSelf:"center"}}>
        <h2 style={{color: "#FFF"}}>{props.name}</h2>
      </div>
    </React.Fragment>
  );
}