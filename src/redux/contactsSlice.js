/**
 * Contacts Slice
 * 
 * Kişi listesi yönetimi için Redux slice.
 * Kişilerin eklenmesi ve silinmesi işlemlerini yönetir.
 * 
 * State yapısı:
 * {
 *   items: [
 *     { id: string, name: string, number: string }
 *   ]
 * }
 */

import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [] // Başlangıçta boş bir kişi listesi
  },
  reducers: {
    // Yeni kişi ekleme
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    // Kişi silme (ID'ye göre)
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    }
  }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
