import { PassportSerializer } from "@nestjs/passport";
import { Inject, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { UserDocument } from "src/databases/users.schema";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(@Inject('AuthService') private readonly authService: AuthService) {
    super();
  }

  serializeUser(user: UserDocument, done: (err: any, user?: any) => void): void {
    done(null, user);
  }

  async deserializeUser(payload: any, done: (err: any, user?: any) => void): Promise<void> {
    try {
      const user = await this.authService.findUserById(payload._id.toString());
      done(null, user);
    } catch (err) {
      done(err);
    }
  }
}
