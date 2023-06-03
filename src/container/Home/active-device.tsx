import { Device, PartialDeviceResponse } from '@/models/Api';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getActiveDeviceThunk } from '@/redux/thunks/thunks';
import { getValue } from '@/utils/common/common';
import React, { useEffect, useState } from 'react';

const ActiveDevice = () => {
  const [degree, setDegree] = useState<number>(0);
  const [devices, setDevices] = useState<Device[]>([]);

  const dispatch = useAppDispatch();
  const deviceData: PartialDeviceResponse = useAppSelector(
    (state) => state.Api.getActiveDevices.data
  );

  useEffect(() => {
    const getActiveDevices = () => {
      dispatch(getActiveDeviceThunk());
    };

    const interval = setInterval(() => getActiveDevices(), 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (
      deviceData &&
      deviceData.devices &&
      Array.isArray(deviceData.devices)
    ) {
      setDevices(deviceData.devices);

      if (deviceData.devices.length > 2) {
        setDegree(Number(369 / (deviceData.devices.length - 2)));
      }
    }
  }, [deviceData]);

  return (
    <div className="space-y-20">
      <div className="orbit">
        <div key="device-count" className="device-count">
          {devices.length}
        </div>
        <div key="circle-1" className="inner-circle-1">
          {devices &&
            devices
              .slice(0, devices.length >= 2 ? 2 : 1)
              .map((item: Device, idx) => {
                return (
                  <div
                    key={getValue(item, 'id')}
                    className="inner-device-1"
                    style={{
                      transform: `rotate(${
                        idx * 180
                      }deg) translate(35px,35px)`,
                    }}
                  ></div>
                );
              })}
        </div>

        <div key="circle-2" className="inner-circle-2">
          {devices &&
            devices.length > 2 &&
            devices
              .slice(2, devices.length)
              .map((item: Device, idx) => {
                return (
                  <div
                    key={item?.id}
                    className="inner-device-2"
                    style={{
                      transform: `rotate(${
                        idx * degree
                      }deg) translate(70px,70px)`,
                    }}
                  ></div>
                );
              })}
        </div>
      </div>

      <div className="space-y-24 min-h-340 font-barlow">
        <div className="text-24 font-semibold leading-30">
          Active devices
        </div>

        {devices && devices.length && (
          <ul className="ml-20">
            {devices.map((item, idx) => (
              <li
                className={`text-16 list-decimal ${
                  item.id < 2 ? 'text-success-400' : 'text-warn-800'
                }`}
                key={item.id}
              >
                {item?.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ActiveDevice;
