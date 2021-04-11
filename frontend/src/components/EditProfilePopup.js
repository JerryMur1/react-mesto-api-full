import React from 'react'
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../context/CurrentUserContext'

function EditProfilePopup({isOpen, onClose, onUpdateUser}){
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const currentUser = React.useContext(CurrentUserContext);
    function handleNameChange(e){
        setName(e.target.value)
    }
    function handleDescriptionChange(e){
        setDescription(e.target.value)
    }


   

// После загрузки текущего пользователя из API
// его данные будут использованы в управляемых компонентах.
React.useEffect(() => {
  setName(currentUser.name || '');
  setDescription(currentUser.about || '');
}, [currentUser]); 


function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }
    return (
    <PopupWithForm
          title="Редактировать профиль"
          name="edit"
          isOpen={isOpen ? "popup_is-opened" : ""}
          onClose={onClose}
          onSubmit={handleSubmit}
          button="Сохранить"
          children={
            <>
              <input
                value={name}
                onChange={handleNameChange}
                placeholder='Имя'
                required
                type="text"
                name='name'
                minLength="2"
                maxLength="40"
                id="name-profile"
                className="popup__name popup__name_type_title"
              />
              <span id="name-profile-error" className="error"></span>
              <input
              onChange={handleDescriptionChange}
                value={description}
                placeholder='О себе'
                required
                type="text"
                name='about'
                minLength="2"
                maxLength="200"
                id="secondname-profile"
                className="popup__name popup__name_type_subtitle"
              />
              <span id="secondname-profile-error" className="error"></span>
            </>
          }
        />
    )
}

export default EditProfilePopup