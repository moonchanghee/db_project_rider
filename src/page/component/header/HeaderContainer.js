import React from 'react';
import HeaderPresenter from './HeaderPresenter';

const HeaderContainer = (props) => {
  console.log(props);
  return <HeaderPresenter props={props}></HeaderPresenter>;
};

export default HeaderContainer;
