import React from "react";
import DeleteUser from "./DeleteUser";
import { fakeUserData } from "./FakeApiData/index";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "./store/slices/UserSlice";
import DisplayUserName from "./DisplayUserName";

const Navbar = () => {
  const dispacth = useDispatch();
  const currSate = useSelector((state) => state.users);
  const addNewUser = (data) => {
    // console.log('data:', data)
    dispacth(addUsers(data));
  };
  return (
    <div>
      <div
        className="header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p>Todo App</p>
        <button
          onClick={() => addNewUser(fakeUserData())}
          style={{ background: "#82e0a3", color: "#7b7070" }}
        >
          Add new user
        </button>
      </div>
      <hr />
      <div className="items">
        {currSate.length === 0 ? <p>No Records....</p> : null}
        <ul>
          <DisplayUserName />
        </ul>
      </div>
      <hr />
      <DeleteUser />
    </div>
  );
};

export default Navbar;
