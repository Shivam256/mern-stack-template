# mern-stack-template
simple mern stack template(mainly the server setup)

use npx create-react-app client to make the client folder

add the "proxy" to the package.json of client of the server host
eg: "proxy":"https://localhost:8080"

get axios in the client side for making requrest to server

to make requrest in the client side to server side:
eg. const data = await axios.get('/url',data)


IMP: before pushing the folder to github make sure you delet the hidden git folder inside the client folder that comes with the create-react-app

IMP: dont forget to add .gitignore in the server folder !
