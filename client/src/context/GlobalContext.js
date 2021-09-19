import React, {
  createContext, useEffect, useReducer,
} from 'react';
import Api from '../api/data';

export const GlobalContext = createContext({});
export const Consumer = GlobalContext.Consumer;
const GlobalProvider = ({
  children, setAccessToken, getUserData, citizenLogout, accessToken,
}) => {
  const [{ data, currPage, pageSize, count, loading
  }, setState] = useReducer((prev, next) => ({ ...prev, ...next }), {
    data: [],
    currPage: 1,
    pageSize: 10,
    count: 0,
    loading: true
  });
  useEffect(() => {
    async function fetchData() {
      const { count } = await Api.count();
      const data = await Api.getAll({ skip: (currPage - 1) * pageSize, limit: pageSize });
      setState({
        data,
        count,
        loading: false
      });
    }
    fetchData();
  }, [currPage, pageSize, count, loading]);
  console.log(currPage)
  const updateData = async (id, data) => {
    console.log(id, data)
    try {
      setState({
        loading: true,

      })
      const res = await Api.updateOne(id, data);
      console.log({ res })
      setState({
        currPage: 1,
        loading: false
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        data,
        setState,
        updateData,
        currPage,
        pageSize,
        count,
        loading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


export default GlobalProvider;