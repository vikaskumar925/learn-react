import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p>footer</p>
        </div>
    );
};


// ReactDOM.render((
//     <Layout>
//         <div>
//             <h1>Page title</h1>
//             <p>This is my Page</p>
//         </div>
//     </Layout>
// ),document.getElementById('app'));
ReactDOM.render(<IndecisionApp />,document.getElementById('app'));
