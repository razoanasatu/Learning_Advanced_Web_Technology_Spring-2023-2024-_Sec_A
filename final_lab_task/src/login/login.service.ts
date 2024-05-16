import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  async login(loginData: { email: string; password: string }) {
    // Implement your login logic here, e.g., check credentials, generate JWT token, etc.
    // For demonstration, let's just return the loginData
    return loginData;
  }
}
