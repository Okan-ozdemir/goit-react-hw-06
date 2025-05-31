import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';

const validationSchema = Yup.object({
  name: Yup.string().required('İsim gerekli'),
  number: Yup.string().required('Numara gerekli')
});

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = (values, { resetForm }) => {
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isExist) {
      alert(`${values.name} zaten rehberde mevcut!`);
      return;
    }

    dispatch(addContact({ id: nanoid(), ...values }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="form-group">
          <Field type="text" name="name" placeholder="İsim" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div className="form-group">
          <Field type="tel" name="number" placeholder="Numara" />
          <ErrorMessage name="number" component="div" className="error" />
        </div>
        <button type="submit">Ekle</button>
      </Form>
    </Formik>
  );
};

export default ContactsForm; 