import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  getDoc,
  where,
  orderBy,
  limit,
  query,
} from "firebase/firestore";

import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  const colRef = collection(db, "books");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [bookId, setBookId] = useState("");
  const [books, setBooks] = useState([]);
  const [singleBook, setSingleBook] = useState("");
  useEffect(() => {
    // Firestore query
    // const colRefQuery = collection(db, "books");
    const q = query(colRef, where("author", "==", "man"), limit(2));
    onSnapshot(q, (snapshot) => {
      let books = [];
      snapshot.docs.forEach((doc) => {
        books.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log("🚀 ~ file: FirebaseApp.js:33 ~ onSnapshot ~ books", books);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    //1. get collection data (post -> su dung getDocs)
    // getDocs(colRef)
    //   .then((snapshot) => {
    //     let books = [];
    //     snapshot.docs.forEach((doc) => {
    //       books.push({
    //         id: doc.id,
    //         ...doc.data(),
    //       });
    //     });
    //     setBooks(books);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    //Cach 2. Get document in realtime
    onSnapshot(colRef, (snapshot) => {
      let books = [];
      snapshot.docs.forEach((doc) => {
        books.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setBooks(books);
    });
    // const docRefSingle = doc(db, "books", "0kA8HEgbCCSLyxwIbqE4");
    // getDoc(docRefSingle).then((doc) => {
    //   console.log(doc.id, doc.data());
    // });

    ///---------fetching single document----------
    const docRefSingle = doc(db, "books", "0kA8HEgbCCSLyxwIbqE4");
    onSnapshot(docRefSingle, (doc) => {
      console.log(doc.id, doc.data());
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleAddBook = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      title,
      author,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        console.log("ok");
        //reset form
        e.reset();
      })
      .catch((error) => {
        console.log(error);
        //reset form
      });
    e.reset();
  };
  const handleRemoveBook = async (e) => {
    e.preventDefault();
    const colRefDelete = doc(db, "books", bookId);
    await deleteDoc(colRefDelete);
    console.log("success");
  };
  const handleUpdateBook = async (e) => {
    e.preventDefault();
    const colRefUpdate = doc(db, "books", bookId);
    await updateDoc(colRefUpdate, {
      title: "this is a new title from update function",
    });
    console.log("update ok");
  };
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10 ">
        <form action="" onSubmit={handleUpdateBook}>
          <input
            type="text"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            placeholder="Enter your title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            placeholder="Enter your author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-3 text-sm font-medium text-white bg-blue-500 rounded-lg "
          >
            UPDATE BOOK
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10 ">
        <form action="" onSubmit={handleRemoveBook}>
          <input
            type="text"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            placeholder="Enter your title"
            name="bookId"
            onChange={(e) => setBookId(e.target.value)}
          />

          <button
            type="submit"
            className="w-full p-3 text-sm font-medium text-white bg-red-500 rounded-lg "
          >
            REMOVE BOOK
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10 ">
        {books.length > 0 &&
          books.map((item) => (
            <div key={item.title}>
              <div>
                {item.title} - {item.author}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FirebaseApp;
