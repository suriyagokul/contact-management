import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../userSlice";

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter((user) => user.id === params.id);
  const { firstname, lastname, status } = existingUser[0];
  const [values, setValues] = useState({
    firstname,
    lastname,
    status,
  });

  const handleEditUser = () => {
    setValues({ firstname: "", lastname: "", status: "" });
    dispatch(
      editUser({
        id: params.id,
        firstname: values.firstname,
        lastname: values.lastname,
        status: values.status,
      })
    );
    navigate("/");
  };

  return (
    <div
      class=""
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
        // height: "100vh",
        marginTop: "10px",
      }}
    >
      <h1 className="mt-5 font-bold">Edit Contact</h1>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-5">
        <div class="m-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="firstname"
          >
            FirstName
          </label>
          <input
            class="shadow appearance-none border border-red-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstname"
            type="text"
            placeholder="firstname"
            value={values.firstname}
            onChange={(e) =>
              setValues({ ...values, firstname: e.target.value })
            }
          />
        </div>

        <div class="m-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="lastname"
          >
            LastName
          </label>
          <input
            class="shadow appearance-none border border-red-400 rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            type="text"
            placeholder="lastname"
            value={values.lastname}
            onChange={(e) => setValues({ ...values, lastname: e.target.value })}
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
              checked={values.status === "active"}
              type="radio"
              value="active"
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              style={{ marginLeft: "5px" }}
              onChange={(e) =>
                setValues({ ...values, status: e.currentTarget.value })
              }
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
              checked={values.status === "inactive"}
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
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleEditUser}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            Save Edited Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
