import { useSelector } from "react-redux";
import CamperCard from "../CamperCard/CamperCard";
import css from "./Favorites.module.css";
import { selectFavorites } from "../../redux/favorites/selectors";

export default function Favorites() {
  const favorites = useSelector(selectFavorites);

  return (
    <div className={css.container}>
      {favorites.length > 0 ? (
        <ul className={css.list}>
          {favorites.map((camper) => (
            <li key={camper._id}>
              <CamperCard camper={camper} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite campers yet</p>
      )}
    </div>
  );
}
