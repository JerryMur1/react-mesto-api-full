import close from "../images/Close-icon.svg";

function ImagePopup({ card, onClose }) {
  return (
    <section className={`popup popup_modal ${card && "popup_is-opened"}`}>
      <div className="popup__group">
        <button
          className="button button_type_close"
          type="button"
          onClick={onClose}
        >
          <img
            src={close}
            alt="Крестик закрытия"
            className="popup__close-icon"
          />
        </button>
        <img
          className="popup__image"
          src={card ? card.link : "popup_is-opened"}
          alt="Картинка"
        />
        <p className="popup__subtitle">
          {card ? card.name : "popup_is-opened"}
        </p>
      </div>
    </section>
  );
}

export default ImagePopup;
