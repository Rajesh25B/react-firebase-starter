import { useState } from "react";
import Auth from "./components/auth";
import ListMovies from "./components/ListMovies";

function App() {
  return (
    <>
      <div>Firebase Starter</div>
      {/* <Auth /> */}
      <ListMovies />
    </>
  );
}

export default App;
