import React, { useState, useEffect } from "react";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);
  

  useEffect(
    () => {
      setUser(props.currentUser);
    },
    [props]
  );

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!user.name || !user.age || !user.adress || !user.sex || !user.date) return
        props.updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>age</label>
      <input
        type="Number"
        name="age"
        value={user.age}
        onChange={handleInputChange}
      />
      <label>adress</label>
      <input
        type="text"
        name="adress"
        value={user.adress}
        onChange={handleInputChange}
      />
      <label>sex</label>
      <input
        type="text"
        name="sex"
        value={user.sex}
        onChange={handleInputChange}
      />
      <label>date</label>
      <input
        type="text"
        name="date"
        value={user.date}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
