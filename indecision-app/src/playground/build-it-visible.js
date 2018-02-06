const appRoot = document.getElementById("app");
let Visibility = false;
const toggleVisibility = () => {
    Visibility = !Visibility;
    render();
};
const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick ={toggleVisibility}>
                {Visibility ? 'Hide Details' :'Show Details'}
            </button>
            {Visibility && (
                <div>
                    <p>Hey , There are some details you can show</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
}
render();
