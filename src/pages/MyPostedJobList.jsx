import React, { use } from 'react';
import { Link } from 'react-router';

const MyPostedJobList = ({ jobsCreatedByPromise }) => {
    const jobs = use(jobsCreatedByPromise)
    return (
        <div>
            <h2>Jobs created by you: {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>View Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map((job, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.dateline}</td>
                                <td>
                                    <Link to={`/applications/${job._id}`}>View Applications</Link>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobList;