import ReactPaginate from "react-paginate";

function Pagination({ totalPages, setQuotes, setLoading }) {
  const handlePageClick = (data) => {
    const pageNumber = data.selected + 1;
    const fetchData = async () => {
      fetch(`https://api.quotable.io/quotes?page=${pageNumber}`)
        .then((data) => data.json())
        .then((res) => {
          setQuotes(res.results);
          setLoading(false);
        });
    };
    fetchData();
  };

  return (
    <div className="w-full items-center justify-center mx-auto">
      <ReactPaginate
        breakLabel="..."
        nextLabel="→"
        previousLabel="←"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
        containerClassName="sm:py-4 sm:px-6 p-2 border-2 mt-8 flex items-center justify-center w-2/3 mx-auto mb-10 shadow-lg"
        pageLinkClassName="sm:py-4 sm:px-6 p-2 bg-white"
        previousLinkClassName="sm:py-4 sm:px-6 p-2 bg-white"
        nextLinkClassName="sm:py-4 sm:px-6 p-2 bg-white"
        breakLinkClassName="sm:py-4 sm:px-6 p-2 bg-white"
        activeLinkClassName="bg-blue-100"
      />
    </div>
  );
}

export default Pagination;
