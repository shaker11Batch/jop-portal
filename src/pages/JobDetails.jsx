import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { Link, useLoaderData,  } from 'react-router';

const JobDetails = () => {
    // const {id} = useParams()
    // console.log(id)
    const  { title, location,_id, requirements, jobType, salaryRange, description, company, company_logo } = useLoaderData()
  
    return (
         <div className="card bg-base-100 max-w-96 shadow-sm mx-auto my-8">
              <div className='flex  gap-3'>
                <figure>
                  <img
                    src={company_logo}
                    alt="Shoes" />
                </figure>
                <div>
                  <h3 className="text-2xl">{company}</h3>
                  <p className='flex  items-center gap-2'><IoLocationSharp /> {location}</p>
                </div>
              </div>
              <div className="card-body">
                <h2 className="card-title">
                  {title}
                  <div className="badge badge-secondary">{jobType}</div>
                </h2>
                <p>Salary: {salaryRange.min}- {salaryRange.max} {salaryRange.currency}</p>
                <p>{description}</p>
                <div className="card-actions">
                  {
                    requirements?.map((skill, index) => <div key={index} className="badge badge-outline">{skill}</div>)
                  }
        
                </div>
                    <div className="card-actions justify-end mt-4">
          <Link to={`/jobApply/${_id}`}>
            <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>
              </div>
            </div>
    );
};

export default JobDetails;