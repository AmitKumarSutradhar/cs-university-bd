import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const Home = () => {
    const allNews = useLoaderData();
    // console.log(allNews);
    return (
        <div>
            <div>
                <h2>Dragon News Home: {allNews.length}</h2>
                {
                    allNews.map(course => <Courses key={course._id}
                        course={course}
                    ></Courses>
                    )
                }
            </div>
        </div>
    );
};

export default Home;