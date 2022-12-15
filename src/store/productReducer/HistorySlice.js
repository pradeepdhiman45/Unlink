import { createSlice } from "@reduxjs/toolkit";

const intialData = {
  historyData: [],
  tempHistory: [],
  searchText: "",
};

const HistorySlice = createSlice({
  name: "history",
  initialState: intialData,
  reducers: {
    AddHistoryList(state, action) {
      state.historyData = [...action.payload];
      state.tempHistory = [...action.payload];
    },
    SearchHistory(state, action) {
      const searchKey = action.payload.searchText;
      if (searchKey) {
        const myHistory = state.tempHistory;
        state.searchText = searchKey;
        var filteredProducts = myHistory.filter((x) => {
          return x.title.toLowerCase().includes(searchKey.toLowerCase());
        });
        state.historyData = [...filteredProducts];
      }
    },
    ClearFilter(state) {
      state.historyData = [...state.tempHistory];
      state.searchText = "";
    },
  },
});

export const HistoryActions = HistorySlice.actions;
export default HistorySlice;
