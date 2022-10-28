import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './SingleCourse.css'

const SingleCourse = () => {
    const singleCourses = useLoaderData();
    const { _id, title, image_url, details } = singleCourses;
    return (
        <div>
            <Container className='p-5 text-center'>
                <Card className='mb-5'>
                    <Card className='p-5'>
                        <Card.Img variant="top" className='img-banner' src={image_url ? image_url : null} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {
                                    details
                                }
                            </Card.Text>
                            <Link to={`/courses/${_id}`}>
                                <Button variant="primary">Get Premium Access</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Card>
            </Container>
        </div>
    );
};

export default SingleCourse;