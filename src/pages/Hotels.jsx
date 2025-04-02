import { useState } from "react";
import { FaHeart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import data from "../data/data"; // Import data
import styles from "../styles/Hotels.module.css";

export default function Hotels({ title }) {  // Destructure `title` from props
  const [likedHotels, setLikedHotels] = useState([]);

  const toggleLike = (hotelId) => {
    setLikedHotels((prev) =>
      prev.includes(hotelId) ? prev.filter((id) => id !== hotelId) : [...prev, hotelId]
    );
  };

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
    <div className={styles.hotelsPageContainer}> {/* Container for entire page */}
      {/* Page Title */}
      <h1 className={styles.pageTitle}>{title}</h1>  {/* Title prop here */}

      <div className={styles.hotelsContainer}>
        {data.hotels.map((hotel) => (
          <div key={hotel.id} className={styles.hotelCard}>
            <img src={hotel.image} alt={hotel.name} className={styles.hotelImage} />
            
            {/* Heart Icon for Liking */}
            <FaHeart
              className={`${styles.heartIcon} ${likedHotels.includes(hotel.id) ? styles.liked : ""}`}
              onClick={() => toggleLike(hotel.id)}
            />
            
            <div className={styles.hotelInfo}>
              <h3 className={styles.hotelName}>{hotel.name}</h3>
              <p className={styles.hotelLocation}>{hotel.location}</p>
              
              {/* ⭐️ Dynamic Star Rating */}
              <div className={styles.rating}>
                {renderStars(hotel.rating)}
                <span className={styles.ratingText}>{hotel.rating.toFixed(1)}</span>
              </div>

              <p className={styles.hotelPrice}>{hotel.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
