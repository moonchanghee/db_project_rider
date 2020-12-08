import React, { useEffect, useState } from 'react';
import MotorCyclePresenter from './MotorCyclePresenter';
import Axios from 'axios';
const MortorCycleContainer = () => {
  const [motorcycleData, setMotorcycleData] = useState([{}]);
  useEffect(() => {
    Axios.get('https://192.168.64.94:8080/v1/company/cyclelist').then(
      (e) => setMotorcycleData(e.data.data)
      // console.log(e)
    );
    // Axios.get('http://192.168.64.94:8080/v1/company/order/endlist').then((e) =>
    //   console.log(e)
    // );
  }, []);

  return (
    <MotorCyclePresenter motorcycleData={motorcycleData}></MotorCyclePresenter>
  );
};

export default MortorCycleContainer;
