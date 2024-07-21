import { Icon } from "@iconify/react";
import css from "./Modal.module.css";
import { useState } from "react";
import RentForm from "../RentForm/RentForm";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

export default function Modal({ camper, onClose }) {
  const [section, setSection] = useState(null);

  const handleClass = (e) => {
    const query = document.querySelectorAll("#navBtn");

    if (query.length) query.forEach((el) => el.classList.remove(css.active));

    e.target.classList.add(css.active);
  };

  const handleFeatures = (e) => {
    handleClass(e);
    setSection("features");
  };

  const handleReviews = (e) => {
    handleClass(e);
    setSection("reviews");
  };

  return (
    <div id="modal-overlay" className={css.modalOverlay}>
      <div className={css.modal}>
        <div className={css.modalContent}>
          <div className={css.modalHeader}>
            <div className={css.modalHeaderContent}>
              <h2>{camper.name}</h2>
              <Icon
                icon="iconamoon:close"
                onClick={onClose}
                className={css.closeIcon}
              />
            </div>
            <ul className={css.rating}>
              <li className={css.star}>
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
            <div className={css.price}>
              <span>€ </span>
              {camper.price.toFixed(2)}
            </div>
          </div>
          <div className={css.scrollContent}>
            <div className={css.gallery}>
              {camper.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={camper.name}
                  className={css.img}
                />
              ))}
            </div>
            <p>{camper.description}</p>
          </div>
          <div className={css.navBar}>
            <nav className={css.navBtns}>
              <button id="navBtn" className={css.btn} onClick={handleFeatures}>
                Features
              </button>
              <button id="navBtn" className={css.btn} onClick={handleReviews}>
                Reviews
              </button>
            </nav>
            <hr />
            {section && (
              <div className={css.container}>
                {section === "features" && <Features camper={camper} />}
                {section === "reviews" && <Reviews camper={camper} />}
                <RentForm />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
