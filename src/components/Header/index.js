import React from 'react';

import Diamond from '../../assets/img/diamond.svg';

import * as S from './styles';

const Header = () => (
  <S.Wrapper>
    <S.Header>
      <S.Title>
        <Diamond />
        <p>Lucas Kahl</p>
      </S.Title>
      <S.Nav>
        <S.Item>Artigos</S.Item>
        <S.Item>Notas</S.Item>
        <S.Item>Sobre mim</S.Item>
      </S.Nav>
    </S.Header>
  </S.Wrapper>
);

export default Header;
