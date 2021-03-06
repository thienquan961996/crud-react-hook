import React from "react";

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>index</th>
        <th>Name</th>
        <th>age</th>
        <th>adress</th>
        <th>sex</th>
        <th>date of birth</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.adress}</td>
            <td>{user.sex}</td>
            <td>{user.date}</td>
            <td>
              <button
                className="button muted-button"
                onClick={() => props.editRow(user)}
              >
                Edit
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
