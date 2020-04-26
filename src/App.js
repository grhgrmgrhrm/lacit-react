import React, { Component } from 'react';
import Content from './Components/Content'
import Sidebar from "./Components/Sidebar";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            foo: 'bar',
            myData: {}
        }
    }


    render() {
        console.log(this.state.myData);
        return (
            <div className="App">
                <div className="container d-md-flex">
                    <Content/>
                    <Sidebar/>
                </div>
            </div>
        );
    }
}

export default App;