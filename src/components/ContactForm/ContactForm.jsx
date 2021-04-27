import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  render() {
    return (
      <section>
        <h1>Phonebook</h1>{" "}
        <form onSubmit={this.props.onFormSubmit}>
          <label className={styles["contact-label"]}>
            Name
            <input
              className={styles["contact-input"]}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              onChange={this.props.inputHandler}
              required
            />
          </label>
          <label className={styles["contact-label"]}>
            Number
            <input
              className={styles["contact-input"]}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              onChange={this.props.inputHandler}
              required
            />
          </label>
          <button className="btn-submit" type="submit">
            Add contact
          </button>
        </form>
      </section>
    );
  }
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func,
  inputHandler: PropTypes.func,
};

export default ContactForm;
