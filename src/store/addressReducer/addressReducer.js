import { createSlice } from "@reduxjs/toolkit";

const intialData = {
  addressData: [],
  tempAddress: [],
  searchText: "",
};

const AddressSlice = createSlice({
  name: "address",
  initialState: intialData,
  reducers: {
    AddAddressList(state, action) {
      state.addressData = [...action.payload];
      state.tempAddress = [...action.payload];
    },
    SearchAddress(state, action) {
      const searchKey = action.payload.searchText;
      if (searchKey) {
        const myAddress = state.tempAddress;
        state.searchText = searchKey;
        var filteredProducts = myAddress.filter((x) => {
          return x.payload_id.toLowerCase().includes(searchKey.toLowerCase());
        });
        state.addressData = [...filteredProducts];
      }
    },
    ClearFilter(state) {
      state.addressData = [...state.tempAddress];
      state.searchText = "";
    },
  },
});

export const AddressAction = AddressSlice.actions;
export default AddressSlice;
