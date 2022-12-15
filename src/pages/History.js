import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "../component/listItem";
import { GetHistoryData } from "../store/productReducer/HistoryThunk";

let visited = false;

const History = () => {
  const dispatch = useDispatch();
  const HistoryData = useSelector((state) => state.history.historyData);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    if (!visited) {
      dispatch(GetHistoryData());
      visited = true;
    }
  }, [dispatch]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = HistoryData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(HistoryData.length / itemsPerPage);

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

export default History;
