import styled from "styled-components";
const Wrapper = styled.div`
  width: 90%;
  border: 2px solid red;
  height: 100vh;
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
    width: 500px;
    bottom: -220px;
    left: -250px;
    display: none;
  }
  .about-text-contaniner {
    h2 {
      font-size: 3rem;
      letter-spacing: 1px;
      text-align: center;
      margin-bottom: 2rem;
    }
    p {
      color: var(--txt-clr);
      font-size: 1.5rem;
      text-align: center;
    }
    span {
      color: var(--text-accent-clr);
    }
  }
  .about-container {
    /* height: 50%; */
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
    font-size: 1.5rem;

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
    font-size: 1.6rem;
    font-weight: 400;
    text-align: center;
  }
  .about-icons {
    margin-top: 1rem;
    display: flex;
    font-size: 3rem;
    align-items: center;
    gap: 1rem;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    max-width: 1800px;
    .about-container {
      flex: 1;
    }
    .about-info {
      flex: 1;
      border: 1px solid red;
    }
    .about-text-contaniner {
      h2 {
        font-size: 4rem;
        text-align: left;
      }
    }
  }
`;
export default Wrapper;
