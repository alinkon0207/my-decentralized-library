
import { useEffect, useState } from "react";

import { Card } from "./components/card";
import { fetchAllBooks, setLibraryContract, getTronWeb } from "./plugins/utils";
import { sampleTx } from "./plugins/walletConnect";

import './App.css';


function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // get tronWeb object
    getTronWeb();

    // Wait a while to ensure tronweb object has already injected
    setTimeout(async () => {
      // init contract object
      await setLibraryContract();
        
      console.log("Begin to obtain the books information");
      // fetch all books
      const books = await fetchAllBooks();
      setPosts(books);
      console.log("The total number of Books: " + books.length);
    }, 50);
  });

  const sendTx = async () => {
    await sampleTx();
  }

  return (
    <div ckass="container m-5">
      <div>
        <h1 class="title">Decentralized Book Rental</h1>
        <div class="row">
          {posts.map((id, post) => (
            <div class="m-3">
              <Card bookObject={post} key={post.id} />
            </div>))}
        </div>
      </div>
    </div>
  );
}

export default App;
