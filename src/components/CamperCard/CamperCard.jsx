import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./CamperCard.module.css";
import { Icon } from "@iconify/react";
import Modal from "../Modal/Modal";
import { selectFavorites } from "../../redux/favorites/selectors";
import { addFavorite, removeFavorite } from "../../redux/favorites/operations";

export default function CamperCard({ camper }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  // const [favorite, setFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const isFavorite = favorites.some((fav) => fav._id === camper._id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper));
    } else {
      dispatch(addFavorite(camper));
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (!camper || !camper.gallery || camper.gallery.length === 0) {
    return null;
  }

  return (
    <div className={css.card}>
      <img src={camper.gallery[0]} alt={camper.name} className={css.img} />
      <div className={css.info}>
        <ul className={css.namestr}>
          <li>{camper.name}</li>
          <li>
            <ul className={css.nameitems}>
              <li>
                <span>€ </span>
                {camper.price.toFixed(2)}
              </li>
              <li>
                <button
                  onClick={handleFavoriteToggle}
                  className={isFavorite ? css.isFavorite : css.favorite}
                >
                  <Icon icon="bx:heart" className={css.heart} />
                </button>
              </li>
            </ul>
          </li>
        </ul>
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
        <p className={css.txt}>{camper.description}</p>
        <ul className={css.details}>
          <li>
            <svg>
              <use href="../../assets/icons/users.svg"></use>
            </svg>
            <span>{camper.adults} adults</span>
          </li>
          <li>
            <Icon icon="tabler:automatic-gearbox" />
            <span> {camper.transmission}</span>
          </li>
          <li>
            <Icon icon="mdi:petrol-pump-outline" />
            <span> {camper.engine}</span>
          </li>
          <li>
            {camper.details.kitchen > 0 && (
              <>
                <Icon icon="tabler:tools-kitchen-2" />
                <span>Kitchen</span>
              </>
            )}
          </li>
          <li>
            <Icon icon="ion:bed-outline" />
            <span>{camper.details.beds} beds</span>
          </li>
          <li>
            {camper.details.airConditioner > 0 && (
              <>
                <Icon icon="fluent:weather-squalls-20-regular" />
                <span> AC</span>
              </>
            )}
          </li>
        </ul>
        <button className={css.btn} onClick={openModal}>
          Show more
        </button>
        {showModal && <Modal onClose={closeModal} camper={camper} />}
      </div>
    </div>
  );
}
