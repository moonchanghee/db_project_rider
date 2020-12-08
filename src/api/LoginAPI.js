import { reviewAPI } from '.';
import { backend_url } from '../Utils';
import { ApiManager } from '../Utils';
import { setCookie } from '../../src/Utils';
import Cookies from 'js-cookie';
const $http = new ApiManager();
const SUCCESS_CODE = 200;
// var body = {
//   customer_email: 'admin',
//   customer_pw: '0000',
// };

const body = {
  member_id: '20161658',
  member_pw: 'password',
};
export default {
  /**
   * @title findAll
   * @description 관리자 로그인
   */

  PostUser: async () => {
    const url = `http://192.168.64.94:8080/v1/auth/deliverer`;
    var aa = await $http.post(url, body);
    // .then((response) => console.log(response));
    // .then((res) => setCookie('JSESSIONID', res.data.Authorization));

    return aa;
  },
};
