import { useState } from "react";
import Auth from "./components/auth";
import ListMovies from "./components/ListMovies";
import CreateMovie from "./components/CreateMovie";
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <>
      <div>Firebase Starter</div>
      {/* <Auth />

      <CreateMovie />
      <ListMovies /> */}
      <FileUpload />
    </>
  );
}

export default App;
