/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-expressions */

import { createAction } from 'redux-actions';
import axios from 'axios';

import { defineEndPoint } from '../utils';

const endPoint = defineEndPoint();

export const setComments = createAction('SET_COMMENTS');

export const getComments = index => (
  (dispatch) => {
    axios.get(`${endPoint}/api/comments/`, { params: { index } })
      .then(res => dispatch(setComments(res.data)));
  }
);

export const postComment = comment => (
  (dispatch) => {
    axios.post(`${endPoint}/api/comments/`, { params: { index } })
      .then(res => dispatch(setComments(res.data)));
  }
)
