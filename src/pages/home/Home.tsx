/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import lena from "assets/Lenna.png";
import { onAuthStateChanged } from "firebase/auth";
import { NavLinks } from "models";
import { imageFileUpload } from "pages/home/services";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "services";

export default function Home() {
  const [userUid, setUserUid] = useState<string>("");
  const navigate = useNavigate();

  const uploadFiles = async (files: any[]) => {
    files.forEach((file: File) => {
      const reader = new FileReader();
      reader.onloadend = (event: any) => {
        const { result } = event.currentTarget;
        imageFileUpload(result, userUid);
      };
      reader.readAsDataURL(file);
    });
  };

  const setFile = (event: any) => {
    const { files } = event.target;
    const uploadFile = Array.from(files);
    uploadFiles(uploadFile);
  };

  useEffect(() => {
    onAuthStateChanged(authService, (user: any) => {
      if (!user) {
        navigate(NavLinks.SignIn);
      }
      setUserUid(user.uid);
    });
  }, [navigate]);

  const imageScreen = css({
    width: "100%",
    height: "100%"
  });

  const imageContainer = css({
    display: "flex",
    width: "100%",
    height: "100%",
    margin: "1rem",
    flexWrap: "wrap",
    boxSizing: "border-box"
  });

  const textBox = css({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    marginTop: "2rem"
  });

  const text = css({
    fontSize: "4rem",
    marginBottom: "1rem"
  });

  const imageBox = css({
    width: "26rem",
    height: "22rem",
    padding: "0.5rem",
    boxSizing: "border-box"
  });
  const image = css({
    width: "100%",
    height: "100%"
  });

  function imageBoxRender() {
    const rendering = () => {
      const imageBoxList: any[] = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 10; i++) {
        imageBoxList.push(
          <div css={imageBox} key={`box${i}`}>
            <img css={image} src={lena} alt="pho" key={`img${i}`} />
          </div>
        );
      }
      return imageBoxList;
    };
    return <>{rendering()}</>;
  }

  return (
    <div css={imageScreen}>
      <div css={textBox}>
        <p css={text}>Server Side Rendering Test - React</p>
        <input
          type="file"
          onChange={setFile}
          value=""
          accept="image/png, image/tiff, image/bmp, image/jpg"
          multiple
        />
      </div>
      <div css={imageContainer}>{imageBoxRender()}</div>
    </div>
  );
}
