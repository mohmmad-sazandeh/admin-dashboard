import React, { useState } from "react";

function MainContent() {
  const [users, setUsers] = useState([
    { id: 1, name: "Ali", email: "ali@example.com" },
    { id: 2, name: "Sara", email: "sara@example.com" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const addUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([
        ...users,
        { id: users.length + 1, ...newUser }
      ]);
      setNewUser({ name: "", email: "" });
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="main">
      {/* --- هدر --- */}
      <div className="header">
        <h1>Admin Dashboard</h1>
        <input type="text" placeholder="Search..." />
      </div>

      {/* --- کارت‌های داشبورد --- */}
      <div className="cards">
        <div className="card">
          <h3>Total Users</h3>
          <p>{users.length}</p>
        </div>
        <div className="card">
          <h3>Revenue</h3>
          <p>$8,430</p>
        </div>
        <div className="card">
          <h3>Active Projects</h3>
          <p>12</p>
        </div>
        <div className="card">
          <h3>Tickets</h3>
          <p>34</p>
        </div>
      </div>

      {/* --- جدول یوزرها --- */}
      <div className="user-table">
        <h2>Users</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* --- فرم اضافه کردن یوزر --- */}
        <div className="add-user-form">
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) =>
              setNewUser({ ...newUser, name: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) =>
              setNewUser({ ...newUser, email: e.target.value })
            }
          />
          <button onClick={addUser}>Add User</button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
