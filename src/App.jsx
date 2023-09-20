import { useState } from "react";
import Auth from "./components/auth";
import ListMovies from "./components/ListMovies";
import CreateMovie from "./components/CreateMovie";

function App() {
  return (
    <>
      <div>Firebase Starter</div>
      <Auth />

      <CreateMovie />
      <ListMovies />
    </>
  );
}

export default App;
