import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { AddressAction } from "../store/addressReducer/addressReducer";
import { HistoryActions } from "../store/productReducer/HistorySlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const location = useLocation();

  const changeHandler = (e) => {
    const newKey = e.target.value;

    if (location.pathname === "/address") {
      addressSearch(newKey);
    } else {
      historySearch(newKey);
    }
    
  };

  const historySearch = (key) => {
    if (key.length !== 0) {
      setSearchKey(key);
      dispatch(HistoryActions.SearchHistory({ searchText: searchKey }));
    } else {
      setSearchKey("");
      dispatch(HistoryActions.ClearFilter());
    }
  };

  const addressSearch = (key) => {
    if (key.length !== 0) {
      setSearchKey(key);
      dispatch(AddressAction.SearchAddress({ searchText: searchKey }));
    } else {
      setSearchKey("");
      dispatch(AddressAction.ClearFilter());
    }
  };

  return (
    <header className="sectionFlex">
      <div className="center">
        <div className="headerBox">
          <nav>
            <NavLink exact to="/" activeClassName="activeLink">
              History
            </NavLink>
            <NavLink exact to="/address" activeClassName="activeLink">
              Address
            </NavLink>
          </nav>
          <input
            type="text"
            value={searchKey}
            onChange={changeHandler}
            placeholder="Search..."
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
