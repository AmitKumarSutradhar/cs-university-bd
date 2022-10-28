import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseDetails = ({ course }) => {
    const { _id, image_url, title, details, category_id } = course;
    return (
        <div>
            <Card className='mb-5'>
                <Card>
                    <Card.Img variant="top" src={image_url ? image_url : null} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {
                                details.length > 250 ?
                                    <>{details.slice(0, 200) + '...'} <Link to={`/news/${_id}`}>Read More</Link> </>
                                    :
                                    details
                            }
                        </Card.Text>
                        <Link to={`/category/${category_id}`}>
                            <Button variant="primary">All Courses in this category</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Card>
        </div>
    );
};

export default CourseDetails;