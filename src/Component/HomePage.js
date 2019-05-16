import React from 'react'
import User from './User'
import { Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom'


const HomePage = () => (
    <div>
        <Container>
            <h2>USER LIST</h2>

            <Button color="success" outline>
                <Link to="/adduser">ADD</Link>
            </Button>

            <User />
        </Container>

    </div>
);

export default HomePage
