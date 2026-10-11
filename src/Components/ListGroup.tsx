import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let items = [
    "New York",
    "Kurunegala",
    "Polgahawela",
    "Point Fedro",
    "Mathara",
  ];

  // const eventHandler = (event : MouseEvent ) => console.log(event);

  const [selectedIndes, setSelectedIndex] = useState(0);

  return (
    <Fragment>
      <h1>LIst Group</h1>
      {/* {(items.length === 0) ? <p>No items found</p> : null} */}
      {/* second way in this case we dont need to use null operation */}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item , index) => (
          <li className={selectedIndes === index ? "list-group-item active" : "list-group-item"}  
          key={item} 
          onClick={() => setSelectedIndex(index)}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
