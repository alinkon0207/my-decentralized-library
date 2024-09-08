
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { borrowBook, web3 } from "../plugins/utils";
import "./detailsModal.css";


export const DetailsModal = ({bookData}) => {
    const [showModal, setShowModal] = useState(true);
    const [sh, setSh] = useState(true);
    const [startDate, setStartDate] = useState(new Date());
    const [flag, setFlag] = useState(true);
    const [endDate, setEndDate] = useState(new Date());

    const getDayOfYear = (date) => {
        const now = new Date(date);
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        const oneDay = 1000 * 60 * 60 * 24;
        const day = Math.floor(diff / oneDay);
        return day;
    };

    const book = async () => {
        // get Start date
        const startDay = getDayOfYear(startDate);
        // get End date
        const endDay = getDayOfYear(endDate);
        // price calculation
        const totalPrice = window.tronWeb.toSun(bookData.price) * (endDay - startDay);
        // call borrowBook function of contract
        await borrowBook(bookData.id, startDay, endDay, totalPrice);
    };
    
    return (
        <div>
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">
                        <div class="modal-header">
                            <h3>Book Details</h3>
                        </div>
                        <div class="modal-body">
                            <slot name="body">
                                <h3>Book Name: {bookData.name}</h3>
                                <h3>Price: {bookData.price} TRX/Day</h3>
                                <p>Description: {bookData.description}</p>
                                <div class="row ml-4 p-2">
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                    <DatePicker selected={endDate} onChagne={(date) => setEndDate(date)} />
                                </div>
                                <button onClick={book} class="mr-5 mt-3">
                                    <span>Lend Now</span>
                                </button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
