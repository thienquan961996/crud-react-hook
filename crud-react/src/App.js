import React, { useEffect, useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import SearchForm from "./forms/SearchForm";

const usersData = [
  { id: 1, name: "quan", age: "18", adress: "hanoi", sex: "nam", date: "9-6-1996"},
  { id: 2, name: "yua", age: "27", adress: "japan", sex: "nu", date: "9-6-1993" },
  { id: 3, name: "mikami", age: "19", adress: "japan", sex: "nu", date: "9-6-1996" }
];


const App = () => {


  const [users, setUsers] = useState(usersData);
  const [userFiltered, setUserFiltered] = useState(users);
  const [searchTxt, setSearchTxt] = useState('');
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  useEffect(() => {
    setUserFiltered(users);
    filterUserByName(searchTxt);
  },[users])

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", age: "" ,adress: "", sex: "", date: ""};
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, age: user.age, adress: user.adress, sex: user.sex, date: user.date });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)));
  };


  const filterUserByName = userName => {
    const usersFiltered = users.filter(user => user.name.includes(userName));
    setSearchTxt(userName);
    setUserFiltered(usersFiltered);
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Eidt User</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
              <SearchForm onChange={filterUserByName} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={userFiltered} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default App;
