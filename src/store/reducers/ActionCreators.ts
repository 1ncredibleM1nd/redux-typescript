import { IUser } from "../models/IUser";
import { AppDispatch } from "../store";
import axios from "axios";
import { userSlice } from "./user";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const response = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(userSlice.actions.usersFetchingError("Что-то пошло не так"));
//   }
// };

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue("Не удалось получить данные...");
    }
  }
);
