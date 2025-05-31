import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";
import { useState } from "react";

import styles from "./ContactsForm.module.css";

const ContactsForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addContact({ id: Date.now(), name, phone }));
    setName("");
    setPhone("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Adı girin"
        required
      />
      <input
        className={styles.input}
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Telefon girin"
        required
      />
      <button className={styles.button} type="submit">
        Ekle
      </button>
    </form>
  );
};

export default ContactsForm;
