import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import HotJobs from './HotJobs';

const Home = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div>
            <Banner />
            <HotJobs jobs={jobs} setJobs={setJobs} />
        </div>
    );
};

export default Home;