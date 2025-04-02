import styles from "../styles/Home.module.css";
import data from "../data/data";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function Home({ setCurrentPage,title }) {
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
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>Discover amazing hotels, activities, and restaurants worldwide.</p>

      {/* Featured Hotels */}
      <section className={styles.section}>
        <h2>Featured Hotels</h2>
        <div className={styles.grid}>
          {data.hotels.slice(0, 3).map((hotel) => (
            <div key={hotel.id} className={styles.card}>
              <img src={hotel.image} alt={hotel.name} className={styles.image} />
              <div className={styles.info}>
                <h3>{hotel.name}</h3>
                <p>{hotel.location}</p>
                <div className={styles.rating}>{renderStars(hotel.rating)}</div>
                <p className={styles.price}>{hotel.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.viewMore} onClick={() => setCurrentPage("hotels")}>
          View All Hotels →
        </button>
      </section>

      {/* Featured Activities */}
      <section className={styles.section}>
        <h2>Things to Do</h2>
        <div className={styles.grid}>
          {data.thingsToDo.slice(0, 3).map((activity) => (
            <div key={activity.id} className={styles.card}>
              <img src={activity.image} alt={activity.name} className={styles.image} />
              <div className={styles.info}>
                <h3>{activity.name}</h3>
                <p>{activity.location}</p>
                <div className={styles.rating}>{renderStars(activity.rating)}</div>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.viewMore} onClick={() => setCurrentPage("thingsToDo")}>
          View More Activities →
        </button>
      </section>

      {/* Featured Restaurants */}
      <section className={styles.section}>
        <h2>Top Restaurants</h2>
        <div className={styles.grid}>
          {data.restaurants.slice(0, 3).map((restaurant) => (
            <div key={restaurant.id} className={styles.card}>
              <img src={restaurant.image} alt={restaurant.name} className={styles.image} />
              <div className={styles.info}>
                <h3>{restaurant.name}</h3>
                <p>{restaurant.location}</p>
                <p className={styles.cuisine}>{restaurant.cuisine} Cuisine</p>
                <div className={styles.rating}>{renderStars(restaurant.rating)}</div>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.viewMore} onClick={() => setCurrentPage("restaurants")}>
          Explore Restaurants →
        </button>
      </section>
    </div>
  );
}
