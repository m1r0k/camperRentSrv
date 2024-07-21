import { Icon } from "@iconify/react";
import css from "./Reviews.module.css";

export default function Reviews({ reviews }) {
  const renderStars = (rating) => {
    const totalStars = 5;
    const yellowStars = Math.round(rating);

    return Array.from({ length: totalStars }, (_, index) => (
      <Icon
        key={index}
        icon="tabler:star-filled"
        style={{ color: index < yellowStars ? css.yellow : css.blue }}
      />
    ));
  };

  return (
    <div className={css.container}>
      {reviews.map((review, index) => (
        <div key={index} className={css.reviewContainer}>
          <div className={css.reviewHeader}>
            <div className={css.reviewerInitial}>
              {review.reviewer_name.charAt(0)}
            </div>
            <div className={css.reviewContent}>
              <p className={css.reviewerName}>{review.reviewer_name}</p>
              <div className={css.starsAndRating}>
                {renderStars(review.reviewer_rating)}
              </div>
            </div>
          </div>
          <p className={css.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
