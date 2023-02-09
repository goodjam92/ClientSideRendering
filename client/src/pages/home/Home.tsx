import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { NavLinks } from "models";
import { getImageList, imageFileUpload } from "pages/home/services";
import { authService, dbService } from "services";

export default function Home() {
  const [userUid, setUserUid] = useState<string>("");
  const [images, setImages] = useState<string[]>([""]);
  const [isFirst, setIsFirst] = useState<boolean>(true);
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

  useEffect(() => {
    getImageList().then((result: any) => {
      console.log(result);
      setImages(result);
    });
  }, []);

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
    margin: "2rem",
    flexWrap: "wrap"
  });

  const text = css({
    fontSize: "4rem",
    marginBottom: "1rem"
  });

  const imageBox = css({
    width: "24rem",
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
      for (let i = 0; i < 1; i++) {
        if (!images[i]) {
          break;
        }
        imageBoxList.push(
          <div css={imageBox} key={`box${i}`}>
            <img css={image} src={images[i]} alt="pho" key={`img${i}`} />
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
      <div css={textBox}>
        <button
          type="button"
          onClick={() => {
            setIsFirst(!isFirst);
          }}
        >
          상호작용버튼
        </button>
      </div>
    </div>
  );
}
