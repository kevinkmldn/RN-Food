import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer mvKlaxHk1XxJmTIBlyWnuY3sWjxw3EP_1hxwhWoQi_QMvAIToNYxsWNOv1amlN37T2YLvMkUM30ylxWQUo-4ytCgF0GIJU2fG2MyUHz5q_T_P-XPSgB03mseg68GX3Yx',
  },
});
