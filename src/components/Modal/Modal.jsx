import { Icon } from "@iconify/react";
import css from "./Modal.module.css";
import { useEffect, useState } from "react";
import RentForm from "../RentForm/RentForm";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

export default function Modal({ camper, onClose }) {
  const [section, setSection] = useState(null);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const handleClickOutside = (event) => {
    if (event.target.id === "modal-overlay") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleFeatures = () => {
    setSection("features");
  };

  const handleReviews = () => {
    setSection("reviews");
  };

  return (
    <div id="modal-overlay" className={css.modalOverlay}>
      <div className={css.modalContent}>
        <div className={css.modalHeader}>
          <h2>{camper.name}</h2>
          <Icon
            icon="iconamoon:close"
            onClick={onClose}
            className={css.closeIcon}
          />
        </div>
        <ul>
          <li>
            <Icon icon="tabler:star-filled" />
            <span>
              {camper.rating} ({camper.reviews.length} Reviews)
            </span>
          </li>
          <li>
            <Icon icon="fluent:location-28-regular" />
            <span> {camper.location}</span>
          </li>
        </ul>
        <div>
          <span>€ </span>
          {camper.price.toFixed(2)}
        </div>
      </div>
      <div>
        {camper.gallery.map((image, index) => (
          <img key={index} src={image} alt={camper.name} className={css.img} />
        ))}
      </div>
      <p>{camper.description}</p>
      <nav className={css.navButtons}>
        <button id="navBtn" className={css.btn} onClick={handleFeatures}>
          Features
        </button>
        <button id="navBtn" className={css.btn} onClick={handleReviews}>
          Reviews
        </button>
      </nav>
      <hr className={css.line} />
      {section && (
        <div className={css.container}>
          {section === "features" && <Features camper={camper} />}
          {section === "reviews" && <Reviews camper={camper} />}
          <RentForm />
        </div>
      )}
    </div>
  );
}
