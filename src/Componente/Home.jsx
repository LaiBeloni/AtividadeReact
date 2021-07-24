import React, { Component } from 'react';
import bg from '../Componente/bg.jpg';

class Home extends Component {
        render() {
            return (
                <div>
                    <header className="App-header">
                        <img src={bg} className="App-logo" alt="logo"/>
                    </header>
                </div>
            );
        }
    }


export default Home;