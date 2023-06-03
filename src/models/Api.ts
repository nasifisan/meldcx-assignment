export interface Device {
    id: number;
    name: string;
}

export interface DeviceResponse {
    devices: Device[] | null
}

export interface Notify {
    name: string;
    email: string;
    repoUrl: string;
    message: string;
}

export type PartialDeviceResponse = DeviceResponse | null;