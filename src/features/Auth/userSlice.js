import { createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import storageKeys from "constants/constantKeys";

export const register = createAsyncThunk(
    'users/register',
    async (payLoad) => {
        const data = await userApi.register(payLoad);
        
      // call api register

      //save data to locol storage
      localStorage.setItem(storageKeys.TOKEN, data.jwt);
      localStorage.setItem(storageKeys.USER, JSON.stringify(data.user));


      return data.user;
    }
  )

  export const login = createAsyncThunk(
    'users/login',
    async (payLoad) => {
        const data = await userApi.login(payLoad);
        localStorage.setItem(storageKeys.TOKEN, data.jwt);
        localStorage.setItem(storageKeys.USER, JSON.stringify(data.user));
      // call api register

      //save data to locol storage

      return data.user;
    }
  )

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(storageKeys.USER)) || {},
        setting:{},
    },
    reducers:{
        logout(state){
          localStorage.removeItem(storageKeys.USER);
          localStorage.removeItem(storageKeys.TOKEN);

          state.current = {};
        }
    },
    extraReducer:{
        [register.fullfilled]:(state, action)=>{
            state.current = action.payload;
        },
        [login.fullfilled]:(state, action)=>{
            state.current = action.payload;
        }
    }
});

const {actions, reducer} = userSlice;
export const {logout} = actions;
export default reducer;