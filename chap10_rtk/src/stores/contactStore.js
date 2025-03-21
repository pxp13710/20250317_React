import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BASELONG = 'http://localhost:8000/contacts_long';
const BASEURL = '/api';

// 비동기 엑션 기술
// 동기 액션은 reducers에 기술
// 매개변수는 딱 1개만 지원
// data => {no: 1, size: 5}
export const getContactListAction = createAsyncThunk('CONTACT/GETCONTACTLIST', async (data) => {
  const params = { pageno: data.no, pagesize: data.size };
  const resp = await axios.get(BASELONG, { params });
  return resp.data;
  // Error 처리 안함
})


const contactStore = createSlice({
  name: 'contactStore',
  initialState: {
    contactList: { pageno: '', pagesize: '', totalcount: '', contacts: [] },
    contact: { no: '', name: '', tel: '', address: '', photo: '' },
    status: { status: '', message: '' },
    loading: false,
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    // 비동기 Action 1개에 대해 3개의 상태값을 값을 갖늗다
    // pending => 로딩중
    // fulfilled => 로딩 완료 후 데이터를 성공적으로 받아옴
    // rejected => 처리 실패
    builder.addCase(getContactListAction.pending, (state, action) => {

    });
    builder.addCase(getContactListAction.fulfilled, (state, action) => {

    });
    builder.addCase(getContactListAction.rejected, (state, action) => {

    })
  }
})
export default contactStore;
