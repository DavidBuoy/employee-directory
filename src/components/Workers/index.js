import React from "react";
import "./style.css";

function Workers(props) {
  return (
    <>
      <p>Click the arrows below to filter from A to Z </p>
      <table className="table">
        <thead>
          <tr>
            <th className="table-header" scope="col">
              Picture
            </th>
            <th className="table-header" scope="col">
              <button onClick={props.sortNameAtoZ}>
                <i class="bi bi-chevron-up"></i>
              </button>{" "}
              First Name{" "}
              <button onClick={props.sortNameZtoA}>
                <i class="bi bi-chevron-down"></i>
              </button>
            </th>
            <th className="table-header" scope="col">
              <button onClick={props.sortLastNameAtoZ}>
                <i class="bi bi-chevron-up"></i>
              </button>{" "}
              Last Name{" "}
              <button onClick={props.sortLastNameZtoA}>
                <i class="bi bi-chevron-down"></i>
              </button>
            </th>
            <th className="table-header" scope="col">
              Phone Number
            </th>
          </tr>
        </thead>
        {/* you need to put the maping below the table header or else it will make more headers with no info in them */}
        {/* Also i need to make sure that the key index is below where ever you are calling information or atleast that how i think it works. might need some clarification. */}
        {props.employeeArray.map((each, index) => {
          return (
            <tbody key={index}>
              <tr>
                <th scope="row">
                  <img
                    src={each.picture.thumbnail}
                    className="img-thumbnail"
                    alt="..."
                  />
                </th>
                <td className="spacing">{each.name.first}</td>
                <td>{each.name.last}</td>
                <td>{each.phone}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}

export default Workers;
