import PropTypes from "prop-types";
import { Item } from "./ContactListItem.styled";

function ContactListItem({ id, name, number, onDeleteContact }) {
  return (
    <Item>
      {name}: {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </Item>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};

export default ContactListItem;
