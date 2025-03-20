import React, { useState } from "react";
import axios from 'axios'
import { useCallback } from "react";

function Axios() {
  const baseURL = "http://localhost:8000/contacts/";
  const [data, setData] = useState('');

  // Promise => ES2015
  const getContactList = useCallback((no = 1, size = 5) => {
    // axios.get(URL, {params: {pageno: ?, pagesize: ?, ..}, headers: {key: value}, timeout: 2000})
    const params = { pageno: no, pagesize: size };
    const headers = { 'Content-Type': 'application/json' };

    axios.get(baseURL, { params, headers })
      .then(resp => {
        // console.log(resp);
        setData(JSON.stringify(resp.data, '', 4))
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        console.log('성공 / 실패 상관없이 항상 실행')
      })
  }, []);

  // async ~ await => ES2017
  // 함수형태로 구현한다. 시간 걸리는 작업 앞에 await를 걸어놓는다
  // await가 걸린 함수 앞에는 async를 할당한다
  const getContactListAsync = useCallback(async (no = 1, size = 5) => {
    try {
      const params = { pageno: no, pagesize: size };
      const headers = { 'Content-Type': 'application/json' };

      const resp = await axios.get(baseURL, { params, headers, timeout: 2000 })
      console.log(resp.data);
      setData(JSON.stringify(resp.data, '', 4))
    } catch (err) {
      console.error(err)
    }
  }, []);

  const getContact = useCallback((no = 1) => {
    axios({
      method: 'GET',
      url: baseURL + no,
      params: {},
      data: '', // 서버에 전송할 값. POST, PUT, PATCH 에서 사용
      headers: {},
      timeout: 2000,
    })
      .then(resp => setData(JSON.stringify(resp.data, '', 4)))
      .catch(err => console.error(err))
  }, []);

  const addContact = useCallback(() => {
    // axios.post(URL, 전송할값, {params: {pageno: ?, pagesize: ?, ..}, headers: {key: value}, timeout: 2000})
    const headers = { 'Content-Type': 'application/json' };
    const user = { name: "강감찬", tel: "010-2222-3339", address: "서울시" };

    axios.post(baseURL, JSON.stringify(user), { headers })
      .then(resp => setData(JSON.stringify(resp.data, '', 4)))
      .catch(err => console.error(err))
  }, []);
  const updateContact = useCallback((no) => {
    // axios.put(URL, 전송할값, {params: {pageno: ?, pagesize: ?, ..}, headers: {key: value}, timeout: 2000})
    const headers = { 'Content-Type': 'application/json' };
    const user = { no, name: "이순신", tel: "010-2222-1111", address: "충무시" };

    axios.put(baseURL + no, JSON.stringify(user), { headers })
      .then(resp => setData(JSON.stringify(resp.data, '', 4)))
      .catch(err => console.error(err))
  }, []);
  const deleteContact = useCallback((no) => {
    // axios.delete(URL + key, {params: {pageno: ?, pagesize: ?, ..}, headers: {key: value}, timeout: 2000})
    axios.delete(baseURL + no)
      .then(resp => setData(JSON.stringify(resp.data, '', 4)))
      .catch(err => console.error(err))
  }, []);

  return (
    <div>
      <h3>Axios Test</h3>

      <div className="mb-3">
        <button onClick={() => getContactList(1, 10)}>DATA LIST</button>
        <button onClick={() => getContactListAsync(2, 5)}>DATA LIST ASYNC</button>
        <button onClick={() => getContact(2)}>GET</button>
        <button onClick={addContact}>ADD</button>
        <button onClick={() => updateContact(1742456996605)}>UPDATE</button>
        <button onClick={() => deleteContact(1742456996605)}>DELETE</button>
      </div>

      <textarea rows="15" className="form-control" defaultValue={data}></textarea>
    </div>
  );
}
export default Axios;
