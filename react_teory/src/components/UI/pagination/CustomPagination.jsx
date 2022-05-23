import React from "react";
import { usePagination } from "../../../hooks/usePagination";
import CustomButton from "../button/CustomButton";
import classes from "./CustomPagination.module.css"

function CustomPagination({ totalPages, currentPage, setPage, ...props }) {
    const [pageArray] = usePagination(totalPages);
  return (
    <div className={classes.customPagination} {...props}>
      {pageArray.map((index) => (
        <CustomButton
          key={index}
          isActive={currentPage === index}
          onClick={() => setPage(index)}
        >
          {index}
        </CustomButton>
      ))}
    </div>
  );
}

export default CustomPagination;
