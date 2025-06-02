import React, { Suspense } from 'react';
import ApplicationStats from './Shared/ApplicationStats';
import ApplicationsList from './ApplicationsList';
import useAuth from '../hooks/useAuth';
import { myApplicationsPromise } from '../api/applicationsApi';




const MyApplications = () => {

    const { user } = useAuth()

    return (
        <div >
            <div className='flex justify-center my-11'>
                <ApplicationStats />
            </div>

            <br />
            <Suspense fallback={<p className='text-center my-16'>Loading ........</p>}>
                <ApplicationsList
                    myApplicationsPromise={myApplicationsPromise(user?.email)}
                ></ApplicationsList>
            </Suspense>

        </div>
    );
};

export default MyApplications;