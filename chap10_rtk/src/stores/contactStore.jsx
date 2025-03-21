import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BASELONG = 'http://localhost:8000/contacts_long/';
const BASEURL = '/api/contacts/';

// 비동기 엑션 기술
// 동기 액션은 reducers에 기술
// 매개변수는 딱 1개만 지원
// data => {no: 1, size: 5}
export const getContactListAction = createAsyncThunk('CONTACT/GETCONTACTLIST', async (data) => {
  const params = { pageno: data.no, pagesize: data.size };
  const resp = await axios.get(BASELONG, { params });
  return resp.data;
})
// data => no
export const getContactAction = createAsyncThunk('CONTACT/GETCONTACT', async (data) => {
  const resp = await axios.get(BASEURL + data);
  return resp.data;
})
// data => no
export const deleteContactAction = createAsyncThunk('CONTACT/DELETECONTACT', async (data) => {
  const resp = await axios.delete(BASEURL + data);
  return resp.data;
});
// data => { name: ?, tel: ?, address: ? }
export const addContactAction = createAsyncThunk('CONTACT/ADDCONTACT', async (data) => {
  const resp = await axios.post(BASEURL, data);
  return resp.data;
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
    builder.addCase(getContactListAction.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.contactList = { pageno: '', pagesize: '', totalcount: '', contacts: [] };
      state.contact = { no: '', name: '', tel: '', address: '', photo: '' };
      state.status = { status: '', message: '' };
    });
    builder.addCase(getContactListAction.fulfilled, (state, action) => {
      state.loading = false;
      state.contactList = action.payload;
    });
    builder.addCase(getContactListAction.rejected, (state, action) => {
      state.loading = false;
      // console.log(action)
      state.error = action.error;
    });

    // contact
    builder.addCase(getContactAction.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.contact = { no: '', name: '', tel: '', address: '', photo: '' };
      state.status = { status: '', message: '' };
    });
    builder.addCase(getContactAction.fulfilled, (state, action) => {
      state.loading = false;
      state.contact = action.payload;
    });
    builder.addCase(getContactAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    // delete
    builder.addCase(deleteContactAction.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.status = { status: '', message: '' };
    });
    builder.addCase(deleteContactAction.fulfilled, (state, action) => {
      state.loading = false;
      state.status = action.payload; // { status: 'success', message... }
    });
    builder.addCase(deleteContactAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    })
  }
})
export default contactStore;
