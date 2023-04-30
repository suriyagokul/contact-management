import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addUser } from "../userSlice";
import { v4 as uuidv4 } from "uuid";

import "../App.css";

export default function AddUser() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    status: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddUser = () => {
    setValues({ firstname: "", lastname: "", status: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        firstname: values.firstname,
        lastname: values.lastname,
        status: values.status,
      })
    );
    navigate("/");
  };

  return (
    <>
      <h1 className="text-xl font-bold mt-10">Contact Form</h1>
      <div
        class=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          // height: "100vh",
          marginTop: "50px",
        }}
      >
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="fisrtname"
            >
              FirstName
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder="firstname"
              onChange={(e) =>
                setValues({ ...values, firstname: e.target.value })
              }
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="lastname"
            >
              LastName
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              type="text"
              placeholder="lastname"
              onChange={(e) =>
                setValues({ ...values, lastname: e.target.value })
              }
            />
          </div>

          <div
            style={{
              flexDirection: "column",
              // display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              class="flex items-center mb-7"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2 className="ml-[-5px] mr-5 font-bold">Status</h2>
              <input
                id="default-radio-1"
                type="radio"
                value="active"
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                style={{ marginLeft: "5px" }}
                onChange={(e) => {
                  // console.log(e.target.value);
                  setValues({ ...values, status: e.currentTarget.value });
                }}
              />
              <label
                for="default-radio-1"
                class="ml-2  mr-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Active
              </label>
            </div>
            <div
              class="flex items-center mb-7 ml-[60px]"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                checked
                id="default-radio-2"
                type="radio"
                value="inactive"
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                style={{ marginLeft: "5px" }}
                onChange={(e) =>
                  setValues({ ...values, status: e.currentTarget.value })
                }
              />
              <label
                for="default-radio-2"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Inactive
              </label>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleAddUser}
            >
              Save Contact
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
