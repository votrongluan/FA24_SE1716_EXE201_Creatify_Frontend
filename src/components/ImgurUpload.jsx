import React, { useState } from "react";
import axios from "axios";

const ImgurUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const CLIENT_ID = "YOUR_IMGUR_CLIENT_ID"; // Replace with your Imgur Client ID

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        "https://api.imgur.com/3/image",
        formData,
        {
          headers: {
            Authorization: `Client-ID ${CLIENT_ID}`,
          },
        }
      );
      setImageUrl(response.data.data.link); // Get the uploaded image URL
    } catch (error) {
      console.error("Error uploading the image", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload to Imgur</button>

      {imageUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img src={imageUrl} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default ImgurUpload;
