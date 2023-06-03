export interface Device {
    id: number;
    name: string;
}

export interface DeviceResponse {
    devices: Device[] | null
}

export type PartialDeviceResponse = DeviceResponse | null;