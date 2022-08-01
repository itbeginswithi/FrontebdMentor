import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../images";

import { removeTag, clearTags } from "../store/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state);

  return (
    <div className="filter">
      <ul className="filter__tags">
        {tags?.map((tag, i) => (
          <li class="filter__tags_tag" key={tag + i}>
            <span>{tag}</span>
            <button onClick={() => dispatch(removeTag(tag))}>
              <img src={images.iconRemove} alt="Remove" />
            </button>
          </li>
        ))}
      </ul>

      <button className="filter__clear" onClick={() => dispatch(clearTags())}>
        Clear
      </button>
    </div>
  );
};

export default Filter;
