import styled from "styled-components";
const Wrapper = styled.section`
  background-color: var(--bgc-clr-home);
  z-index: -1;
  height: max(100vh, 800px);
  display: flex;
  justify-content: center;
  align-items: center;

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
  }

  .header-title span {
    padding-left: 1rem;
  }
  .main-desc {
  }
  .img-container {
    position: relative;
  }
  .person {
    display: none;
  }

  @media screen and (min-width: 800px) {
    width: 100%;
    .text-container {
      padding: 0 1rem;
      align-items: start;
    }
    .desc {
      text-align: left;
    }
    .flex-container {
      max-width: 1600px;
      border: 1px solid white;
    }
    .img-container {
      position: relative;
    }
    .bg-splash {
      position: absolute;
      bottom: 0%;
      left: 0;
      width: 30vw;
      height: 30vw;
      background-color: var(--bgc-clr-home);
      background-repeat: no-repeat;
      background-blend-mode: color-dodge;
      background-position: center;
      background-size: cover;
      z-index: 1;
      max-width: 600px;
      max-height: 600px;
    }
    .white-bg {
      background-blend-mode: normal;
    }
    .img-container {
      max-width: 800px;
    }
    .person {
      display: block;
      position: absolute;
      bottom: 0%;
      right: 20%;
      position: absolute;
      z-index: 2;
      width: 50%;
    }

    .flex-container {
      flex: 1;
      display: flex;
      & > * {
        flex: 1;
      }
    }
  }
`;
export default Wrapper;
