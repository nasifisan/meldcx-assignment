import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCookie } from 'cookies-next';

import { HttpClient } from '@/services/axiosClient';
import { DeviceResponse, Notify } from '@/models/Api';
import { ACCESS_TOKEN_KEY } from '@/services/auth-helper.service';

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

export const notifyThunk = createAsyncThunk(
  'post/notify',
  async (payload : Notify) => {
    const res = await HttpClient.request({
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/notify`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getCookie(ACCESS_TOKEN_KEY)}`
      },
      data: payload
    });

    return res.data;
  }
);
