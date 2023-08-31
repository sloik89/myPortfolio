import styled from "styled-components";
const Wrapper = styled.div`
  .services-swiper {
    color: white;
    height: 250px;
    max-width: 900px;
    width: 100%;
    @media screen and (min-width: 1200px) {
      margin-right: 2rem;
    }
  }

  .swiper-pagination-bullet {
    background-color: var(--text-accent-clr);
  }
  .swiper-icon {
    color: var(--text-accent-clr);
    font-size: 2.3rem;
  }
  .swiper-title {
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  .swiper-inner {
    height: 100%;
    background-color: rgba(65, 47, 123, 0.2);
    display: flex;
    gap: 1rem;

    @media screen and (min-width: 1200px) {
      flex-direction: column;
    }
  }
  .swiper-arrow {
    font-size: 2rem;
  }
`;
export default Wrapper;
