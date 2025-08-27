import React, { useState } from "react";
import { users } from "./data.js";

function MainContent() {
  const [userList, setUserList] = useState(users);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });
  const [editingUser, setEditingUser] = useState(null);

  const handleAddUser = (e) => {
    e.preventDefault();
    if (editingUser) {
      setUserList(
        userList.map((u) =>
          u.id === editingUser.id ? { ...editingUser, ...newUser } : u
        )
      );
      setEditingUser(null);
    } else {
      const id = userList.length + 1;
      setUserList([...userList, { id, ...newUser }]);
    }
    setNewUser({ name: "", email: "", role: "" });
  };

  const handleDelete = (id) => {
    setUserList(userList.filter((u) => u.id !== id));
  };
  const handleEdit = (user) => {
    setEditingUser(user);
    setNewUser({ name: user.name, email: user.email, role: user.role });
  };

  return (
    <div className="main">
      <h1>مدیریت کاربران</h1>

      {/* فرم افزودن/ویرایش کاربر */}
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
        <button type="submit">
          {editingUser ? "✏️ ویرایش کاربر" : "➕ افزودن کاربر"}
        </button>
      </form>

      {/* جدول کاربران */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>نام</th>
            <th>ایمیل</th>
            <th>نقش</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleEdit(user)}>✏️ ویرایش</button>
                <button onClick={() => handleDelete(user.id)}>🗑️ حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MainContent;
