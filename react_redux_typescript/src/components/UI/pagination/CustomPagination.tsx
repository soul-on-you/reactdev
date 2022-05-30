import React from "react";
import { usePagination } from "../../../hooks/usePagination";
// import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Button from "../button/CustomButton";
import styles from "./CustomPagination.module.css";

interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  setPage(pageNumber: number): void;
  props?: any;
}

const Pagination: React.FunctionComponent<IPaginationProps> = ({
  totalPages,
  currentPage,
  setPage,
  ...props
}) => {
  const pageArray = usePagination(totalPages);

  return (
    <div className={styles.customPagination} {...props}>
      {pageArray.map((index) => (
        <Button
          key={index}
          isActive={currentPage === index}
          onClick={() => setPage(index)}
        >
          {index.toString()}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;