/**
 * Kişi Listesi Bileşeni
 * 
 * Bu bileşen, kayıtlı kişilerin listesini gösterir.
 * Filtrelenmiş kişi listesini render eder ve silme işlemlerini yönetir.
 * 
 * Özellikler:
 * - Filtrelenmiş kişi listesi gösterimi
 * - Kişi silme fonksiyonu
 * - İsim ve numara görüntüleme
 */

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactsList = () => {
  const dispatch = useDispatch();
  // Redux store'dan verileri al
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.value);

  // Arama terimine göre kişileri filtrele
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}: {number}</span>
          <button 
            className="delete-btn"
            onClick={() => dispatch(deleteContact(id))}
          >
            Sil
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList; 