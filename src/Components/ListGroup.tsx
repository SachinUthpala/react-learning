import { Fragment } from "react/jsx-runtime";

function ListGroup() {

    let items = [
        'America',
        'Sri Lanka',
        'Pakistan',
        'India'
    ]

    

    const massage = items.length === 0 ? <p>No items Found</p> : null;

    return (
        <Fragment>
            <h1>List</h1>
            {/* //condition that no items found show this */}
            
            {massage}

            <ul className="list-group">
                {items.map((item) =>(
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </Fragment>
    );
};

export default ListGroup;
