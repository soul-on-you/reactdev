import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUserAction } from "../action-creators/user";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

export const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //! Точно также это работает в "counterSlice", но тут мы используем
    //! упрощенный подход, для него нужно было кое-что реализовать в файле
    //! с actionCreator'ом при помощи redux-toolkit дополнение там, а тут
    //! все в extraReducers
    
    // usersFetching(state: UserState) {
    //   state.isLoading = true;
    // },
    // usersFetchingSuccess(
    //   state: UserState,
    //   action: PayloadAction<UserState["users"]>
    // ) {
    //   state.isLoading = false;
    //   state.error = "";
    //   state.users = action.payload;
    // },
    // usersFetchingError(
    //   state: UserState,
    //   action: PayloadAction<UserState["error"]>
    // ) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
  extraReducers: {
    [fetchUserAction.fulfilled.type]: (
      state: UserState,
      action: PayloadAction<UserState["users"]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    [fetchUserAction.pending.type]: (state: UserState) => {
      state.isLoading = true;
    },
    [fetchUserAction.rejected.type]: (
      state: UserState,
      action: PayloadAction<UserState["error"]>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
