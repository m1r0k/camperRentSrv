import { NavLink } from "react-router-dom";
import camper_van_icon from "../../assets/icons/camper_van.webp";
import css from "./HomePage.module.css";

export default function Home() {
  return (
    <div className={css.bg}>
      <h1>Camper Rental Service</h1>
      <img src={`${camper_van_icon}`} alt="camper van" className={css.img} />
      <p className={css.txt}>Discover the best campers for your adventures!</p>
      <NavLink to="/catalog" className={css.btn}>
        Catalog
      </NavLink>
    </div>
  );
}
