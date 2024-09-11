//import React from 'react'
import { IconButton } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";


export function TablePagination({ currentPage, setCurrentPage, totalPages }) {
  const handlePageClick = (index) => {
    setCurrentPage(index);
  };

  const next = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex justify-end gap-2 mt-3">
      <IconButton
        variant="text"
        className="flex items-center justify-center"
        onClick={prev}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon strokeWidth={2} className="h-6 w-6 text-Green" />
      </IconButton>
      <div className="flex gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <IconButton
            key={index}
            variant={currentPage === index + 1 ? "filled" : "text"}
            onClick={() => handlePageClick(index + 1)}
            className={`rounded-lg w-7 h-7 text-sm flex items-center justify-center self-center ${
                currentPage === index + 1
                  ? "bg-Green text-white"
                  : "bg-[#EDEDEE] text-[#626364]"
              } hover:bg-Green hover:text-white`}
          >
            {index + 1}
          </IconButton>
        ))}
      </div>
      <IconButton
        variant="text"
        className="flex items-center justify-center"
        onClick={next}
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon strokeWidth={2} className="h-6 w-6 text-Green" />
      </IconButton>
    </div>
  );
}

TablePagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};