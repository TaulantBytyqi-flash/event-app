import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase/app'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

  const firebaseConfig = {
    apiKey: "AIzaSyBghMzxzEBA2j_CqbbEWDhaAMNR6m6QZOU",
    authDomain: "event-b472a.firebaseapp.com",
    databaseURL: "https://event-b472a.firebaseio.com",
    projectId: "event-b472a",
    storageBucket: "event-b472a.appspot.com",
    messagingSenderId: "283294062470",
    appId: "1:283294062470:web:0130f71282e0900cb8fe07",
    measurementId: "G-DNS1L9SC2Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let app;

  firebase.auth().onAuthStateChanged(user =>{
    
    if(!app){
      new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')
    }else{
      console.log(user);
    }

  })

