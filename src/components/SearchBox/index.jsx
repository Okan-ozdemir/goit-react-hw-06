/**
 * Arama Kutusu Bileşeni
 * 
 * Bu bileşen, kişi listesinde arama yapmak için kullanılan
 * arama kutusunu oluşturur.
 * 
 * Özellikler:
 * - Anlık arama (her karakter girildiğinde filtreleme yapar)
 * - Redux ile durum yönetimi
 */

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  // Redux store'dan mevcut arama terimini al
  const filter = useSelector(state => state.filters.value);

  return (
    <div className="search-box">
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        placeholder="Kişi ara..."
      />
    </div>
  );
};

export default SearchBox; 