/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Home() {
  const imageList: string[] = [
    "https://upload.wikimedia.org/wikipedia/commons/6/64/%27Witch_Head%27_Brews_Baby_Stars_%2810592267924%29.jpg?uselang=ko",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/%281%29Bare_Island.jpg?uselang=ko",
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/%281%29Figtree_House_Hunters_Hill-1.jpg?uselang=ko"
  ];

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

  const imageBox = css({
    width: "34rem",
    height: "28rem",
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
      for (let i = 0; i < imageList.length; i++) {
        imageBoxList.push(
          <div css={imageBox} key={`box${i}`}>
            <img
              css={image}
              src={imageList[i]}
              alt="pho"
              key={`img${i}`}
              loading="lazy"
            />
          </div>
        );
      }
      return imageBoxList;
    };
    return <>{rendering()}</>;
  }

  return (
    <div css={imageScreen}>
      <div css={imageContainer}>{imageBoxRender()}</div>
    </div>
  );
}
