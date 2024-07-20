import { useSelector, useDispatch } from "react-redux";
import { selectCatalog } from "../../redux/campers/selectors";
import CamperCard from "../CamperCard/CamperCard";
import { addFavorite } from "../../redux/favorites/operations";

export default function Catalog() {
  const dispatch = useDispatch();
  const catalog = useSelector(selectCatalog);

  const handleAddToFavorites = (id) => {
    dispatch(addFavorite(id));
  };

  return (
    <div>
      {catalog.map((camper) => (
        <CamperCard
          key={camper._id}
          camper={camper}
          onAddToFavorites={handleAddToFavorites}
        />
      ))}
    </div>
  );
}
