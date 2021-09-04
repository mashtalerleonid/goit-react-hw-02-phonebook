import PropTypes from "prop-types";

function Filter({ filterChange, filter }) {
  return (
    <label>
      Find
      <input value={filter} onChange={filterChange} />
    </label>
  );
}

Filter.propTypes = {
  filterChange: PropTypes.func,
  filter: PropTypes.string.isRequired,
};

export default Filter;
