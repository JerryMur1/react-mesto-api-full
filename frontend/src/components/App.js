import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./PopupImage";
import React from "react";
import api from "../utils/api";
import { CurrentUserContext } from '../context/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { Route, Switch, useHistory } from "react-router-dom";
import Login from "./Login";
import Register from "./Register"
import ProtectedRoute from "./ProtectedRoute";
import * as mestoAuth from "../mestoAuth"
import InfoToolTip from "./InfoToolTip";

function App() {
 
  const [cards, setCards] = React.useState([]);
  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [userData, setUserData] = React.useState('')
  
  function handleUpdateUser({name, about}){
 
      api.addUserId({name, about}).then((res) => {
        setCurrentUser({
          name: res.name, about:res.about, avatar: res.avatar})
      }).catch((res)=>{
        console.log(res)
      }).finally(()=>{
        closeAllPopups()
      });
    };

    
    function handleUpdateAvatar({avatar}){
 
      api.addAvatarId({avatar}).then((res) => {
        setCurrentUser({
   avatar: res.avatar, name: res.name, about:res.about})
      }).catch((res)=>{
        console.log(res)
      }).finally(()=>{
        closeAllPopups()
      });
    };

 
  React.useEffect(() => {
    api.getUserId().then((res) => {
      setCurrentUser({
        name: res.name,
        about: res.about,
        avatar: res.avatar,
        _id: res._id
      })
    }).catch((res)=>{
      console.log(res)
    });
  }, []);




  React.useEffect(() => {
    api.getInitialCards().then((item) => {
      setCards(item);
    }).catch((res)=>{
      console.log(res)
    });
  }, []);
  
function handleAddPlaceSubmit({name, link}){
  api.addCards({name, link}).then(newCard => {
    setCards([newCard, ...cards]);
  }).catch((res)=>{
    console.log(res)
  }).finally(()=>{
    closeAllPopups()
  });;
};


function handleDeleteCard({cardId}) {
  
  api.deleteCard(cardId).then(() => {
    const newCards = cards.filter(card => card._id !== cardId);
    setCards(newCards);
  });
}


  function handleCardLike({likes, cardId}) {
    const isLiked = likes.some(i => {return i._id === currentUser._id});
  
    api.likeCard(cardId, !isLiked).then((newCard) => {
      console.log(isLiked)
      const newCards = cards.map((c) => {return c._id === cardId ? newCard : c});
      setCards(newCards);
    });
}


console.log(cards)
  const [isEditProfilePopupOpen, editOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, avatarOpen] = React.useState(false);
  const [isAddPlacePopupOpen, placeOpen] = React.useState(false);
  const [card, selectedCard] = React.useState(null);
  const [isInfoToolTipOpen, toolOpen] = React.useState(false);
  const [status, setStatus] = React.useState(false)
  const handleCardClick = ({link, name}) => {
    selectedCard({link, name});
  };
  function handleInfoToolClick () {
    toolOpen(true)
  }
  function handleEditEditClick() {
    editOpen(true);
  }
  function handleEditAvatarClick() {
    avatarOpen(true);
  }
  function handleEditAddClick() {
    placeOpen(true);
  }
  function closeAllPopups() {
    placeOpen(false);
    avatarOpen(false);
    editOpen(false);
    toolOpen(false)
    selectedCard(null);
  }
const tokenCheck = () =>{
  const jwt = localStorage.getItem('token')
  if (jwt) {
    
    mestoAuth.getContent(jwt)
    .then((res) =>{
      console.log(res)
      if(res){
        setUserData({
          ...userData,
          email: res.data.email,
        })
        setLoggedIn(true)
      }
    })
    .catch(e => console.error(e))
  }
  else {
    setLoggedIn(false)
  }
  
}
React.useEffect(() =>{
  tokenCheck();
}, [])
React.useEffect(() =>{
  if(loggedIn){
    history.push('/')
  }
}, [loggedIn])

  const handleRegister = (email, password) => {
    
    mestoAuth.register(email, password)
    .then((res) =>{
      console.log(res)
      if(res.statusCode !== 400){
        setStatus(true)
        history.push('/signin')
      }
      else {
        throw new Error('Что-то пошло не так')
      }
     
    })
    .catch((e) => console.log(e));
  }
  const handleLogin = (email, password) =>{
    mestoAuth.authorize(email, password)
.then((data) => {
 
  if(data.token){
    history.push('/')
  localStorage.setItem('token', data.token)
  setLoggedIn(true)
  setUserData({
    ...userData,
    email: data.user.email,
  })
  }
  if(data.statusCode === 400){
    throw new Error('Что-то пошло не так')
  }
})
.catch((e) => console.log(e));
  }

const handleSignOut = () =>{
  setLoggedIn(false)
  localStorage.removeItem('token')
}

  return (
      <div className="page">
   <CurrentUserContext.Provider value={currentUser}>
   <Header handleSignOut={handleSignOut} email={userData.email}/>
     <Switch>
      <Route path="/signin" >
        <Login handleLogin={handleLogin}/>  
     </Route>
        <Route path="/signup" >
          <Register handleRegister={handleRegister} showPopup={handleInfoToolClick}/>
        </Route>
        <ProtectedRoute path="/" component={Main} 
        handleSignOut = {handleSignOut}
        onCardClick={handleCardClick}
          onEditProfile={handleEditEditClick}
          onAddPlace={handleEditAddClick}
          onEditAvatar={handleEditAvatarClick}
          cards={cards}
          onCardLike={handleCardLike}
          handleDeleteCard={handleDeleteCard}
          loggedIn={loggedIn}/>
     </Switch>
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onUpdatePlace={handleAddPlaceSubmit}/>
       <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
       <InfoToolTip onClose={closeAllPopups} isOpen={isInfoToolTipOpen} status={status}/>
        <ImagePopup card={card} onClose={closeAllPopups} />
        <Footer />
       
        </CurrentUserContext.Provider>
        
      </div>
   
  );
}

export default App;
