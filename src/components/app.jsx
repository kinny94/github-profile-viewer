import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/profile.jsx';
import Search from './github/search.jsx';

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
                this.setState({
                    userData: data
                });
                console.log(data);
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({
                    username: null
                });
                alert(err);
            }.bind(this)
         })
    }

    getUserRepos(){
        $.ajax({
            url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page='+ this.state.perPage +'client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({
                    userRepos: data
                });
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({
                    username: null
                });
                alert(err);
            }.bind(this)
         })
    }

    handleformSubmit(username){
        this.setState({
            username: username
        }, function(){
            this.getUserData();
            this.getUserRepos();
        })
    }

    componentDidMount(){
        this.getUserData();
        this.getUserRepos();
    }
     
    render(){
        return(
            <div>
                <Search onFormSubmit={this.handleformSubmit.bind(this)}/>
                <Profile {...this.state}/>
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