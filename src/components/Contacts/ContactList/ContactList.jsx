import PropTypes from "prop-types";
import ContactListItem from "components/Contacts/ContactListItem/";

function ContactList({ list, onDeleteContact }) {
  console.log();
  return (
    <ul>
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
    </ul>
  );
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ContactList;
