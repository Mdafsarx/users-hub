import { Pagination as MuiPagination, Skeleton } from "@mui/material";
import React from "react";

interface IProps {
  pages: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  page: number;
}

const Pagination: React.FC<IProps> = ({ pages, handlePageChange, page }) => {
  return (
    <>
      {pages ? (
        <MuiPagination
          count={pages}
          onChange={handlePageChange}
          page={page}
          color="primary"
        />
      ) : (
        <Skeleton width={200} height={40} />
      )}
    </>
  );
};

export default Pagination;
