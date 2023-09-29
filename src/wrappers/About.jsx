import styled from "styled-components";
const Wrapper = styled.div`
  border: 2px solid red;
  height: max(100vh, 800px);
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  .img-about {
    position: absolute;
    width: 50vh;
    max-width: 900px;
    bottom: -420px;
    left: -25vh;
    display: none;
    min-width: 400px;
    z-index: -1;
  }
  .about-text-contaniner {
    h2 {
      margin-bottom: 2rem;
    }
    p {
      color: var(--txt-clr);
    }
    span {
      color: var(--text-accent-clr);
    }
  }
  .about-container {
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    align-items: center;
  }
  .about-nav {
    display: flex;
    gap: 1rem;
    align-items: start;
  }
  .about-item {
    font-size: 1rem;

    position: relative;
  }
  .about-item-active {
    color: var(--text-accent-clr);
  }

  .about-item:hover {
    color: var(--text-accent-clr);
  }

  .about-item::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 5px;
    background-color: #fff;
    transition: all 0.5s ease-in-out;
  }
  .about-item:hover::after {
    background-color: var(--text-accent-clr);
  }
  .about-item-active::after {
    background-color: var(--text-accent-clr);
    width: 100%;
  }
  .about-title {
    font-size: 1.3rem;
    font-weight: 400;
    text-align: center;
  }
  .about-icons {
    margin-top: 1rem;
    display: flex;
    font-size: 2rem;
    align-items: center;
    gap: 1rem;
  }
  .about-counters {
    margin: 2rem 0;
    font-size: 2rem;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    display: none;
    justify-content: space-between;
    .count {
      color: var(--text-accent-clr);
      flex: 1;
      text-align: center;
      font-size: var(--fs-medium);
      span {
      }
      p {
        color: var(--txt-clr);
        font-size: var(--fs-small);
      }
    }
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;

    .about-counters {
      display: flex;
      font-size: var(--fs-small);
    }
    .about-container {
      flex: 1;
      align-self: center;
      max-width: 900px;
      margin-right: 3rem;
    }
    .about-info {
      flex: 1;
      padding: 2rem;
      max-width: 1200px;
    }
    .about-text-contaniner {
      h2 {
        text-align: left;
        max-width: 800px;
      }
      p {
        text-align: left;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    .about-counters .count {
      font-size: var(--fs-high);
      p {
        font-size: var(--fs-medium);
      }
    }
  }
  @media screen and (min-width: 1900px) {
    .img-about {
      display: block;
    }
  }
`;
export default Wrapper;
