
import { useState } from "react"
function Login({ handleLogin }){
const [data, setData] = useState({
email:'',
password:''
})
function handleChange (e){
  const {name, value} = e.target;
setData({
  ...data,
  [name]: value
})

}



const handleSubmit = (e) =>{
  console.log(e)
e.preventDefault();
if(!data.email || !data.password){
  return;
}

handleLogin(data.email, data.password)
}

return(

    <section className="login" >
      <form className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__title">Вход</h1>
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
                className="login__name login__name_title"
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
                className="login__name login__name_subtitle"
              />
              <button className="login__button" type="submit">Войти</button>
              </form>
    </section>
    )
}

export default Login