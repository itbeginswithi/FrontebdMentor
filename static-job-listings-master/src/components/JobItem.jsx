import React from "react";
import {useDispatch} from 'react-redux';

import { addTag } from "../store/filterSlice";

const JobItem = React.memo(({ job }) => {
  const dispatch = useDispatch();

  return (
    <li className={`jobItem ${job.featured ? "featured" : ""}`}>
      <div className="jobItem__info">
        <img src={job.logo} alt={job.company} className="jobItem__info_logo" />
        <div className="jobItem__info_details">
          <div className="jobItem__info_details__name">
            <p>{job.company}</p>
            {job.new && <span className="new">New</span>}
            {job.featured && <span className="featured">Featured</span>}
          </div>
          <h1 className="jobItem__info_details__position">{job.position}</h1>
          <div className="jobItem__info_details__more">
            <span>{job.postedAt} • </span>
            <span>{job.contract} • </span>
            <span>{job.location}</span>
          </div>
        </div>
      </div>

      <div className="jobItem__languages">
        {job?.role && <span onClick={() => dispatch(addTag(job.role))}>{job.role}</span>}

        {job?.level && <span onClick={() => dispatch(addTag(job.level))}>{job.level}</span>}

        {job?.languages.map((language, i) => (
          <span key={language + i} onClick={() => dispatch(addTag(language))}>{language}</span>
        ))}

        {job?.tools.map((tools, i) => (
          <span key={tools + i} onClick={() => dispatch(addTag(tools))}>{tools}</span>
        ))}
      </div>
    </li>
  );
});

export default JobItem;
