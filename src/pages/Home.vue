<template>
  <div>
    <h3>count: {{ count }}</h3>
    <input type="text" v-model="count">
  </div>
</template>

<script>

export default {
  data () {
    return {
      count: 0
    }
  }
}
</script>