require("dotenv").config();

const app=require("./src/app");

const sequelize=require(
"./src/config/db"
);

require("./src/models/User");

const PORT=process.env.PORT || 5000;


sequelize.sync()

.then(()=>{

console.log(
"MySQL Connected Successfully"
);

app.listen(PORT,()=>{

console.log(

`Server running on ${PORT}`

);

});

})

.catch((error)=>{

console.log(error);

});