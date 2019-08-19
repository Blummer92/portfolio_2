import React, {useState} from "react"; //this is a stateless. useState can only be used with stateless react component  https://reactjs.org/docs/hooks-state.html

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }
    componentDidMount() {
        /* fetch user from database */
        this.setState({user: response.user});
    }
    render() {
        const { user } = this.state;

        if (user === null) {
            return <Loading/>;
        }
        if (user.role === 'user') {
            return <PhysicianProfile user={user}/>;
        }
        return <ClientProfile user={user}/>;
    }
}