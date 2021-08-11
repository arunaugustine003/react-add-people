import React, { useState, useEffect } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  //Save Existing Todos to Local
  const getLocalTodos = () => {
    if (localStorage.getItem("usersList") === null) {
      localStorage.setItem("usersList", JSON.stringify([]));
    } else {
      let usersListLocal = JSON.parse(localStorage.getItem("usersList"));
      setUsersList(usersListLocal);
    }
  };
  //Run once when the App Starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  //Save New Todos to Local Storage
  const saveLocalTodos = () => {
    localStorage.setItem("usersList", JSON.stringify(usersList));
  };
  //Run once when the App Starts
  useEffect(() => {
    saveLocalTodos();
  }, [usersList]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
