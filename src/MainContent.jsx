import React, { useState } from "react";

function MainContent() {
  const [users, setUsers] = useState([
    { id: 1, name: "Ali", email: "ali@test.com" },
    { id: 2, name: "Sara", email: "sara@test.com" },
  ]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
      setNewUser({ name: "", email: "" });
    }
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
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* فرم افزودن یوزر */}
        <div className="add-user-form">
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <button onClick={handleAddUser}>Add User</button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
