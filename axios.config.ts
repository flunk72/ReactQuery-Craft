// import axios from 'axios';
// import * as auth from './auth';
// import * as navigation from './navigation';
// import * as proceedings from './proceeding'
// import * as usersList from './usersList'
// import * as lawsuit from './lawsuit'
// import * as lawsuitState from './lawsuitUpdate'
// import * as participantType from './participantType'
// import * as subjectDisput from './subjectDisput'
// import * as subscription from './subscription';
// import * as company from './company'
// import * as meetingType from './meetingType'
// import * as system from './system'
// import * as city from './city'
// import * as instanceType from './instanceType'
// import * as yesNoType from './yesNoType'
// import userManager from './user';
// import queryClient from '../queryClient';
// import { homepage, prodacthost } from '../../package.json';

// axios.defaults.baseURL = window.location.href.startsWith(prodacthost)
//   ? `${prodacthost}/api/back/v1` : `${homepage}/api/back/v1`
// axios.defaults.headers.common.pragma = 'no-cache';
// axios.defaults.headers.common['cache-control'] = 'no-cache';

// axios.interceptors.request.use(async (config) => {
//   const user: Oidc.User = await userManager.getUser();

//   if (user?.expired || !user?.access_token) {
//     userManager.signinRedirect({ state: `${window.location.pathname}${window.location.search}` });
//   } else {
//     queryClient.setQueryData('user', user?.profile);
//     config.headers.Authorization = `Bearer ${user.access_token}`;
//   }
//   return config;
// });

// axios.interceptors.response.use(res => {
//   if (res.config.responseType === 'blob') return res;

//   if (res.data?.status === 'error') {
//     return Promise.reject(res.data?.errors?.[0]?.error || 'Произошла неизвестная ошибка');
//   }
//   console.log(res);
//   console.log(res.data);
//   console.log(res.data?.response);
//   return {
//     ...res,
//     data: res.data?.response ?? res.data?.items ?? null,
//     statusText: res.data?.messages?.[0] ?? '',
//   };
// });

// const srv = {
//   ...auth,
//   ...navigation,
//   ...proceedings,
//   ...usersList,
//   ...lawsuit,
//   ...company,
//   ...lawsuitState,
//   ...participantType,
//   ...subjectDisput,
//   ...subscription,
//   ...system,
//   ...city,
//   ...meetingType,
//   ...instanceType,
//   ...yesNoType,
//   userManager,
// }

// export default srv;

// import axios, { AxiosError } from 'axios';
// import queryClient from '../queryClient';
// import * as contragent from './contragent';
// import * as dict from './dict';
// import * as feature from './feature';
// import * as feedback from './feedback';
// import * as serviceCenters from './serviceCenters';
// import * as system from './system';
// import * as user from './user';
// import * as phone from './phone';
// import { homepage } from '../../package.json';

// axios.defaults.baseURL = window.location.href.startsWith(homepage)
//    ? `${homepage}/api/back/v1`
//    : 'http://at-vtddev01.vostok-electra.ru:10000/api/back/v1'

// axios.interceptors.request.use(async (config) => {
//   const token = localStorage.getItem('token');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// axios.interceptors.response.use(res => {
//   if (res.config.responseType === 'blob') return res;

//   if (res.data?.status === 'error') {
//     const errorArray= [
//       100210, 100212, 100213, 100214, 100215, 100216, 100217, 100218, 100219, 100220
//     ]
//     if(errorArray.includes(res.data?.errors?.[0]?.code)) {
//       return Promise.reject(res.data?.errors?.[0]?.code?.toString())
//     }
//       return Promise.reject(res.data?.errors?.[0]?.error || 'Произошла неизвестная ошибка');
//   }
  

//   return {
//     ...res,
//     data: res.data?.response ?? null,
//     statusText: res.data?.messages?.[0] ?? '',
//   };
// }, (err: AxiosError) => {
//   const token = localStorage.getItem('token');

//   if (err.response?.status === 401 && !!token) {
//     localStorage.removeItem('token');
//     queryClient.resetQueries('user');
//     queryClient.clear();
//   }

//   return Promise.reject(err.message);
// });

// const srv = {
//   ...contragent,
//   ...dict,
//   ...feature,
//   ...feedback,
//   ...serviceCenters,
//   ...system,
//   ...user,
//   ...phone
// };

// export default srv;

// import axios, { AxiosError } from 'axios';
// import queryClient from '../queryClient';
// import * as user from './user';
// import * as electricity from './electricity';
// import * as address from './address';
// import { prodacthost, testhost, develophost } from '../../package.json';

// axios.defaults.baseURL = window.location.href.startsWith(prodacthost)
//   ? `${prodacthost}/api/back/v1`
//   : window.location.href.startsWith(testhost)
//     ? `${testhost}:40100/api/back/v1`
//   : `${develophost}/api/back/v1`;


// axios.interceptors.request.use(async (config) => {
//   const token = localStorage.getItem('token');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// axios.interceptors.response.use(res => {
//   if (res.config.responseType === 'blob') return res;

//   if (res.data?.status === 'error') {
//     return Promise.reject(res.data?.errors?.[0]?.error || 'Произошла неизвестная ошибка');
//   }

//   return {
//     ...res,
//     data: res.data?.response ?? null,
//     statusText: res.data?.messages?.[0] ?? '',
//   };
// }, (err: AxiosError) => {
//   const token = localStorage.getItem('token');

//   if (err.response?.status === 401 && !!token) {
//     localStorage.removeItem('token');
//     queryClient.resetQueries('user');
//     queryClient.clear();
//   }

//   return Promise.reject(err.message);
// });

// const srv = {
//   ...user,
//   ...electricity,
//   ...address,
// };

// export default srv;