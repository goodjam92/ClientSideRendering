/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { onAuthStateChanged } from "firebase/auth";
import { NavLinks } from "models";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "services";
import { signInEmailPassword } from "./services";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const signInButton = () => {
    signInEmailPassword(email, password);
  };

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setEmail("");
        setPassword("");
        navigate(NavLinks.Home);
      }
    });
  }, [navigate]);

  const SignInScreen = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh"
  });

  const inputStyleBox = css({
    display: "flex",
    flexDirection: "column"
  });

  const input = css({
    marginBottom: "1rem"
  });
  return (
    <div css={SignInScreen}>
      <div css={inputStyleBox}>
        <input
          css={input}
          type="text"
          value={email}
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />
        <input
          css={input}
          type="password"
          value={password}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />
        <button type="button" onClick={signInButton}>
          로그인
        </button>
      </div>
    </div>
  );
}
