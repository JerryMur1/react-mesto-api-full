import React from 'react'
import PopupWithForm from './PopupWithForm'



function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}){
const inputRef = React.useRef()


    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: inputRef.current.value,
        });
      }
      


    return( 
    <PopupWithForm
        title="Обновить профиль"
        name="avatar"
        isOpen={isOpen ? "popup_is-opened" : ""}
        onClose={onClose}
        button="Сохранить"
        onSubmit={handleSubmit}
        children={
          <>
            <input
                ref={inputRef}
              placeholder ='Ссылка на картинку'
              required
              type="url"
              name="avatar"
              minLength="2"
              id="link"
              className="popup__name popup__place_type_subtitle"
            />
            <span id="link-error" className="error"></span>
          </>
        }
      />)
}

export default EditAvatarPopup