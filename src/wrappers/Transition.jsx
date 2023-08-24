import { styled } from "styled-components";
const Wrapper = styled.div`
  .motion-1 {
    position: fixed;
    background-color: var(--transition-1-clr);
    top: 0;
    bottom: 0;
    right: 100%;
    z-index: 10;
  }
  .motion-2 {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 100%;
    background-color: var(--transition-2-clr);
    z-index: 9;
  }
  .motion-3 {
    z-index: 8;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 100%;
    background-color: var(--transition-3-clr);
  }
`;
export default Wrapper;
