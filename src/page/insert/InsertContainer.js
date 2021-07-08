import React, { useEffect } from 'react';
import Cookie from 'js-cookie';
import InsertPresenter from './InsertPresenter';
import Axios from 'axios';
const InsertContainer = ({ states, callbacks }) => {
  return <InsertPresenter states={states} callbacks={callbacks} />;
};

export default InsertContainer;
