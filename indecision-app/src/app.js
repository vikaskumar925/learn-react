class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of computer';
        const options= ['Thing One','Things Two', 'Thing three '];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}
class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}
class Action extends React.Component {
    render(){

        return (
            <div>
                <button>What Should I do?</button>
            </div>
        );

    }
}
class Options extends React.Component{
    render(){
        return (
            <div>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/> )
                }

            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
                Option :{this.props.optionText}
            </div>
        );
    }
}
class AddOption extends React.Component {
     render(){
         return (
             <div>
                 AddOption Component Here
             </div>
         );
     }
}
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
