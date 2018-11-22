import axios from 'axios';
const rtlLocale = {
  'ar': true,
  'dv': true,
  'he': true,
  'ku': true,
  'fa': true,
  'ur': true
};
function getMessages(locale) {
  return axios.get(`/_translations/${locale}.json`);
}

// Currently no support for rtl in Ant https://github.com/ant-design/ant-design/issues/4051
function isRtlLocale(locale) {
  return Boolean(rtlLocale[locale]);
}

export default {
  getMessages: getMessages,
  isRtlLocale: isRtlLocale
}