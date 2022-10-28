import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Container>
                <p className='text-center fs-2'>Sorry,this page is not available.</p>
                <hr />
                <p className='text-center fs-2'>Please visti at <Button variant='primary'><Link to='/' className='text-white'>Home Page</Link></Button></p>
            </Container>

        </div>
    );
};

export default Error;