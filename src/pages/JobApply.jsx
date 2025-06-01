import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../hooks/useAuth';

const JobApply = () => {
    const { id } = useParams()
    const { user } = useAuth()
    console.log(id, user)


    const handleApplyForm = e => {
        e.preventDefault();
        const form = e.target;
        const linkeding = form.linkedin.value;
        const gitHub = form.github.value;
        const resume = form.resume.value;
        console.log(linkeding,gitHub,resume)
}

    return (
        <div>
            <h2 className="text-2xl text-center my-16">You Apply for this Jobs - <Link to={`/jobs/${id}`} className='text-blue-500 underline'>Details</Link></h2>
            <form onSubmit={handleApplyForm}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  
                    <label className="label">Linkedin Link</label>
                    <input type="url" name='linkedin' className="input" placeholder="Linkedin profile Link" />

                    <label className="label">GIthub</label>
                    <input type="url" name='github' className="input" placeholder="Github link" />

                    <label className="label">Resume Link</label>
                    <input type="url" name='resume' className="input" placeholder="Drop your Resume" />
                    <input type="submit" className='btn' value="Apply" />
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;