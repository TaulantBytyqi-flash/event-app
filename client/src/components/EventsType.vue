<template>
    <div class ="container">
      <h1>Event List</h1>
      <!-- Create posts-->
      <div class="create-post">
        <label for="create-event">Create An event Type: </label>
        <input type="text" id="create-event" v-model="eventName" placeholder="Event Description"><br>
        <button v-on:click="createEventsType">Create!</button>
      </div>
      <hr>
      <p class="error" v-if="error" > {{error}}</p>
      <p class="error-2"></p>
      <div class="post-container">
        <div class="posts" v-for="(event,index) in events" v-bind:item="eventName" v-bind:index="index" v-bind:key="event._id" v-on:dblclick="deleteEventsType(event._id)">
         {{`${event.createdAt.getDate()}/${event.createdAt.getMonth()}/${event.createdAt.getFullYear()}`}}
          <ul>
          <li>{{event.eventName}}</li>
          </ul>
        </div>
      </div>
    </div>
</template>
  
<script>
import EventsTypeServices from '../../EventsTypeServices';

export default {
  name: 'EventsType',
  data(){
    return {
      events: [],
      error: "",
      eventName: '',
    }
  },
  async created(){
    try{
      this.events = await EventsTypeServices.getEventsType();
    }catch(err){
      this.error = err.message;
    }
  },
  methods:{
    async createEventsType(){
      if(this.eventName == ""){
        this.error = 'Please add some text!';
        return false;
      }
      await EventsTypeServices.insertEventsType(this.eventName);
      this.posts = await EventsTypeServices.getEventsType();
      this.error = null;
    },
      async deleteEventsType(id){
      await EventsTypeServices.deleteEventsType(id);
      this.events = await EventsTypeServices.getEventsType();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding:  10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color:  #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
