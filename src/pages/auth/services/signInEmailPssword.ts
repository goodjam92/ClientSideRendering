import { signInWithEmailAndPassword } from "firebase/auth";
import { authService } from "services";

export function signInEmailPassword(email: string, password: string) {
  signInWithEmailAndPassword(authService, email, password).then(() => {
    console.log("login!");
  });
}
