/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-expressions */

import { createAction } from 'redux-actions';
import axios from 'axios';

import { defineEndPoint } from '../utils';

const endPoint = defineEndPoint();

export const displayComments = createAction('DISPLAY_COMMENTS');
export const postComment = createAction('POST_COMMENTS');

export const getComments = index => (
  (dispatch) => {
    axios.get(`${endPoint}/api/comments/`, { params: { index } })
      .then(res => dispatch(displayComments(res.data)));
  }
);
