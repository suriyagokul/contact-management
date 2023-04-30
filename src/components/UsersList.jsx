import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import "../styles/userslist.css";
import "../App.css";
import { deleteUser } from "../userSlice";

export default function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  console.log(users);

  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  const renderCard = () =>
    users.map((user) => {
      return (
        <div className="user--box bg-pink-400" key={user.id}>
          <pre className="text-white font-bold">
            {user.firstname} {user.lastname}
          </pre>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Link to={`edit-user/${user.id}`}>
              <button>
                <AiOutlineEdit
                  className="icon hover:bg-red-400 rounded-lg"
                  style={{ marginRight: "10px", color: "black" }}
                />
              </button>
            </Link>
            <button onClick={() => handleRemoveUser(user.id)}>
              <MdOutlineDeleteOutline className="icon  hover:bg-red-400 rounded-lg" />
            </button>
          </div>
        </div>
      );
    });

  return (
    <div className="users--list">
      <div className="App">
        <Link to="/adduser">
          <button className="rounded-lg bg-cyan-500 hover:bg-cyan-600 w-[130px] h-[40px] text-white my-[50px] mr-[50%]">
            Create Contact
          </button>
        </Link>
        <pre className="text-xl font-mono">Contacts</pre>
        {users.length ? (
          renderCard()
        ) : (
          <pre className="border-solid border-2 border-white-600 w-[100%] h-34 p-5 m-6">
            No Contact Found. {"\n"}
            Please add contact from Create Contact Button
          </pre>
        )}
      </div>
    </div>
  );
}
