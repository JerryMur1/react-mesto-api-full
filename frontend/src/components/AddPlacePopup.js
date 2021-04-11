import React from 'react'
import PopupWithForm from './PopupWithForm'


function AddPlacePopup({isOpen, onClose, onUpdatePlace}){

    const [place, setPlace] = React.useState('')
    const [link, setLink] = React.useState('')

    function handleNameChange(e){
        setPlace(e.target.value)
    }
    function handleLinkChange(e){
        setLink(e.target.value)
    }


      function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdatePlace({
          name: place,
          link
        });
      }
      

    return(<PopupWithForm
        title="Добавить карточку"
        name="add"
        isOpen={isOpen ? "popup_is-opened" : ""}
        onClose={onClose}
        button="Создать"
        onSubmit={handleSubmit}
        children={
          <>
            <input
            value={place}
            onChange={handleNameChange}
              placeholder="Название"
              required
              type="text"
              name="place"
              minLength="2"
              
              id="name-card"
              className="popup__name popup__place_type_title"
            />
            <span id="name-card-error" className="error"></span>
            <input
            onChange={handleLinkChange}
                value={link}
              placeholder="Ссылка на картинку"
              required
              type="url"
              name="link"
              minLength="2"
              maxLength="200"
              id="secondname"
              className="popup__name popup__place_type_subtitle"
            />
            <span id="link-error" className="error"></span>
          </>
        }
      />)
}


export default AddPlacePopup