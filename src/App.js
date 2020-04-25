import React, { Component } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Autor from './Components/Autor';
import Calltoaction from './Components/Calltoaction';
import GridEducation from './Components/GridEducation';
import GridWork from './Components/GridWork';
import GridHealth from './Components/GridHealth';
import Gallery from './Components/Gallery';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';

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
                <Header />
                <Home />
                <Autor />
                <Calltoaction />
                <GridEducation />
                <GridWork />
                <GridHealth />
                <Gallery />
                <Contacts />
                <Footer />
            </div>
        );
    }
}

export default App;