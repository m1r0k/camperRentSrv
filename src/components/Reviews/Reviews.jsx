import { Icon } from "@iconify/react";
import css from "./Reviews.module.css";

export default function Reviews({ camper }) {
  const renderStars = (rating) => {
    const totalStars = 5;
    const yellowStars = Math.round(rating);

    return Array.from({ length: totalStars }, (_, index) => (
      <Icon
        key={index}
        icon="tabler:star-filled"
        style={{ color: index < yellowStars ? css.yellow : css.grey }}
      />
    ));
  };

  return (
    <div>
      {camper.reviews.length > 0 ? (
        <ul>
          {camper.reviews.map(({ review, index }) => (
            <li key={index}>
              <div>
                {review.reviewer_name.charAt(0)}
                <div>
                  <p>{review.reviewer_name} </p>
                  <div>
                    {renderStars(review.reviewer_rating)}
                    <span>
                      {review.reviewer_rating} ({camper.reviews.length} Reviews)
                    </span>
                  </div>
                </div>
              </div>
              <p>{review.comment} </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this campervan</p>
      )}
    </div>
  );
}
