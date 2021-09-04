import PropTypes from "prop-types";
import { Label, Input } from "./Filter.styled";

function Filter({ filterChange, filter }) {
  return (
    <Label>
      Find contacts by name:
      <Input value={filter} onChange={filterChange} />
    </Label>
  );
}

Filter.propTypes = {
  filterChange: PropTypes.func,
  filter: PropTypes.string.isRequired,
};

export default Filter;
