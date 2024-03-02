import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import styles from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const filter = e.target.value.toLowerCase();
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={handleFilterChange}
        required
        className={styles.input}
      />
    </div>
  );
}

export default Filter;
