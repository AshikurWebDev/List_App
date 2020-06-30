import React from 'react';
import './App.css';

const List = (props) => {
    return (
      <>
        <div className="list_style">
          <li>{props.Text}</li>
          <i
            class="far fa-trash-alt"
            aria-hidden="true"
            onClick={()=>{
                props.delete(props.id);
            }}
          ></i>
        </div>
      </>
    );
};

export default List;