import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import JobItem from './JobItem'

import {data} from '../json/data';

const JobsList = () => {
  const {tags} = useSelector(state => state);

  
  let filteredJobs = data.filter((job) => {
    const jobRequirement = [
      job.level,
      job.role,
      ...job.languages,
      ...job.tools,
    ];

    if (tags.every((val) => jobRequirement.includes(val))) {
      return job;
    }
  })
  
  return (
    <ul className="jobList">
        {
          !tags.length > 0 ?
            (data.map((job, i) => (<JobItem job={job} key={i}/>)))
            :
            (filteredJobs.map((job, i) => (<JobItem job={job} key={i}/>)))
        }
    </ul>
  )
}

export default JobsList