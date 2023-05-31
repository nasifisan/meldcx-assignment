import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ReducerMappers from '../constants/reducerMapper';

interface User {
  Name: string | null;
}

interface StateType {
  user: User;
}

export const initialState : StateType = {
  user: {
    Name: null,
  },
};

const AuthSlice = createSlice({
  name: ReducerMappers.AUTH,
  initialState,
  reducers: {
    setUser: (state: StateType, action : PayloadAction<User>) => {
      const { payload } = action;

      state.user.Name = payload?.Name;
    },
  },
});

const AuthReducer = AuthSlice.reducer;

export default AuthReducer;
export const { setUser } = AuthSlice.actions;
