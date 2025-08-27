import React, { useState } from "react";
import { users } from "./data.js";

function MainContent() {
  const [userList, setUserList] = useState(users);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });
  
  const handleAddUser = (e) => {
    e.preventDefault();
    const id = userList.length + 1; 
    setUserList([...userList, { id, ...newUser }]);
    setNewUser({ name: "", email: "", role: "" });
  };

  return (
    <div className="main">
      <h1>داشبورد کاربران</h1>

      {/* فرم افزودن کاربر */}
      <form onSubmit={handleAddUser} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="نام"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="ایمیل"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="نقش"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          required
        />
        <button type="submit">➕ افزودن</button>
      </form>

      {/* جدول کاربران */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>نام</th>
            <th>ایمیل</th>
            <th>نقش</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MainContent;
