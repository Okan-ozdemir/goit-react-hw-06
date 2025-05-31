import ContactsForm from "./components/ContactsForm";
import ContactsList from "./components/ContactsList";
import SearchBox from "./components/SearchBox";

const App = () => {
  return (
    <div>
      <h1>İletişim Listesi</h1>
      <SearchBox />
      <ContactsForm />
      <ContactsList />
    </div>
  );
};

export default App;
