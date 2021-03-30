import close from "../images/Close-icon.svg";
import accept from "../images/Union.svg";
import denied from "../images/Union-2.svg";

function InfoToolTip({ isOpen, onClose,  status }) {



  return (
    <section className={`popup popup_info ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__container">
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
        {status === 'error' ?  
        <>
        <img
          className="popup__image popup__image_denied"
          src={denied}
          alt="Картинка"
        />
        <p className="popup__title">
          Что-то не так! Попробуйте еще раз.
        </p> 
        </> :  <>
        <img
          className="popup__image popup__image_denied"
          src={accept}
          alt="Картинка"
        />
        <p className="popup__title">
          Вы успешно зарегестрировались!
        </p> 
        </>
        }
      </div>
    </section>
  );
}


export default InfoToolTip;