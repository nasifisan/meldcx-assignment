import { HttpClient } from './axiosClient';

export class AuthService {
  httpClient: any;

  constructor() {
    this.httpClient = HttpClient;
  }

  async getToLogin(data: any): Promise<any> {
    return await this.httpClient.request({
      method: 'post',
      url: process.env.NEXT_PUBLIC_LOGIN_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: data?.email,
        password: data?.password
      }
    });
  }


  async renewAccessToken(refreshToken: any): Promise<any> {
    const bodyPrams = new URLSearchParams();

    // bodyPrams.append('email', data.email);
    // bodyPrams.append('password', data.password);
    bodyPrams.append('grant_type', 'refresh');

    return await this.httpClient.request({
      method: 'post',
      url: '/api/user/token',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        grant_type: 'refresh',
        refresh_token: refreshToken,
      },
    });
  }

  async goToLogout(): Promise<any> {}
}
