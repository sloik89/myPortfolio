import styled from "styled-components";
const Wrapper = styled.section`
  background-color: var(--bgc-clr-home);
  z-index: -1;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }
  .header-title span {
    padding-left: 1rem;
  }

  .img-container {
    position: relative;
  }
  .person {
    display: none;
  }

  @media screen and (min-width: 1000px) {
    width: 100%;
    .flex-container {
      height: 80vh;
      min-height: 800px;
      border: 1px solid white;
    }
    .bg-splash {
      position: absolute;
      top: 30%;
      right: 0;
      width: 40vw;
      height: 40vw;
      background-color: var(--bgc-clr-home);
      background-repeat: no-repeat;
      background-blend-mode: color-dodge;
      background-position: center;
      background-size: cover;
      z-index: 1;
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
      .text-container {
      }
      .img-container {
      }
    }
    @media screen and (min-width: 1400px) {
      .bg-splash {
        top: 0;
        right: 10%;
        width: 100%;
      }
      .img-container {
      }
    }
  }
`;
export default Wrapper;
