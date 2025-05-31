import { useSelector } from "react-redux";
import { selectContacts } from "../redux/contactsSlice";
import Contact from "./Contact";
import styles from "./ContactsList.module.css";

const ContactsList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div className={styles.list}>
      {contacts.length === 0 ? (
        <p className={styles.emptyState}>Kayıt bulunamadı</p>
      ) : (
        contacts.map(({ id, name, phone }) => (
          <Contact key={id} id={id} name={name} phone={phone} />
        ))
      )}
    </div>
  );
};

export default ContactsList;
