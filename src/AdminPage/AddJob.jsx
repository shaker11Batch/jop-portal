import React from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const AddJob = () => {

    const { user } = useAuth()
    const handleAddJob = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries())
        // console.log(data)
        // process salary range data 
        const { min, max, currency, ...restJob } = data;
        restJob.salaryRange = { min, max, currency }
        // console.log(restJob)
        // process requirementss 
        const requirementssString = restJob.requirements;
        const requirementssDirty = requirementssString.split(',')
        const requirementsClean = requirementssDirty.map(req => req.trim())
        console.log(requirementssDirty, requirementsClean)
        restJob.requirements = requirementsClean;
        // process responsibilities 
        restJob.responsibilities = restJob.responsibilities.split(',').map(res => res.trim())
        restJob.status = "active"
        console.log(restJob)

        // save job to the database 
        axios.post('http://localhost:5000/jobs', restJob)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('job addded')
                }
            })
            .catch(error => console.log(error))
    }


    return (
        <div className='flex justify-center'>
            <div>
                <h2>please add a jobs</h2>
                <form onSubmit={handleAddJob} className='my-8' >
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
                        <legend className="fieldset-legend">Basic Info</legend>

                        <label className="label">Job Title</label>
                        <input type="text" name='title' className="input" placeholder="Job Title" />

                        <label className="label">Company</label>
                        <input type="text" name='company' className="input" placeholder="Company name" />

                        <label className="label">Locations</label>
                        <input type="text" name='location' className="input" placeholder="Company Location" />

                        <label className="label">Company logo</label>
                        <input type="text" name='company_logo' className="input" placeholder="Company Logo" />


                    </fieldset>


                    {/* Job Type */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
                        <legend className="fieldset-legend">Job Type</legend>
                        <div className="filter">
                            <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                            <input className="btn" value='On-Site' type="radio" name="jobType" aria-label="On-Site" />
                            <input className="btn" value='Remote' type="radio" name="jobType" aria-label="Remote" />
                            <input className="btn" value='Hybrid' type="radio" name="jobType" aria-label="Hybrid" />
                        </div>
                    </fieldset>
                    {/* Job Category */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
                        <legend className="fieldset-legend">Job Category</legend>
                        <select defaultValue="Job Category" name='category' className="select">
                            <option disabled={true}>Job Category</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                        </select>
                    </fieldset>
                    {/* Application Dateline */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
                        <legend className="fieldset-legend">Application Dateline</legend>
                        <input type="date" name='dateline' className="input" />
                    </fieldset>
                    {/* Salary Range */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
                        <legend className="fieldset-legend">Salary Range</legend>

                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                            <div>
                                <label className="label">Minimum Salary</label>
                                <input type="text" name='min' className="input" placeholder="Minimum Salary" />
                            </div>

                            <div>
                                <label className="label">Maximum Salary</label>
                                <input type="text" name='max' className="input" placeholder="Maximum Salary" />
                            </div>

                            <div>
                                <label className="label">Currency</label>
                                <select defaultValue="Select A Currency" name='currency' className="select">
                                    <option disabled={true}>Select A Currency</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>EURO</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>

                    {/*Job Description */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
                        <legend className="fieldset-legend">Basic Info</legend>
                        <textarea className="textarea" name='description' placeholder="Job Description"></textarea>
                    </fieldset>

                    {/* Job requirementss */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
                        <legend className="fieldset-legend">Job requirementss</legend>
                        <textarea className="textarea" name='requirements' placeholder="Job  requirements (sepatate by comma) "></textarea>
                    </fieldset>

                    {/* Job Responsibilities */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
                        <legend className="fieldset-legend"> Job Responsibilities</legend>
                        <textarea className="textarea" name='responsibilities' placeholder="Job  Responsibilities (sepatate by comma) "></textarea>
                    </fieldset>

                    {/* HR Related Info */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
                        <legend className="fieldset-legend">HR related Info</legend>

                        <label className="label">Hr Name</label>
                        <input type="text" name='hr_name' className="input" placeholder="HR Name" />

                        <label className="label">HR Email</label>
                        <input type="email" name='hr_email' className="input" readOnly defaultValue={user?.email} placeholder="HR Email" />

                    </fieldset>
                    <input type="submit" className='btn' value="Add Job" />
                </form>
            </div>
        </div>
    );
};

export default AddJob;