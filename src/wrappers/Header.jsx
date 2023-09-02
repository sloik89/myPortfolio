import styled from "styled-components";
const Wrapper = styled.div`
  padding: 2rem 0;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 6;
  gap: 1rem;
  margin: 0 auto;

  @media screen and (min-width: 900px) {
    flex-direction: row;

    .logo {
      margin-left: 2rem;
      width: 150px;
    }
    .socials {
      flex: 1;
    }
  }
`;
export default Wrapper;
