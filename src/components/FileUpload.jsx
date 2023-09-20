import React, { useState } from "react";
import { storage } from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";

export default function FileUpload() {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    if (!file) return;

    // create a folder in storage web section and add files to that folder
    const filesFolderRef = ref(storage, `dps/${file.name}`);
    try {
      await uploadBytes(filesFolderRef, file);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
