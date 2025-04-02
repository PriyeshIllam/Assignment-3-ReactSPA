import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import data from "../data/data"; // Import data
import styles from "../styles/Restaurants.module.css";

export default function Restaurants() {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className={styles.filledStar} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className={styles.halfStar} />);
      } else {
        stars.push(<FaRegStar key={i} className={styles.emptyStar} />);
      }
    }
    return stars;
  };

  return (
    <div className={styles.restaurantsContainer}>
      {data.restaurants.map((restaurant) => (
        <div key={restaurant.id} className={styles.restaurantCard}>
          <img src={restaurant.image} alt={restaurant.name} className={styles.restaurantImage} />
          
          <div className={styles.restaurantInfo}>
            <h3 className={styles.restaurantName}>{restaurant.name}</h3>
            <p className={styles.restaurantLocation}>{restaurant.location}</p>
            <p className={styles.restaurantCuisine}>{restaurant.cuisine} Cuisine</p>
            
            {/* ⭐️ Rating */}
            <div className={styles.rating}>
              {renderStars(restaurant.rating)}
              <span className={styles.ratingText}>{restaurant.rating.toFixed(1)} ({restaurant.reviews} reviews)</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
