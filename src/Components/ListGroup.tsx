import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

function ListGroup() {

    let items = [
        'America',
        'Sri Lanka',
        'Pakistan',
        'India'
    ];


    //Hook
    const [selectedIndex , setSelectedIndex] = useState(-1);

    const massage = items.length === 0 ? <p>No items Found</p> : null;

    

    return (
        <Fragment>
            <h1>List</h1>
            {/* //condition that no items found show this */}

            {massage}

            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} 
                        key={item}
                        onClick ={() => {setSelectedIndex(index)}}> {item}</li>
                ))}
            </ul>
        </Fragment>
    );
};

export default ListGroup;
