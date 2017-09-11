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
    
    getUserData(){
        $.ajax({
            url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
            dataType: 'json',
            cache: false,
            success: function(data){
                console.log(data);
            }.bind(this),
            error: function(xhr, status, err){
                alert(err);
            }.bind(this)
         })
    }

    componentDidMount(){
        this.getUserData();
    }
     
    render(){
        return(
            <div>
                {this.props.clientId}
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