import { createSlice } from '@reduxjs/toolkit';
import { status } from '../../utils/constants';

const initialState = {
  groups: {
    status: status.SHOULD_CALL_API,
    data: {},
  },
};

const firstViewSlice = createSlice({
  name: 'firstView',
  initialState,
  reducers: {
    fetchgroups(state) {
      state.groups = {
        status: status.FETCHING,
        data: {},
      };
    },
    fetchgroupsSuccess(state, action) {
      state.groups = {
        status: status.SUCCESS,
        data: action.payload,
      };
    },
    fetchgroupsFail(state) {
      state.groups = {
        status: status.FAIL,
      };
    },
  },
});

export const {
  fetchgroups,
  fetchgroupsFail,
  fetchgroupsSuccess
} = firstViewSlice.actions;

export default firstViewSlice.reducer;
