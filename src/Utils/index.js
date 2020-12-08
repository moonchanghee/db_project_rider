/**
 * UTILS
 * @오경우 2019-10-14 12:36:34
 * external api address 추가
 *
 */

import GLOBAL from './config/global';
import moment from 'moment';
import 'moment/locale/ko';
const deployType = process.env.REACT_APP_DEPLOY_TYPE
  ? process.env.REACT_APP_DEPLOY_TYPE
  : process.env.NODE_ENV;

// if (deployType === 'developmentㅅ') {
//   //console.log(
//     '============================================================================================================'
//   );
//   //console.log('DEVELOPMENT MODE : ', process.env);
//   //console.log(
//     '============================================================================================================'
//   );
// }

export const backend_url = GLOBAL[deployType]['backend_url'];
export const bucket_url = GLOBAL[deployType]['bucket_url'];

export { default as ApiManager } from './ApiManager';
export { default as Notification } from './Notification';


/**
 * 메시지
 */
export { default as MessageAlert } from './MessageAlert';

/**
 *
 */
export { default as ConfirmAlert } from './ConfirmAlert';

/**
 *
 */
export { default as validate } from './validate';

/**
 * 객체 null 체크
 */
export const objectIsNull = (o) => {
  // null 일 경우 True
  return o ? Object.keys(o).length < 1 : true;
};

/**
 * 문자열 길이 제한
 * --
 */
export const strCut = (str, limit = 15, replaceStr = '...') => {
  const s = typeof str === 'string' ? str : String(str);
  return `${s.slice(0, limit)}${str.length > limit ? replaceStr : ''}`;
};

/*  timestamp 날짜형식 변환  */
const timestampDefaultFormat = {
  Y: '.',
  M: '.',
  D: '',
  h: ':',
  m: ':',
  s: '',
};
/** Timstamp to custom format */
export const dateFormatConverter = (
  ts,
  customFormat = null,
  filters = null
) => {
  let format = { ...timestampDefaultFormat };
  if (customFormat) format = { ...format, ...customFormat };
  const date = new Date(ts);
  let result = {
    Y: date.getFullYear(),
    M:
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1,
    D: date.getDate() + 1 < 10 ? `0${date.getDate() + 1}` : date.getDate(),
    h: date.getHours() + 1 < 10 ? `0${date.getHours()}` : date.getHours(),
    m:
      date.getMinutes() + 1 < 10
        ? `0${date.getMinutes() + 1}`
        : date.getMinutes() + 1,
    s:
      date.getSeconds() + 1 < 10
        ? `0${date.getSeconds() + 1}`
        : date.getSeconds() + 1,
  };

  if (filters) {
    let rr = '';
    for (let i of filters) {
      rr += `${result[i]}${format[i]} `;
    }
    return rr;
  }
  return `${result.Y}${format.Y}${result.M}${format.M}${result.D}${format.D} ${result.h}${format.h}${result.m}${format.m}${result.s}${format.s}`;
};

/**
 * 빈값 체크
 * --
 */
export const isNull = (v) =>
  v === undefined || v === null || objectIsNull(v) || isNaN(v) || v === '';

/**
 * 금액 포맷터
 * --
 */
export const stringToMoneyFormat = (v = 0, unit = '') => {
  // const value = String(isNull(v) ? 0 : v)
  const value = String(v ? v : 0)
    .split('')
    .reverse()
    .join('');
  const valueLength = value.length;
  let result = '';
  for (let ii in value) {
    result += String(value[ii]);
    if ((ii + 1) % 3 === 0 && ii < valueLength - 1) {
      result += ',';
    }
  }
  return `${result.split('').reverse().join('')}${unit}`;
};

export const dateKorean = (date = new Date()) => {
  return moment.utc(date).format('lll');
};

/**
 *
 * --
 */
export const momentDateToString = (value) => {
  const year = value.year();
  const month =
    value.month() + 1 < 10 ? `0${value.month() + 1}` : value.month() + 1;
  const day = value.date() < 10 ? `0${value.date()}` : value.date();

  return `${year}-${month}-${day}`;
};

/**
 * 쿠키찾기
 * --
 */
export const getCookie = (name, options = null) => {
  const value = window.document.cookie.match(
    '(^|;) ?' + name + '=([^;]*)(;|$)'
  );
  return value ? value[2] : null;
};

/**
 * 쿠키저장
 * --
 */
export const setCookie = (name, value, callback = false) => {
  window.document.cookie = `${name}=${value}; path=/`;
  if (callback) callback();
};

/**
 * 쿠키삭제
 * --
 */
export const deleteCookie = (name, { path, domain }) => {
  if (getCookie(name)) {
    window.document.cookie =
      name +
      '=' +
      (path ? ';path=' + path : '') +
      (domain ? ';domain=' + domain : '') +
      ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
  }
};

/**
 * setSession
 * @param {*} url
 * @오경우 2019-10-14 14:59:06
 */
export const setSession = (key, value) => {
  window.sessionStorage.setItem(key, JSON.stringify(value));
  if (getSession(key) !== null) {
    return true;
  } else {
    return false;
  }
};

/**
 * getSession
 * @param {*} url
 * @오경우 2019-10-14 14:59:08
 */
export const getSession = (key) => {
  const session = window.sessionStorage.getItem(key);
  return JSON.parse(session);
};

/**
 * @NOTE Session Clear
 * @SINCE 2020-01-10 09:42:00
 * @AUTHOR OngDV
 */
export const clearSession = () => {
  window.sessionStorage.clear();
};

/**
 * Querystring parser
 */
export const querystringParser = (url) => {
  let result = {};
  let name;
  let value;
  // 쿼리스트링 파싱
  const rawData = url.split('?')[1] ? url.split('?')[1] : url.split('?')[0];
  const params = rawData.split('&');
  params.forEach((param) => {
    param = param.split('=');
    name = param[0];
    value = param[1];
    if (name.length)
      if (result[name] !== undefined) {
        if (!result[name].push) {
          result[name] = [result[name]];
        }
        result[name].push(value || '');
      } else {
        result[name] = value || '';
      }
  });
  // alert(result);
  return result;
};

export const _jsonToQueryString = (params = null) => {
  // cno는 필수 파라미터 - 기본값
  let queryString = ``;
  // 파라미터가 있는경우
  if (params) {
    const keys = Object.keys(params);
    if (keys.length > 0) {
      for (let ii in keys) {
        queryString += `&${keys[ii]}=${params[keys[ii]]}`;
      }
      return `?${queryString.slice(1)}`;
    }
  }
  return ``;
};

/**
 *
 */
export const getPath = (path = null) => {
  const host = window.location.host;
  const pathname = window.location.pathname;
  const serviceName = pathname.split('/')[1];

  return {
    host,
    pathname,
    serviceName,
    equals: path === pathname,
  };
};
