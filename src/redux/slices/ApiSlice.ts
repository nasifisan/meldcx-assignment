import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import ReducerMappers from '../constants/reducerMapper';
import { DeviceResponse } from '@/models/Api';
import { getActiveDeviceThunk, notifyThunk } from '../thunks/thunks';

interface Response {
  loading: boolean;
  data: DeviceResponse | null;
  error: string;
}

interface StateType {
  getActiveDevices: Response;
  notify: Response;
}

const initialState: StateType = {
  getActiveDevices: {
    loading: false,
    data: null,
    error: '',
  },
  notify: {
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
      ),
      builder.addCase(
        notifyThunk.pending,
        (state: StateType, action: PayloadAction) => {
          state.notify.loading = true;
        }
      ),
      builder.addCase(
        notifyThunk.fulfilled,
        (state: StateType, action: PayloadAction<any | null>) => {
          state.notify.loading = false;
          state.notify.data = action.payload;
        }
      ),
      builder.addCase(
        notifyThunk.rejected,
        (state: StateType, action: any) => {
          state.notify.loading = false;
          state.notify.data = null;
          state.notify.error = action.error.message;
        }
      );
  },
});

const ApiReducer = ApiSlice.reducer;

export default ApiReducer;
