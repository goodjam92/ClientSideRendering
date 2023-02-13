/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ImageList } from "pages/hooks";

export default function Home() {

/*   const imageList: string[] = [
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Aerial_view_of_National_Museum_of_American_History.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/2/23/%281%29Moonrise_Darling_Harbour.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/8/88/12-07-13-washington-by-RalfR-10.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/64/%27Witch_Head%27_Brews_Baby_Stars_%2810592267924%29.jpg?uselang=ko",
    "https://upload.wikimedia.org/wikipedia/commons/2/2b/%27Zur_steinernen_Glocke_%27_Altst%C3%A4dter_Ring.jpg?uselang=ko",
    "https://upload.wikimedia.org/wikipedia/commons/7/71/%281%29Campbells_Stores.jpg?uselang=ko",
    "https://upload.wikimedia.org/wikipedia/commons/f/f6/%281%29Beauchamp_Falls_Blue_Mountains.jpg?uselang=ko",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/%281%29Bare_Island.jpg?uselang=ko",
    "https://upload.wikimedia.org/wikipedia/commons/f/f6/%281%29Darling_Harbour_concert.jpg?uselang=ko",
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/%281%29Figtree_House_Hunters_Hill-1.jpg?uselang=ko",
    "https://upload.wikimedia.org/wikipedia/commons/e/e9/%281%29Sydney_Opera_House.jpg?uselang=ko",
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/%281%29Vailele_Hunters_Hill.jpg?uselang=ko"
  ]; */

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
      for (let i = 0; i < 12; i++) {
        imageBoxList.push(
          <div css={imageBox} key={`box${i}`}>
            <img css={image} src={ImageList[i]} alt="pho" key={`img${i}`} />
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
