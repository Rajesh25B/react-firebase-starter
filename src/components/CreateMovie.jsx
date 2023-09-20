import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../config/firebase";

export default function CreateMovie() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [released, setReleased] = useState(false);

  const movieCollectionRef = collection(db, "movies");

  const onSubmitMovie = async (e) => {
    e.preventDefault();
    try {
      console.log(title, rating, released);
      await addDoc(movieCollectionRef, {
        title: title,
        rating: rating,
        isReleased: released,
        userId: auth?.currentUser?.uid,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h3>Create Movie Record</h3>
      <form onSubmit={onSubmitMovie}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Rating:</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <br />
        <label>IsReleased</label>
        <input
          type="checkbox"
          value={released}
          onChange={() => setReleased(true)}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
