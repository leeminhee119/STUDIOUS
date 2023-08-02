import styled from "styled-components";
import { ReactComponent as FilterIcon } from "assets/icons/filter.svg";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import FilterModal from "components/Search/FilterModal";
import StudyCafeGridItem from "components/StudyCafeGridItem";
import Pagination from "components/Pagination";

const SearchResult = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortOption, setSortOption] = useState("가격낮은순");
  const location = useLocation();
  const searchResult = location.state?.searchResult || [];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  const totalPages = Math.ceil(searchResult.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, searchResult.length);
  const displayedItems = searchResult
    ? searchResult.slice(startIndex, endIndex)
    : [];

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <SearchResultContainer>
      <FilterSortContainer>
        <SortSelect value={sortOption} onChange={handleSortOptionChange}>
          <option value="가격낮은순">가격 낮은 순</option>
          <option value="리뷰많은순">리뷰 많은 순</option>
          <option value="예약많은순">예약 많은 순</option>
          <option value="평점높은순">평점 높은 순</option>
          <option value="평점낮은순">평점 낮은 순</option>
        </SortSelect>

        <FilterButton onClick={handleFilterButtonClick}>
          <FilterIcon />
        </FilterButton>
      </FilterSortContainer>

      {isModalOpen && <FilterModal onClose={() => setIsModalOpen(false)} />}

      <GridContainer>
        {displayedItems.map((item, index) => (
          <StyledStudyCafeGridItem key={item.id} item={item} index={index} />
        ))}
      </GridContainer>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </SearchResultContainer>
  );
};

const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterSortContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10rem 0 2.6rem 97rem;
`;

const SortSelect = styled.select`
  ${({ theme }) => theme.fonts.caption1};
  color: ${({ theme }) => theme.colors.gray800};
  border: none;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(28rem, 1fr));
  gap: 5rem;
  max-width: 122rem;
  width: 100%;
  margin: 3.5rem 5rem 5rem 5rem;
  justify-items: center;
`;

const FilterButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

const StyledStudyCafeGridItem = styled(StudyCafeGridItem)`
  margin-top: 2rem;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PageButton = styled.button`
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.gray800};
  background-color: transparent;
  border: none;
  margin: 0 0.5rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default SearchResult;
