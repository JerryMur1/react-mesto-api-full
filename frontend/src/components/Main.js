import edit from "../images/Edit-Button.svg";
import vector5 from "../images/Vector5.svg";
import vector3 from "../images/Vector3.svg";

import Card from "./Card";
import React from 'react'
import { CurrentUserContext } from '../context/CurrentUserContext'

function Main({
  onCardClick,
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  cards,
  onCardLike,
  handleDeleteCard
}) 
{ 
  

  const context = React.useContext(CurrentUserContext);
  
  
  return (
    <>

      <section className="profile">
        <div className="profile__groupe">
          <img className="profile__image" src={vector5} alt=""/>
          <button className="button_type_avatar" onClick={onEditAvatar}>
            <img
              className="profile__avatar"
              alt="Кусто"
              src={context.avatar}
              style={{ backgroundImage: `url(${context.avatar})` }}
            />
          </button>
        </div>
        <div className="profile__info">
          <div className="profile__text">
            <h1 className="profile__title">{context.name}</h1>
            <p className="profile__subtitle">{context.about}</p>
          </div>
          <button
            className="button button_type_edit"
            type="button"
            onClick={onEditProfile}
          >
            <img
              className="profile__edit-button"
              src={edit}
              alt="редактировать"
            />
          </button>
        </div>
        <button
          className="button button_type_add"
          type="button"
          onClick={onAddPlace}
        >
          <img className="profile__add-button" src={vector3} alt="плюс" />
        </button>
      </section>

      <section className="elements">
        {cards.map(({ _id, ...props }) => (
          <Card key={_id} {...props} cardId={_id} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={handleDeleteCard}/>
        ))}
      </section>
    </>
  );
}
export default Main;
