import React, { use } from 'react';
import JobApplicationsRow from './JobApplicationsRow';

const ApplicationsList = ({ myApplicationsPromise }) => {
    const applications = use(myApplicationsPromise)
    return (
        <div>
            <h2 className="text-center my-4">Jobs Applied so far: {applications.length}</h2>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, index) => <JobApplicationsRow
                                application={application}
                                key={application._id}
                                index={index}
                            ></JobApplicationsRow>)
                    }
                     
                 
                  
                      
                    </tbody>
                  
                </table>
            </div>

        </div>
    );
};

export default ApplicationsList;