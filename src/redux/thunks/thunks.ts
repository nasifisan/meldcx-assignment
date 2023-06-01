import { createAsyncThunk } from '@reduxjs/toolkit';

import { HttpClient } from '@/services/axiosClient';
import { DeviceResponse } from '@/models/Api';

export const getActiveDeviceThunk = createAsyncThunk(
  'get/device/active',
  async () => {
    const res = await HttpClient.request({
      method: 'get',
      url: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/devices`,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res.data as DeviceResponse;
  }
);
