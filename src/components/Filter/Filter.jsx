import { connect } from 'react-redux';
import { contactsSelectors, contactsActions } from '../../redux/contacts';
import { label, input } from './Filter.module.scss';

const Filter = ({ value, onChange }) => (
  <label className={label}>
    Search by name
    <input className={input} value={value} onChange={onChange} />
  </label>
);

const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsActions.contactFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
