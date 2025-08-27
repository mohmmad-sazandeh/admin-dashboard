import React, { useState } from "react";
import { users } from "./data.js";

function MainContent() {
  const [userList, setUserList] = useState(users);

  return (
    <div className="main">
      <h1>داشبورد کاربران</h1>
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
