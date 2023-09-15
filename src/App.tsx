import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAppSelector } from "./store/hooks/redux";
import { userSlice } from "./store/reducers/user";
import { useAppDispatch } from "./store/hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";

function App() {
  // const {}= useSelector ((state)=> state.)  Об этом сказать
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div className="App">
      {isLoading ? <h1>Идет загрузка...</h1> : null}
      {error ? <h1>{error}</h1> : null}
      {users.length > 1 ? JSON.stringify(users, null, 2) : null}
    </div>
  );
}

export default App;
