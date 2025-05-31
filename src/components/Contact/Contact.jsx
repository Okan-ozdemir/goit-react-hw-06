import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";
import styles from "./Contact.module.css";

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.contact}>
      <p>
        {name}: {phone}
      </p>
      <button
        className={styles.deleteButton}
        onClick={() => dispatch(deleteContact(id))}
      >
        Sil
      </button>
    </div>
  );
};

export default Contact;
