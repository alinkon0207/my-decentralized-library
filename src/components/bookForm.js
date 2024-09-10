
import { useState } from "react";

import { postBookInfo } from "../plugins/utils";
import './bookForm.css';


export const BookForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const postAd = async () => {
        // convert price from TRX to SUN
        await postBookInfo(title, description, window.tronWeb.toSun(price));
    };

    return (
        <div>
            <div className="modal-mask">
                <div className="modal-wrapper">
                    <div className="modal-container">
                        <div className="modal-header">
                            <slot name="header">default header</slot>
                        </div>

                        <div className="modal-body">
                            <slot name="body">
                                <div className="form-group">
                                    <label for="title">Book Name</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        value={title}
                                        placeholder="Enter Book Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="description">Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={description}
                                        placeholder="Description"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="price">Price</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={price}
                                        placeholder="Unit: TRX"
                                    />
                                </div>
                                <button onClick={postAd} className="btn btn-primary float-right">Submit</button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
