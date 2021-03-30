import { Link, useHistory } from "react-router-dom";
import { useState } from "react"
import * as mestoAuth from "../mestoAuth"
function Register({ handleRegister, showPopup }){
const [data, setData] = useState({
email:'',
password:''
})
const [message, setMessage] = useState('');
const history = useHistory();

const  handleChange = (e) => {
  const {name, value} = e.target;
setData({
  ...data,
  [name]:value
})
console.log(e)
}
const handleSubmit = (e) => {
  e.preventDefault()
showPopup()
    handleRegister(data.email, data.password)

}



    return(
    
        <section className="register" >
          <form className="register__form" onSubmit={handleSubmit}>
            <h1 className="register__title">Регистрация</h1>
            <input
                    value={data.email}
                    onChange={handleChange}
                    placeholder='Логин'
                    required
                    type="text"
                    name='email'
                    minLength="2"
                    maxLength="40"
                    id="email"
                    className="register__name register__name_title"
                  />
                  <input
                  onChange={handleChange}
                    value={data.password}
                    placeholder='Пароль'
                    required
                    type="text"
                    name='password'
                    minLength="2"
                    maxLength="200"
                    id="password"
                    className="register__name register__name_subtitle"
                  />
                  <button className="register__button" type="submit" >Зарегистрироваться</button>
                  <Link to="/signin" className="register__signin">Уже зарегестрированы? Войти</Link>
                  </form>
        </section>
        )
    }
    export default Register