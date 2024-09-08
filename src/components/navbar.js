

import BookForm from "./bookForm";
import { accountAddress } from "../plugins/utils";
import { initWalletConnect } from "../plugins/WalletConnect";


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
            <nav class="navbar navbar-expand-lg navbar-light flex-top">
                <ul class="navbar-nav justify-content-end ml-auto">
                    <li class="nav-item">
                        <button onClick={toggle} class="mr-5 mt-3">
                            <span>Rent Your Books</span>
                        </button>
                    </li>
                </ul>
            </nav>

            {showModal && (
                <BookForm >
                    <h3 slot="header">Rent Your Books</h3>
                </BookForm>
            )}
        </div>
    );
};
