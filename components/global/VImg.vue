<template>
  <p>
    <img :src="imgSrc()" :alt="alt" />
  </p>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/content${this.src}`)
      } catch (error) {
        return null
      }
    }
  }
}
</script>
