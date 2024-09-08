
import { useState } from "react";

import { DetailsModal } from "./detailsModal";


export const Card = ({bookObject}) => {
    const [showModal, setShowModal] = useState(false);

    const displayDetails = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="/assets/book.png" alt="Card image cap" />
                <div class="card-body">
                    <h4 class="card-title">Price: {bookObject.price}</h4>
                    <h5 class="card-title">Name: {bookObject.name}</h5>
                    <p class="card-text">Description: {bookObject.description}</p>
                    <button class="btn btn-primary" onClick={displayDetails}>View</button>
                </div>
            </div>
            {showModal && (
                <DetailsModal bookData={bookObject} />
            )}
        </div>
    );
};
