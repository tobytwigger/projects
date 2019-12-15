<template>
    <b-card
            :title="project.title">
        <b-card-text>
            {{project.description}}
        </b-card-text>

        <accordian
            :details="project.details"
            :project-name="project.title">

        </accordian>
        <b-button href="#" variant="primary">See more</b-button>

    </b-card>
</template>

<script>
    import Accordian from "../bootstrap/Accordian";

    export default {
        name: "LargeProjectOverview",
        components: {Accordian},
        props: {
            project: {
                required: true,
                type: Object
            }
        }
    }
</script>

<style scoped>

</style>
