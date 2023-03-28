import React from "react";
import reviews from "../data/reviews";
import ReviewItem from "./ReviewItem";
import Title from "./Title";

export default function Review() {
  return (<> 
    <Title className="pt-2">Reviews</Title>
    <div className="flex flex-col md:flex-row items-center justify-center">
     
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <ReviewItem
            imgUrl={review.imgUrl}
            name={review.name}
            title={review.title}
            link={review.link}
            text={review.text}
          />
        ))}
      </div>
    </div>
    
  </>);
}
