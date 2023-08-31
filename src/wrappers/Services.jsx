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
  @media screen and (min-width: 1200px) {
    .services-container {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
`;
export default Wrapper;
