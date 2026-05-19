import { useState } from "react";

import { useNavigate } from "react-router-dom";

import api from "../services/api";

const Login=()=>{

const navigate=useNavigate();

const [formData,setFormData]=useState({

email:"",
password:""

});

const handleChange=(e)=>{

setFormData({

...formData,

[e.target.name]:
e.target.value

});

};


const handleSubmit=async(e)=>{

e.preventDefault();

try{

const response=

await api.post(

"/auth/login",

formData

);

localStorage.setItem(

"token",

response.data.token

);

alert(

response.data.message

);

navigate("/dashboard");

}

catch(error){

alert(

error.response.data.message
);

}

};


return(

<div>

<h1>Login</h1>

<form
onSubmit={handleSubmit}
>

<input

type="email"

name="email"

placeholder="Enter Email"

onChange={handleChange}

/>

<br/><br/>


<input

type="password"

name="password"

placeholder="Enter Password"

onChange={handleChange}

/>

<br/><br/>


<button type="submit">

Login

</button>

</form>

</div>

);

};

export default Login;