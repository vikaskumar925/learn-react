"use strict";

// JSX - Javascript XML

// const user ={
//     name:"Vikas",
//     age:27,
//     location :"New Delhi",
// };
// function getLocation(location){
//     if (location){
//         return <p>Location : {location}</p>;
//     }
//
// }
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name:'Anonymous'}</h1>
//         {(user.age && user.age >=18) && <p>Age : {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );
// const app = {
//     title:'Indecision App',
//     subtitle:'Put your life in the hands of computer',
//     options:['One', 'Two'],
// };
// const template = (
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
//         <p>{app.options.length > 0 ? 'Here are your options':'No options'}</p>
//         <ol>
//             <li>Item One</li>
//             <li>Item Two</li>
//         </ol>
//     </div>
// );
var count = 0;
var someId = 'myidhere';
var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count : ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "reset"
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
