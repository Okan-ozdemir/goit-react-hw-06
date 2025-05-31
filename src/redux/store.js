/**
 * Redux Store Yapılandırması
 * 
 * Bu dosya Redux store'un temel yapılandırmasını içerir.
 * Redux Persist kullanılarak veriler local storage'da saklanır.
 * 
 * Kullanılan Redux Slices:
 * - contactsSlice: Kişi listesi yönetimi
 * - filtersSlice: Arama filtresi yönetimi
 */

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

// Redux Persist yapılandırması
const contactsPersistConfig = {
  key: "contacts", // Local storage'da kullanılacak anahtar
  storage, // Depolama yöntemi (localStorage)
  whitelist: ["items"], // Sadece items dizisini persist et
};

// Persist edilmiş reducer oluştur
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

// Store yapılandırması
const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
});

// Persistor oluştur
const persistor = persistStore(store);

export { store, persistor };
