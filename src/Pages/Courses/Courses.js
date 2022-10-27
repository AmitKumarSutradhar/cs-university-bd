import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = ({ course }) => {
    const courses = useLoaderData();
    console.log(course);
    const { name, id } = course;
    return (
        <div>
            <Card>
                {/* <Card.Img variant="top" src={image_url} /> */}
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {id}
                    </Card.Text>
                    {/* <Link to={`/category/${category_id}`}>
                        <Button variant="primary">All news in this category</Button>
                    </Link> */}
                </Card.Body>
            </Card>
        </div>
    );
};

export default Courses;