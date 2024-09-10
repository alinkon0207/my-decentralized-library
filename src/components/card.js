
import { useState } from "react";

import { DetailsModal } from "./detailsModal";


export const Card = ({bookObject}) => {
    const [showModal, setShowModal] = useState(false);

    const displayDetails = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src="/assets/book.png" alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">Price: {bookObject.price}</h4>
                    <h5 className="card-title">Name: {bookObject.name}</h5>
                    <p className="card-text">Description: {bookObject.description}</p>
                    <button className="btn btn-primary" onClick={displayDetails}>View</button>
                </div>
            </div>
            {showModal && (
                <DetailsModal bookData={bookObject} />
            )}
        </div>
    );
};
