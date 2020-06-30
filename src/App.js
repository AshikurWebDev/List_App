import React, { useState } from "react";
import "./App.css";

import List from './List';

function App() {
  const [inputList, setinputList] = useState();
  const [Items, setItems ] = useState([]);
  const inputEvent = (event) =>{
    setinputList(event.target.value);
  };
  const ListOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
     setinputList("");
  };

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, i) => {
        return i !== id;
      });

    });
  };
  return (
    <>
      <div className="main">
        <div className="main_content">
          <br />
          <h1>BAZAR LIST</h1>
          <br />
          <input
            type="text"
            placeholder="Add an items"
            value={inputList}
            onChange={inputEvent}
          />
          <button onClick={ListOfItem}> + </button>
          <ol>
            {Items.map((ItemVal, i) => {
              return <List id={i} key={i} Text={ItemVal} delete={deleteItem}/>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
