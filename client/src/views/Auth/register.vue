<template>
    <div>
        <h1>Register</h1>
        <div v-if="error" class="error" >{{error.message}} </div>
        <form  @submit.prevent="pressed">
            <div class="email">
                <label for="email">Enter your email</label>
                <input type="email" v-model="email" id="email">
            </div>
            <div class="password">
                <label for="password">Enter your password</label>
                <input type="password" v-model="password" id="password" >
            </div>
            <button type="submit" >Submit</button>
        </form>
    </div>
</template>
<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
export default {
    methods:{
        async pressed(){
            try{
            const user = firebase.auth().createUserWithEmailAndPassword(this.email,this.password);
            console.log(user);
            this.$router.replace({name:'home'});
            }catch(err){
                console.log(err);
            }
            
        }
    },
    data(){
        return {
            email:'',
            password:'',
            error:'',
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>