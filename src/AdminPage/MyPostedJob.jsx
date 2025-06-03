import React, { Suspense } from 'react';
import useAuth from '../hooks/useAuth';
import MyPostedJobList from '../pages/MyPostedJobList';
import { jobsCreatedByPromise } from '../api/jobApi';

const MyPostedJob = () => {
    const { user } = useAuth()
    return (
        <div>
            <h1>My posted Jobs</h1>
            <Suspense fallback={<p>Loading.....</p>}>
                <MyPostedJobList jobsCreatedByPromise={jobsCreatedByPromise(user?.email)}></MyPostedJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJob;