import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplications = () => {
    const {job_id} = useParams()
    const applications = useLoaderData()
    console.log(applications)
    return (
        <div>
            <h1>View this applications { job_id} { applications.length}</h1>
        </div>
    );
};

export default ViewApplications;