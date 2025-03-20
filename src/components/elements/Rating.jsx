import StarRatings from "react-star-ratings";

/* eslint-disable react/prop-types */
export const Rating = ({ rating, color = "black" }) => {
  let ratingarray = Array(5).fill(false);

  for (let i = 0; i < rating; i++) {
    ratingarray[i] = true;
  }

  return (
    <>
      <StarRatings
        rating={rating}
        starRatedColor={color}
        numberOfStars={5}
        name="rating"
        starDimension="30px"
        starSpacing="0px"
      />
    </>
  );
};
