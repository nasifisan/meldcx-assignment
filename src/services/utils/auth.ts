import jwtDecode from "jwt-decode";
import { User } from "@/models/User";

export interface AuthResponse {
    success: boolean;
    access_token: string;
    refresh_token: string;
    expires_in: number;
};

export interface DecodedToken {
    sub: string;
    sender: string;
    iat: number;
}

export class TokenInfo {
    Name: string;

    constructor(token : string) {
        if (token && token !== '') {
            const decodedToken : DecodedToken = jwtDecode(token);
            this.Name = decodedToken?.sender;
        } else {
            this.Name = '';
        }
    }

    getUserDetails = () => {
        const details : User  = {
            Name: this.Name
        }

        return details;
    }
}