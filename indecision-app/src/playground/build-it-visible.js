//VisibilityToggle - render,constructor ,handleToggleVisibility
//Visibility ->false

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility :true,
        };
    }
    handleToggleVisibility (){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility,
            }
        });
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick ={this.handleToggleVisibility}>
                    {this.state.visibility ?'Hide Details':'Show Details'}
                </button>
                {this.state.visibility && (
                <div>
                    <p>Hey , There are some details you can show</p>
                </div>
                )}
            </div>
        );
    }
}
ReactDOM.render(<VisibilityToggle /> ,document.getElementById("app"));

// const appRoot = document.getElementById("app");
// let Visibility = false;
// const toggleVisibility = () => {
//     Visibility = !Visibility;
//     render();
// };
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick ={toggleVisibility}>
//                 {Visibility ? 'Hide Details' :'Show Details'}
//             </button>
//             {Visibility && (
//                 <div>
//                     <p>Hey , There are some details you can show</p>
//                 </div>
//             )}
//         </div>
//     );
//
//     ReactDOM.render(template, appRoot);
// }
// render();
