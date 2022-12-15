import { AddressAction } from "./addressReducer";


export const GetAddressData = () => {
  return async (dispatch) => {
    const fetchAddress = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/payloads");
      if (!response.ok) {
        throw new Error("Could not fetch history !");
      }
      const data = await response.json();
      return data;
    };

    try {
      const addressData = await fetchAddress();
      dispatch(AddressAction.AddAddressList(addressData));
    } catch (error) {
      throw new Error(error);
    }
  };
};
