

import { useState } from "react";
import { BookForm } from "./bookForm";
import { accountAddress } from "../plugins/utils";
import { initWalletConnect } from "../plugins/walletConnect";


export const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [address, setAddress] = useState(null);

    const toggle = () => {
        setShowModal(!showModal);
    };

    const walletConnect = () => {
        initWalletConnect();
    };

    return (
        <div>
            <div className="navbar navbar-expand-lg navbar-light flex-top">
                <ul className="navbar-nav justify-content-end ml-auto">
                    <li className="nav-item">
                        <button onClick={toggle} className="mr-5 mt-3">
                            <span>Rent Your Books</span>
                        </button>
                    </li>
                </ul>
            </div>

            {showModal && (
                <BookForm >
                    <h3 slot="header">Rent Your Books</h3>
                </BookForm>
            )}
        </div>
    );
};
