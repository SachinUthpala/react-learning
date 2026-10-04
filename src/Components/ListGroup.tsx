import { MouseEvent } from "react";
import { Fragment } from "react/jsx-runtime";

function ListGroup() {

    let items = [
        'America',
        'Sri Lanka',
        'Pakistan',
        'India'
    ];



    const massage = items.length === 0 ? <p>No items Found</p> : null;

    //event handling
    const handleClick = (event: MouseEvent) => console.log(event);

    return (
        <Fragment>
            <h1>List</h1>
            {/* //condition that no items found show this */}

            {massage}

            <ul className="list-group">
                {items.map((item, index) => (
                    <li className="list-group-item" key={item}
                        onClick ={handleClick}> {item}</li>
                ))}
            </ul>
        </Fragment>
    );
};

export default ListGroup;
