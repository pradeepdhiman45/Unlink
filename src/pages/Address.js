import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import AddressListItem from "../component/addressListItem";
import { GetAddressData } from "../store/addressReducer/addressThunk";

let visited = false;

const Address = () => {
  const addressData = useSelector((state) => state.address.addressData);
  const dispatch = useDispatch();
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    if (!visited) {
      dispatch(GetAddressData());
      visited = true;
    }
  }, [dispatch]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = addressData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(addressData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % addressData.length;
    setItemOffset(newOffset);
  };

  return (
    <section className="sectionFlex">
      <div className="center">
        <main>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            className="pagination"
            activeLinkClassName="paginationActive"
          />
          {currentItems &&
            currentItems.map((item) => (
              <AddressListItem key={item.payload_id} item={item} />
            ))}
        </main>
      </div>
    </section>
  );
};

export default Address;
