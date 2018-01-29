
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
let count = 0;
const someId = 'myidhere';
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () =>  {
    count--;
    renderCounterApp();
};
const reset = () =>  {
    count = 0;
    renderCounterApp();
}

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick ={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}
renderCounterApp();
