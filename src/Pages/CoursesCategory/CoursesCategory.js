import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCaredSummery from '../CourseCardSummery/CourseCaredSummery';
import RightSideBar from '../RightSideBar/RightSideBar';

const CoursesCategory = () => {

    const categoryCourses = useLoaderData();

    return (
        <div>
            <Container>
                <Row>
                    <Col lg='9'>
                        <h2>This is Category has courses: {categoryCourses.length}</h2>
                        {
                            categoryCourses.map(news => <CourseCaredSummery
                                key={news._id}
                                news={news}
                            ></CourseCaredSummery>)
                        }
                    </Col>
                    <Col lg='3'>
                        <RightSideBar></RightSideBar>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CoursesCategory;