import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='hero' style={{ backgroundImage: "url(https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", backgroundSize: 'cover' }}>
                <div className="hero-details" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <h2 className='text-white h2 fs-1'>Welcome to CS University BD</h2>
                    <p className='text-white text-center'>Bangladeshi leading online learnign platform</p>
                </div>

            </div>
        </div>
    );
};

export default Home;