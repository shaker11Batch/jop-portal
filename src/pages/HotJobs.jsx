
import React from 'react';
import JobCard from './Shared/JobCard';


const HotJobs = ({ jobs }) => {

    // console.log(jobs)
    return (
        <div>
            <h2 className="text-4xl text-center my-6">Hot Jobs of the Day</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-4'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;