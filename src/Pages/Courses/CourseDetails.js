import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseDetails = ({ course }) => {
    const { image_url, title, details, category_id } = course;
    return (
        <div>
            <Card className='mb-5'>
                <Card>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Link to={`/category/${category_id}`}>
                            <Button variant="primary">All news in this category</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Card>
        </div>
    );
};

export default CourseDetails;