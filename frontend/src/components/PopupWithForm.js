import close from "../images/Close-icon.svg";

function PopupWithForm({ title, name, isOpen, children, onClose, button, onSubmit }) {
  return (
    <section className={`popup popup_${name} ${isOpen}`}>
      <div className="popup__container">
        <form className="popup__content" name={name} onSubmit={onSubmit}>
          <button
            className="button button_type_close"
            onClick={onClose}
            type="button"
          >
            <img
              src={close}
              alt="Крестик закрытия"
              className="popup__close-icon"
            />
          </button>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button className="button button_type_save" type="submit">
            {button}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
