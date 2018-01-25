/**
 * Copyright (c) 2018-present, xp
 * All rights reserved.
 * reducer合并
 * @flow
 */
import { combineReducers } from 'redux';
import loginIn from './loginReducer';
import counter from './counterReducer';
import nav from './navReducer';

const rootReducer = combineReducers({
  loginIn,
  counter,
  nav
});

export default rootReducer;
