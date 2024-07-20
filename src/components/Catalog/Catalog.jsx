import { useSelector, useDispatch } from "react-redux";
import { selectCatalog } from "../../redux/campers/selectors";
import CamperCard from "../CamperCard/CamperCard";
import { addFavorite } from "../../redux/favorites/operations";
import { useState } from "react";
import css from "./Catalog.module.css";

export default function Catalog() {
  const dispatch = useDispatch();
  const catalog = useSelector(selectCatalog);

  const [visibleCount, setVisibleCount] = useState(4);

  const handleAddToFavorites = (id) => {
    dispatch(addFavorite(id));
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Increase the visible count by 4
  };

  return (
    <div className={css.camperList}>
      {catalog.slice(0, visibleCount).map((camper) => (
        <CamperCard
          key={camper._id}
          camper={camper}
          onAddToFavorites={handleAddToFavorites}
        />
      ))}
      {visibleCount < catalog.length && (
        <button onClick={handleLoadMore} className={css.btn}>
          Load More
        </button>
      )}
    </div>
  );
}
