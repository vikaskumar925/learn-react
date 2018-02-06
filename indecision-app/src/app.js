
// JSX - Javascript XML


const app = {
    title:'Indecision App',
    subtitle:'Put your life in the hands of computer',
    options:['One', 'Two'],
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value ='';
        render();
    }
}

const onRemoveAll = () => {
    app.options =[];
    render();

};
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};
const appRoot = document.getElementById("app");
//create "Remove All" button above list
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options':'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled ={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
                {   /*numbers.map((number) => {
                    return <p key ={number}>Number :{number}</p> ;
                })*/

            }
            <ol>
                {
                    app.options.map((text) => <li key={text}>{text}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Options</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
render();
