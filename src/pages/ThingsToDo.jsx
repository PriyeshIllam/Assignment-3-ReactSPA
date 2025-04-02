import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import data from "../data/data"; // Import data
import styles from "../styles/ThingsToDo.module.css";

export default function ThingsToDo() {
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
    <div className={styles.thingsToDoContainer}>
      {data.thingsToDo.map((activity) => (
        <div key={activity.id} className={styles.activityCard}>
          <img src={activity.image} alt={activity.name} className={styles.activityImage} />
          
          <div className={styles.activityInfo}>
            <h3 className={styles.activityName}>{activity.name}</h3>
            <p className={styles.activityLocation}>{activity.location}</p>
            <p className={styles.activityDescription}>{activity.description}</p>
            
            {/* ⭐️ Rating */}
            <div className={styles.rating}>
              {renderStars(activity.rating)}
              <span className={styles.ratingText}>{activity.rating.toFixed(1)} ({activity.reviews} reviews)</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
