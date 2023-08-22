import styled from "styled-components";
const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--nav-bg);
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 4;
  padding: 1rem 2rem;
  .text-accent {
    color: red;
  }
  a {
    position: relative;
  }
  a.disabled {
    pointer-events: none;
  }

  .tooltip {
    position: absolute;
    top: 50%;
    left: -135px;
    font-size: 1rem;
    background-color: #fff;
    padding: 8px;
    color: red;
    display: none;
    transform: translateY(-50%);
    width: 120px;
  }
  .triangle {
    width: 12px;
    height: 12px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%) rotate(45deg);
    z-index: -1;
  }
  @media screen and (min-width: 900px) {
    height: 500px;
    margin: auto 0;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: unset;
    right: 2%;
    gap: 2rem;
    width: auto;
    align-items: center;
    border-radius: 30px;
    a:hover .tooltip {
      display: block;
    }
  }
`;
export default Wrapper;
