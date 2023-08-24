import styled from "styled-components";
const Wrapper = styled.div`
  .project-btn {
    animation: rotate infinite 5s linear forwards;
    cursor: pointer;
    width: 200px;
  }

  .link {
    position: relative;
  }
  .link:hover .link-icon {
    margin-left: 1rem;
  }
  .link:hover .project-btn {
    animation-play-state: paused;
  }
  .link-icon {
    font-size: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--txt-clr);
    transition: all 0.2s ease-in-out;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export default Wrapper;
