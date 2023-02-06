/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import lena from "assets/Lenna.png";

export default function Home() {
  const imageScreen = css({
    width: "100vw",
    height: "100%"
  });
  const imageContainer = css({
    display: "flex",
    width: "100%",
    height: "100%",
    margin: "2rem",
    flexWrap: "wrap"
  });
  const textBox = css({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    marginTop: "2rem"
  });
  const text = css({
    fontSize: "4rem"
  });

  const imageBox = css({
    width: "25rem",
    height: "20rem",
    margin: "1rem"
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
          <div css={imageBox}>
            <img css={image} src={lena} alt="pho" />
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
      </div>
      <div css={imageContainer}>{imageBoxRender()}</div>
    </div>
  );
}
