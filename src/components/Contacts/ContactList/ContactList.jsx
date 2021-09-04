import PropTypes from "prop-types";
import ContactListItem from "components/Contacts/ContactListItem/";
import { List } from "./ContactList.styled";

function ContactList({ list, onDeleteContact }) {
  return (
    <List>
      {list.map((item) => {
        const { id, name, number } = item;

        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </List>
  );
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ContactList;
