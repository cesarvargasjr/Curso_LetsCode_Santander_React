import React from 'react';

class App extends React.Component{
    /*constructor(props) {
        super(props);
    }*/

  render() {
    return (
            <div className = "box">
                <div id = "title"> {this.props.title} </div>
                <div id = "text"> {this.props.children} </div>
            </div>          
        );
    }
}

export default App;
