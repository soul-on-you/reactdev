import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { AppDispatch, RootState } from "..";
import { IUser } from "../../models/IUser";
// import { userSlice } from "../reducers/UserSlice";

//! ReduxToolkit позволяет нам это упростить
// export const fetchUserAction = async (
//   dispatch: AppDispatch,
//   getState: () => RootState
// ) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());

//     const response = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/users"
//     );

//     dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(
//       userSlice.actions.usersFetchingError("Неудалось загрузить пользователей")
//     );
//   }
// };

export const fetchUserAction = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Неудалось загрузить пользователей");
    }
  }
);
