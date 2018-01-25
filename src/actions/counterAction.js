/**
 * Copyright (c) 2018-present, xp
 * All rights reserved.
 * 计数action
 * @flow
 */
import *as types from '../constants/counterTypes';

export function decrement() {
  return {
    type: types.DECREMENT,
  }
}

export function increment() {
  return {
    type: types.INCREMENT,
  }
}
