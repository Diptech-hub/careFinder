import React from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`mx-1 ${
            i === currentPage
              ? "bg-teal-500 text-white"
              : "bg-white text-teal-500"
          } rounded-full border border-teal-500 hover:bg-teal-500 hover:text-white mb-8`}
        >
          <button
            className="px-4 py-2 focus:outline-none"
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <nav>
      <ul className="flex mt-4">{renderPageNumbers()}</ul>
    </nav>
  );
};

export default Pagination;
