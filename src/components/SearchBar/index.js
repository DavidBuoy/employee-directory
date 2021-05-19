import React from "react";
import "./style.css";

const SearchBar = (props) => {
  return (
    <div className="center-form">
      <div>
        <div className="input-group">
          <form onChange={props.formBarThing}>
          <input
            type="text"
            onChange={props.searchNames}
            className="form-control"
            placeholder="Enter a Name Here"
          />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
