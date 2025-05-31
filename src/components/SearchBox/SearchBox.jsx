import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  return (
    <div className={styles.searchBox}>
      <input
        className={styles.input}
        type="text"
        value={filterValue}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Ara..."
      />
    </div>
  );
};

export default SearchBox;
