import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "a a a a";
  align-items: center;
  justify-content: space-evenly;
  gap: 5%;

  .video-js {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 16px;
  }
  .vjs-poster {
    border-radius: 16px;
  }
  .video-js .vjs-big-play-button {
    /* background-color: red !important; */
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: grid;
    grid-template-areas: "a a";
    justify-content: center;
  }

`;