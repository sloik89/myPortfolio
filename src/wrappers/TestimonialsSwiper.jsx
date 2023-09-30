import styled from "styled-components";
const Wrapper = styled.div`
  max-width: 500px;
  .swiper-inner {
    gap: 1rem;
    height: 480px;
    p:last-child {
      max-width: 250px;
      text-align: center;
    }
    .swiper-pagination-bullets {
    }
    span {
      font-size: 2rem;
      color: var(--btn-work-clr);
    }
  }
  .swiper-img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }
`;
export default Wrapper;
