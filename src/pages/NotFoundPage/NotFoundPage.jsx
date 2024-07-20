import camper_van_icon from "../../assets/icons/no_camper_icon.webp";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.bg}>
      <p className={css.txt}>Sorry, page not found</p>
      <img src={`${camper_van_icon}`} alt="camper van" className={css.img} />
    </div>
  );
};

export default NotFoundPage;
