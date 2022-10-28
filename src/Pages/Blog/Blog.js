import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Container>
                <h2>Welcome to CS University blog</h2>

                <Card.Body className='mb-4'>
                    <Card.Title>What is cors?</Card.Title>
                    <Card.Text>
                        <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
                    </Card.Text>
                </Card.Body>

                <Card.Body className='mb-4'>
                    <Card.Title>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                    <Card.Text>
                        <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                    </Card.Text>
                </Card.Body>

                <Card.Body className='mb-4'>
                    <Card.Title>How does the private route work?</Card.Title>
                    <Card.Text>
                        <p>PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.</p>
                    </Card.Text>
                </Card.Body>

                <Card.Body className='mb-4'>
                    <Card.Title>What is Node? How does Node work?</Card.Title>
                    <Card.Text>
                        <p><b>Node: </b>Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.</p>
                        <p>How does the NodeJs work?
                            Image result for How Node JS works internally
                            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        </p>
                    </Card.Text>
                </Card.Body>

            </Container>
        </div>
    );
};

export default Blog;