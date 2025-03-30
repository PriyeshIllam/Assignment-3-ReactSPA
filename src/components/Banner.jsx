import { FaHotel, FaPlane, FaUtensils, FaMapMarkedAlt, FaBuilding, FaSearch } from "react-icons/fa";
import { MdOutlineTour } from "react-icons/md";
import styles from "../styles/Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h2>Explore places to rent</h2>
      
      {/* Search Bar with Icon */}
      <div className={styles.searchSection}>
        <div className={styles.searchBox}>
          <FaSearch className={styles.searchIcon} />
          <input type="text" placeholder="Destination" className={styles.input} />
          <button className={styles.searchButton}>Search</button>
        </div>
      </div>

      {/* Categories with Icons */}
      <div className={styles.categories}>
        <button><FaMapMarkedAlt className={styles.icon} /> Search All</button>
        <button><FaHotel className={styles.icon} /> Hotels</button>
        <button><MdOutlineTour className={styles.icon} /> Things to Do</button>
        <button><FaUtensils className={styles.icon} /> Restaurants</button>
      </div>
    </div>
  );
}
