import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ReducerMappers from '../constants/reducerMapper';
import { getActiveDeviceThunk } from '../thunks/DeviceThunks';
import { DeviceResponse } from '@/models/Api';

interface Response {
  loading: boolean;
  data: DeviceResponse | null;
  error: string;
}

interface StateType {
  getActiveDevices: Response;
}

export const initialState: StateType = {
  getActiveDevices: {
    loading: false,
    data: null,
    error: '',
  },
};

const ApiSlice = createSlice({
  name: ReducerMappers.API,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getActiveDeviceThunk.pending,
      (state: StateType, action: PayloadAction) => {
        state.getActiveDevices.loading = true;
      }
    ),
      builder.addCase(
        getActiveDeviceThunk.fulfilled,
        (
          state: StateType,
          action: PayloadAction<DeviceResponse | null>
        ) => {
          state.getActiveDevices.loading = false;
          state.getActiveDevices.data = action.payload;
        }
      ),
      builder.addCase(
        getActiveDeviceThunk.rejected,
        (state: StateType, action: any) => {
          state.getActiveDevices.loading = false;
          state.getActiveDevices.data = null;
          state.getActiveDevices.error = action.error.message;
        }
      );
  },
});

const ApiReducer = ApiSlice.reducer;

export default ApiReducer;
