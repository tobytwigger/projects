<template>
    <b-row class="padding-bottom">
        <b-col>
            <b-jumbotron :header="project.title" header-level="5" :lead="project.description">
                <accordian
                    :details="project.details"
                    :project-name="project.title">

                </accordian>
                <p>
                    <a class="btn btn-primary btn-large" href="#">See more</a>
                </p>
            </b-jumbotron>

        </b-col>
    </b-row>


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
