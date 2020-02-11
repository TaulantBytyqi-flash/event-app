<template>
    <div>
        <h1>Log in</h1>
        <form @submit.prevent="pressed">
            <div class="login">
                <input type="email" placeholder="Email" v-model="email" >
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="Password">
            </div>
            <button type="submit">Login</button>
        </form>
        <div class="error" v-if="error" >{{error.message}}</div>
        <span>Need a account? <router-link to="/register">Register</router-link> </span>
    </div>
</template>
<script>
	import * as firebase from 'firebase/app';
	import 'firebase/auth';
export default {
    data() {
        return {
            email:"",
            password:'',
            error:'',
        }
    },
    methods: {
       async pressed(){
            try{
            const val = firebase.auth().signInWithEmailAndPassword(this.email,this.password);
            console.log(val);
            this.$router.replace({name:'home'})

            }catch(err){
                console.log(err);
            }
        }
    },
}
</script>

<style lang="stylus" scoped>

</style>