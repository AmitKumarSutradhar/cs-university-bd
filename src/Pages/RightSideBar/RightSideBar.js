import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideBar = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://cs-university-bd-server.vercel.app/courses-categories')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className=''>
            <h4>All Courses: {courses.length}</h4>
            <div>
                {
                    courses.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default RightSideBar;