import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RightSideBar from '../RightSideBar/RightSideBar';
import CourseDetails from './CourseDetails';

const Courses = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <Col lg='9'>
                        {
                            allCourses.map(course => <CourseDetails
                                key={course._id}
                                course={course}
                            ></CourseDetails>
                            )
                        }
                    </Col>
                    <Col lg='3'>
                        <RightSideBar></RightSideBar>
                    </Col>
                </Row>
            </Container>
            {
                allCourses.map(course => <CourseDetails
                    key={course._id}
                    course={course}
                ></CourseDetails>
                )
            }
        </div>
    );
};

export default Courses;