import React from "react";
import styled from "styled-components";

const StarRating = ({ label }) => {
  const [rating, setRating] = React.useState(0);

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  return (
    <StarRatingWrapper>
      <StarRatingLabel>{label}</StarRatingLabel>
      <StarRatingStars>
        {[1, 2, 3, 4, 5].map((index) => (
          <StarRatingStarRadio
            key={index}
            type="radio"
            name={label}
            value={index}
            checked={rating === index}
            onChange={handleRatingChange}
          />
        ))}
        {[1, 2, 3, 4, 5].map((index) => (
          <StarRatingStarIcon key={index} filled={index <= rating} />
        ))}
      </StarRatingStars>
    </StarRatingWrapper>
  );
};

const StarRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 10rem;
`;

const StarRatingLabel = styled.div`
  ${({ theme }) => theme.fonts.body1Bold};
  color: ${({ theme }) => theme.colors.gray900};
`;

const StarRatingStars = styled.div`
  display: inline-flex;
  margin-left: 2rem;
`;

const StarRatingStarRadio = styled.input`
  display: none;
`;

const StarRatingStarIcon = styled.span`
  font-size: 2rem;
  color: ${({ theme, filled }) => (filled ? "#F9CA24" : theme.colors.gray300)};
  cursor: pointer;
  user-select: none;
  &:before {
    content: "★";
  }
`;

export default StarRating;
