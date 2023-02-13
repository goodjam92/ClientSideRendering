import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";

export default function AppStyle() {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap");

        ${emotionReset}
        html {
          font-size: 62.5%;
        }

        body {
          background-color: #ffffff;
          width: 100%;
          height: 100%;
          min-height: 100vh;
          background-size: cover;
        }
      `}
    />
  );
}
