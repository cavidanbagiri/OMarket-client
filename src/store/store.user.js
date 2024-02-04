
import { defineStore } from "pinia";

import axios from 'axios';
axios.defaults.withCredentials = true;

import {API, API_URL} from "../http";

const UserStore = defineStore('UserStore', {
  state: () => ({
    user: null,
    user_teleport: false,
    auth: false,
  }),

  getters:{
    GETUSER : (state) => state.user,
    GETUSERTELEPORT: (state) => state.user_teleport,
  },

  actions:{

    async registerUser(user_data){
      await API.post('/user/register', user_data)
      .then((respond)=>{
        this.user = respond.data.user
        localStorage.setItem('token', respond.data.access);
        localStorage.setItem('user', JSON.stringify( respond.data.user));
        this.auth = true;
      }).catch((err)=>{
        console.log('User Error : ', err);
      })

    },

    async loginUser(user_data){
      await API.post('/user/login', user_data)
      .then((respond)=>{
        this.user = respond.data.user
        console.log('this user is : ', this.user);
        localStorage.setItem('token', respond.data.access);
        localStorage.setItem('user', JSON.stringify( respond.data.user));
        this.auth = true
      }).catch((err)=>{
        console.log('User Error : ', err);
      })
    },

    async logoutUser(user_data){
      await API.post('/user/logout')
      .then((respond)=>{
        this.user = null
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.auth = false
      }).catch((err)=>{
        console.log('User Error : ', err);
      })
    },

    async checkAuth(){
      await axios.get(`${API_URL}/user/refresh`)
      .then((respond)=>{
        this.user = respond.data.user
        localStorage.setItem('token', respond.data.access);
        localStorage.setItem('user', JSON.stringify( respond.data.user));
        this.auth = true
      })
    },


    async fuserFunc(user_data){
      const token = localStorage.getItem('token');
      await API.get('/user/users')
      .then((respond)=>{
        console.log('respond data : ', respond.data);
      }).catch((err)=>{
        console.log('User Error : ', err);
      })

    },

  }

})

export default  UserStore;