<template>
  <b-card :key="slug" class="mb-1" no-body>
    <b-card-header class="p-1" header-tag="header" role="tab">
      <b-button block href="#" v-b-toggle="'accordion-'+slug" variant="info">{{title}}</b-button>
    </b-card-header>
    <b-collapse :id="'accordion-' + slug" :accordion="accordianName" role="tabpanel" >
      <b-card-body>
        <b-card-text>{{ description }}</b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>
<script>
  export default {
    name: "Accordian",

    props: {
      title: {
        required: true,
        type: String
      },
      description: {
        required: true,
        type: String
      },
      accordianName: {
        required: true,
        type: String
      }
    },

    computed: {
      slug() {
        return this.title.toString().toLowerCase()
          .replace(/\s+/g, '-')           // Replace spaces with -
          .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
          .replace(/\-\-+/g, '-')         // Replace multiple - with single -
          .replace(/^-+/, '')             // Trim - from start of text
          .replace(/-+$/, '');            // Trim - from end of text
      }
    }
  }
</script>

<style scoped>

</style>
