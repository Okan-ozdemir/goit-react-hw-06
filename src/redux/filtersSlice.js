/**
 * Filters Slice
 * 
 * Arama filtresi yönetimi için Redux slice.
 * Kullanıcının girdiği arama terimini saklar.
 * 
 * State yapısı:
 * {
 *   value: string // Arama terimi
 * }
 */

import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    value: "" // Başlangıçta boş arama terimi
  },
  reducers: {
    // Arama terimini güncelleme
    setFilter: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
