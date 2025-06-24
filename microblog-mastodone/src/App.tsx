// App.tsx
import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import PostsDetail from "./pages/PostsDetail";
import { User } from "./_interfaces/interfaces";

const usersKey = "users";
const cache: { users: User[] } = { users: [] };

function App() {
  const [users, setUsers] = useState<User[] | null>([]);

  useEffect(() => {
    if (cache[usersKey] !== undefined) {
      setUsers(cache[usersKey]);
    }
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((json) => {
        cache[usersKey] = json;
        setUsers(json);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="/posts" element={<PostsPage users={users} />} />
        <Route path="/posts/:id" element={<PostsDetail />} />
      </Routes>
    </Router>
  );
}
export default App;
