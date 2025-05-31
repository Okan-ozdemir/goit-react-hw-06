/**
 * Telefon Rehberi Uygulaması
 * 
 * Bu uygulama, kullanıcıların kişileri ekleyip silebileceği ve arayabileceği
 * basit bir telefon rehberi uygulamasıdır.
 * 
 * Özellikler:
 * - Kişi ekleme (isim ve numara)
 * - Kişi silme
 * - Kişi arama
 * - Veriler local storage'da saklanır (Redux Persist)
 */

import ContactsForm from "./components/ContactsForm";
import ContactsList from "./components/ContactsList";
import SearchBox from "./components/SearchBox";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">İletişim Listesi</h1>
      {/* Kişi arama bileşeni */}
      <SearchBox />
      {/* Yeni kişi ekleme formu */}
      <ContactsForm />
      {/* Kişi listesi */}
      <ContactsList />
    </div>
  );
};

export default App;
