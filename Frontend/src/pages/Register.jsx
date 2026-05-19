import { useState } from "react";

import { useNavigate } from "react-router-dom";

import api from "../services/api";

const Register=()=>{

const navigate=useNavigate();

const [formData,setFormData]=useState({

name:"",
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

"/auth/register",

formData

);

alert(

response.data.message
);

navigate("/");

}

catch(error){

alert(

error.response.data.message
);

}

};


return(

<div>

<h1>Register</h1>

<form
onSubmit={handleSubmit}
>

<input

type="text"

name="name"

placeholder="Enter Name"

onChange={handleChange}

/>

<br/><br/>

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

Register

</button>

</form>

</div>

);

};

export default Register;