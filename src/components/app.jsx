import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: 'kinny94',
            userData: [],
            userRepos: [],
            perPage: 5 
        } 
    }
     
    render(){
        return(
            <div>
                My App
            </div>
        )
    }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};

App.defaultProps = {
    clientId: 'Iv1.44ef32c73adc3386',
    clientSecret: 'e7d88b105d5f6a5ca002b61ff53008ebeab9bf7d'
}

export default App;