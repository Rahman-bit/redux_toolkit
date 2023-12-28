import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteUsers } from "./store/slices/UserSlice";

const DisplayUserName = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });
  // console.log("currState:", data)
  const getCurrentName = (name) => {
    dispatch(deleteUsers(name));
  };
 
  return (
    <>
      {data.map((data, i) => {
        return (
          <li
            key={i}
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "space-between",
              padding:'10px'
            }}
          >
            {" "}
            {data} <MdDelete 
            style={{fontSize:'1.5rem', color:'red'}}
            onClick={() => getCurrentName(data)}
            />
          </li>
        );
      })}
    </>
  );
};

export default DisplayUserName;
