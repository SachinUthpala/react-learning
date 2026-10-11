import { MouseEvent } from "react";
import { Fragment } from "react/jsx-runtime";

function ListGroup() {



    let items = [
        'New York',
        'Kurunegala',
        'Polgahawela',
        'Point Fedro',
        'Mathara'
    ];

    const eventHandler = (event : MouseEvent ) => console.log(event);

  return (
    <Fragment>
      <h1>LIst Group</h1>
      {/* {(items.length === 0) ? <p>No items found</p> : null} */}
      {/* second way in this case we dont need to use null operation */}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map(item => <li className="list-group-item active" key={item} onClick={eventHandler} >{item}</li>)}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
