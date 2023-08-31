import styled from "styled-components";
const Wrapper = styled.div`
  position: relative;

  .services-container {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .header-title {
    text-align: center;
  }
  .header-title span {
    font-size: 2rem;
  }
  .services-p {
  }
  @media screen and (min-width: 1200px) {
    .services-container {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .services-text {
      display: flex;
      flex-direction: column;
      max-width: 800px;
      align-items: start;
    }
  }

  /* important if content hide links and logo */
  @media screen and (max-height: 800px) {
    min-height: 800px;
  }
`;
export default Wrapper;
