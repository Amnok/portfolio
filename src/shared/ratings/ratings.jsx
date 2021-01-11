import React from 'react';
import ReactStars from 'react-rating-stars-component';
import styles from './ratings.module.css';

export default function Ratings({ ratings }) {
  const renderRatings = () => {
    return ratings.map(({ name, id, rating }) => {
      return (
        <div className={styles.wrapper}>
          <h2>{name}</h2>{' '}
          <ReactStars
            count={rating}
            size={32}
            color="#ffd700"
            isHalf={true}
            edit={false}
          />
        </div>
      );
    });
  };
  return <div className={styles.container}>{renderRatings()}</div>;
}