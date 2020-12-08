import React, { useState, useEffect } from 'react';
import RiderManagePresenter from './RiderManagePresenter';
import Axios from 'axios';
const RiderManageContainer = () => {
  const [riderList, setRiderList] = useState([{}]);
  useEffect(() => {
    Axios.get('http://192.168.64.94:8080/v1/deliverer/list', {
      params: { answer: 42 },
    }).then((e) => setRiderList(e.data.data));
  }, []);
  return <RiderManagePresenter riderList={riderList}></RiderManagePresenter>;
};

export default RiderManageContainer;
