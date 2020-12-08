const reg = {
  /* 아이디/패스워드 */
  account: /^[a-zA-Z0-9]{4,100}$/,
  accountEng: /[^a-z|^0-9]/gi,
  password: /^[a-zA-Z0-9]{4,100}$/,

  /* 이름형식 */
  name: /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/,

  /* 텍스트 */
  text: /^[a-zA-Z0-9]{1,255}$/,

  /* 숫자 */
  number: /^[0-9]+$/,

  /* 연락처/일반전화 */
  phone: /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/,
  phone2: /^\d{3}-\d{3,4}-\d{4}$/,
  contact: /^\d{2,3}-\d{3,4}-\d{4}$/,

  /* 이메일 */
  email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,

  /* 공백체크 */
  isBlank: /s$/,

  /* 스크립트 제거 */
  isScript: '<script[^>]*>(.*?)</script>',
  exchangeScript: str => str.replace('<script[^>]*>(.*?)</script>', '')
};

export default (type, value) => {
  return reg[type].test(value);
};
