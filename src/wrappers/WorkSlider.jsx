import styled from "styled-components";
const Wrapper = styled.div`
  .work-btn-container {
    display: flex;
    margin: 2rem auto;
    flex-wrap: wrap;
    gap: 1rem;
    max-width: 550px;
  }
  .work-btn {
    padding: 0.5rem 1rem;
    background-color: var(--btn-work-clr);
    color: var(--txt-clr);
    border-radius: 0.5rem;
    transition: 0.3s ease-in-out;
  }
  .work-btn-active {
    color: var(--text-accent-clr);
    background-color: var(--hover-btn-bg);
  }
  .work-btn:hover {
    color: var(--text-accent-clr);
    background-color: var(--hover-btn-bg);
  }
  /* gallery */
  .work-gallery {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  .work-item {
    width: 300px;
    min-height: 500px;
    border-radius: 1rem;
    cursor: pointer;
    padding: 1rem;
    background-color: var(--btn-work-clr);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  .work-item:hover .work-item-content {
    transform: translateY(0);
  }
  .work-item-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(100%);
    background: radial-gradient(
      circle,
      rgba(217, 27, 175, 1) 0%,
      rgba(217, 27, 175, 0) 100%
    );

    opacity: 0.7;
    transition: 0.2s linear;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    a {
      font-size: 3rem;
      color: white;
    }
    a:hover {
      color: black;
    }
  }
  .work-item-img {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    border-radius: 1rem;
    max-width: 500px;
    overflow: hidden;
    height: 300px;
  }
  /* @media screen and (min-width: 800px) {
    .work-gallery {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
    .work-item {
      width: 400px;
    }
  } */
`;
export default Wrapper;
