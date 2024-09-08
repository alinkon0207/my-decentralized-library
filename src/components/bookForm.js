
import { useState } from "react";

import { postBookInfo } from "../plugins/utils";
import './bookForm.css';


export const BookForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const postAd = async () => {
        // convert price from TRX to SUN
        await postBookInfo(title, description, tronWeb.toSun(price));
    };

    return (
        <div>
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">
                        <div class="modal-header">
                            <slot name="header">default header</slot>
                        </div>

                        <div class="modal-body">
                            <slot name="body">
                                <div class="form-group">
                                    <label for="title">Book Name</label>
                                    <input 
                                        type="text"
                                        class="form-control"
                                        value={title}
                                        placeholder="Enter Book Name"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="description">Description</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        value={description}
                                        placeholder="Description"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="price">Price</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        value={price}
                                        placeholder="Unit: TRX"
                                    />
                                </div>
                                <button onClick={postAd} class="btn btn-primary float-right">Submit</button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
