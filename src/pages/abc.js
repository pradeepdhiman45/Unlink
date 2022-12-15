import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "../component/listItem";
import usePagination from "../hooks/usePagination";
import { GetHistoryData } from "../store/productReducer/HistoryThunk";

let visited = false;

const ABC = () => {
  const dispatch = useDispatch();
  const [itemOffset, setItemOffset] = useState(0);
  const HistoryData = useSelector((state) => state.history.historyData);

  const [currentItems, pageCount] = usePagination(HistoryData, itemOffset)

  useEffect(() => {
    if (!visited) {
      dispatch(GetHistoryData());
      visited = true;
    }
  }, [dispatch]);

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % HistoryData.length;
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
          {currentItems && currentItems.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </main>
      </div>
    </section>
  );
};

export default ABC;
