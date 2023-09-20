import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

// collection in db terms => table
// getDocs in db terms => all table records
// docs => all rows
// doc => single row

export default function ListMovies() {
  const [moviesList, setMoviesList] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const data = await getDocs(collection(db, "movies"));
        // console.log(data);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // console.log(filteredData);
        setMoviesList(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getAllMovies();
  }, [moviesList]);
  //   console.log(moviesList);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "movies", id));
  };

  const updateTitleOnClick = async (id) => {
    await updateDoc(doc(db, "movies", id), { title: newTitle });
  };

  const renderMovies = moviesList.map((movie) => (
    <div key={movie.id}>
      <h4>{movie.title}</h4>
      <input
        placeholder="Update title"
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button onClick={() => updateTitleOnClick(movie.id)}>Update</button>
      <br />
      <button onClick={() => handleDelete(movie.id)}>Delete</button>
    </div>
  ));

  return (
    <div>
      <h2>ListMovies</h2>
      {renderMovies}
    </div>
  );
}
