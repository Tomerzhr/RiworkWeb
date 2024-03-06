import PropTypes from "prop-types";
import { Pagination, Stack } from "@mui/material";

function GlobalPagination({ cardsPerPage, totalCards, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Stack spacing={2} sx={{ padding: "30px", alignItems: "center" }}>
      <Pagination count={pageNumbers.length} onClick={(e) => paginate(e.target.textContent)} />
    </Stack>
  );
}

GlobalPagination.propTypes = {
  cardsPerPage: PropTypes.number.isRequired,
  totalCards: PropTypes.number,
  paginate: PropTypes.func.isRequired,
};

export default GlobalPagination;
