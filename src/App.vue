<template>
  <div class="app">
    <h />
    <div class="content">
      <router-view />
    </div>
    <f />
  </div>
</template>

<script>
import h from './components/Header';
import f from './components/Footer';

export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    h,
    f
  }
}

</script>

<style>

</style>
