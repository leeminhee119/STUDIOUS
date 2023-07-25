import React from "react";
import styled from "styled-components";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    } else {
      const firstPage = Math.max(currentPage - 2, 1);
      const lastPage = Math.min(firstPage + 4, totalPages);
      return Array.from(
        { length: lastPage - firstPage + 1 },
        (_, index) => firstPage + index
      );
    }
  };

  return (
    <PaginationContainer>
      <PageButton onClick={handlePrevPage}>{"<"}</PageButton>
      <PageNumberContainer>
        {renderPageNumbers().map((pageNumber) => (
          <PageButton
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            active={pageNumber === currentPage}>
            {pageNumber}
          </PageButton>
        ))}
      </PageNumberContainer>
      <PageButton onClick={handleNextPage}>{">"}</PageButton>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
`;

const PageNumberContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PageButton = styled.button`
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.gray800};
  width: 4.5rem;
  height: 4.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 50%;
  cursor: pointer;
  margin: 0 0.5rem;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.mainDark : "white"};
  color: ${({ active, theme }) => (active ? "white" : theme.colors.gray800)};
`;

export default Pagination;
