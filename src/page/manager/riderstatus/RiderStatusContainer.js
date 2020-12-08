import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import RiderStatusPresenter from './RiderStatusPresenter';
const RiderStatusContainer = () => {
  const [recentRider, setRecentRider] = useState();
  const [gradeList, setGradeList] = useState();
  useEffect(() => {
    Axios.get('http://192.168.64.94:8080/v1/company/delivererNew').then((e) =>
      setRecentRider(e.data.data)
    );

    Axios.get('http://192.168.64.94:8080/v1/deliverer/gradeList').then((e) =>
      setGradeList(e.data.data)
    );
  }, []);
  return (
    <RiderStatusPresenter
      recentRider={recentRider}
      gradeList={gradeList}
    ></RiderStatusPresenter>
  );
};

export default RiderStatusContainer;
