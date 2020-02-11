<template>
  <div class="home">
    <Header/>

    <img alt="Vue logo" src="../assets/logo.png">
    <PostComponent/>
    <EventsType/>
  </div>
</template>

<script>
// @ is an alias to /src
import PostComponent from '@/components/PostComponent.vue';
import Header from '@/components/Header.vue';
import EventsType from '@/components/EventsType.vue'
export default {
  name: 'app',
  components: {
    PostComponent,
    Header,
    EventsType,
  }
}
</script>
