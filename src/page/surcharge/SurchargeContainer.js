import React from 'react';
import SurchargePresenter from './SurchargePresenter';
const SurchargeContainer = ({ states, callbacks }) => {
  return (
    <SurchargePresenter
      states={states}
      callbacks={callbacks}
    ></SurchargePresenter>
  );
};

export default SurchargeContainer;
