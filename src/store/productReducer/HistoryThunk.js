import { HistoryActions } from "./HistorySlice";

export const GetHistoryData = () => {
  return async (dispatch) => {
    const fetchHistory = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/history");
      if (!response.ok) {
        throw new Error("Could not fetch history !");
      }
      const data = await response.json();
      return data;
    };

    try {
      const historyData = await fetchHistory();
      dispatch(HistoryActions.AddHistoryList(historyData));
    } catch (error) {
      throw new Error(error);
    }
  };
};
