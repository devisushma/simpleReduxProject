import { createSelector } from 'reselect';
import { nameSpace } from "./actionTypes";

const getState = state => state[nameSpace]

export const getCount = createSelector(
 [getState],
  ({ count }) => count 
);