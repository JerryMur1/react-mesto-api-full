import Delete from "../images/Group.svg";
import vector2 from "../images/Vector2.svg";
import React from 'react'
import { CurrentUserContext } from '../context/CurrentUserContext'


function Card({ link, name, likes, owner, onCardClick , onCardLike, onCardDelete, cardId}) {
  function handleClick() {
    onCardClick({ link, name });
  }
  const currentUser = React.useContext(CurrentUserContext)
function handleClickLike(){
  onCardLike({likes, cardId})
}
function handleDeleteClick(){
  onCardDelete({owner, cardId})
}

const isOwn = owner._id === currentUser._id;

// Создаём переменную, которую после зададим в `className` для кнопки удаления
const cardDeleteButtonClassName = (
  `element__delete ${!isOwn ? 'button_visibility' : ''}`
);

const isLiked = likes.some(i => i._id === currentUser._id);

const cardLikeButtonClassName = (
  `element__like ${isLiked ? 'element__like_active' : ''}`
); 

  return (
    
    <div className="element">
      <button className='button_type_delete' onClick={handleDeleteClick} type="button">
        <img className={cardDeleteButtonClassName} src={Delete} alt="Удаление" />
      </button>
      <button
        className="button button_type_image"
        onClick={handleClick}
        type="button"
      >
        <img className="element__image" src={link} alt="Картинка" />
      </button>
      <div className="element__group">
        <h2 className="element__title">{name}</h2>
        <div className="element__like_groupe">
          <button className='button_type_like' type="button" onClick={handleClickLike}>
            <img className={cardLikeButtonClassName} src={vector2}  alt="Лайк" />
          </button>
          <p className="element__like_number">{likes.length}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
