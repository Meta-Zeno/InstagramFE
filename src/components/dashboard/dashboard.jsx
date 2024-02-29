import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRandomPhoto } from "../../utils/fetch";
import "./dashboard.css";

const Dashboard = ({ loggedIn }) => {
  const navigate = useNavigate();
  const [images, setImages] = useState();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/logOrSign");
    }
  }, []);

  useEffect(() => {
    const fetchimages = async () => {
      const images = await fetchRandomPhoto();
      setImages(images);
      console.log(images);
    };
    fetchimages();
  }, []);

  return (
    <div>
      <div></div>
      <h1>Dashboard Page</h1>
      {loggedIn && <p>{loggedIn.username}:- Is Logged In</p>}
      <div className="image-container">
        {images &&
          images.map((image) => (
            <div key={image.id} className="images">
              <img src={image.urls.regular} alt={image.alt_description} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
