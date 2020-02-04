import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  width: 100%;
`;

export const Header = styled.header`
  padding: 65px 0px;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.a`
  color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;

  & > svg {
    width: 28px;
    height: 28px;
  }

  & > p {
    font-weight: bold;
    font-size: 16px;
    margin: 0;
    margin-left: 22px;

    @media (min-width: 700px) {
      font-size: 18px;
    }
  }
`;

export const Nav = styled.nav``;

export const Item = styled.a`
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
  position: relative;
  padding: 10px;
  text-decoration: none;

  cursor: pointer;

  transition: all 300ms ease 0s;

  &:hover {
    color: rgb(130, 249, 161);
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    transition: background 300ms ease 0s;
  }
`;
