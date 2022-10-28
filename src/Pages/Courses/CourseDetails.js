import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseDetails = ({ course }) => {
    const { _id, image_url, title, details, category_id } = course;
    return (
        <div>
            <Card className='mb-5'>
                <Card>
                    <Card.Img variant="top" className='img' src={image_url ? image_url : null} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {
                                details.length > 250 ?
                                    <>{details.slice(0, 200) + '...'} <Link to={`/courses/${_id}`}>Read More</Link> </>
                                    :
                                    details
                            }
                        </Card.Text>
                        <Link to={`/category/${category_id}`}>
                            <Button variant="primary">Course Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Card>
        </div>
    );
};

export default CourseDetails;