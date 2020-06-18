import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, Header, Segment} from 'semantic-ui-react';
import './login.css';


const Login = () => {
    return (
        <div>
            <Header as={Segment} inverted size="huge" />   
                <Card.Group centered className="container">
                <Header content='Welcome to the website'/> 
                <Card>
                    <Card.Content>
                    </Card.Content>
                <Button as={Link} className={"login"} color="white" to="/home">Login</Button>
                </Card>
            </Card.Group>
        </div>
    )
}
export default Login;