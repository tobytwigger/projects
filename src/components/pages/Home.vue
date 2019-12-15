<template>
    <div>
        <b-row>
            <b-col>
                <large-project-overview
                        v-for="project in featuredProjects"
                        :key="featuredProjects.indexOf(project)"
                        :project="project">

                </large-project-overview>
            </b-col>
        </b-row>

        <b-row>
            <b-col>
                <b-row>
                    <b-col
                            v-for="project in minorProjects"
                            :key="minorProjects.indexOf(project)"
                            md="4"
                    >
                        <small-project-overview :project="project"></small-project-overview>
                    </b-col>
                </b-row>
            </b-col>

        </b-row>

    </div>
</template>

<script>
    import LargeProjectOverview from "../utils/LargeProjectOverview";
    import SmallProjectOverview from "../utils/SmallProjectOverview";

    export default {
        name: "Home",
        components: {LargeProjectOverview, SmallProjectOverview},

        computed: {
            featuredProjects() {
                return [
                    {
                        details: [
                            {label: 'Description', text: 'A longer description'},
                            {label: 'Technologies', text: '<ul><li>PHP</li><li>Laravel</li><li>...</li></ul>'},
                            {label: 'Responsibilities', text: '<ul><li>x</li><li>y</li><li>...</li></ul>'},
                        ],
                        title: 'Bristol SU Committee Portal',
                        description: 'Brief Description'
                    },
                    {
                        details: [
                            {label: 'Description', text: 'A longer description'},
                            {label: 'Technologies', text: '<ul><li>PHP</li><li>Laravel</li><li>...</li></ul>'},
                            {label: 'Responsibilities', text: '<ul><li>x</li><li>y</li><li>...</li></ul>'},
                        ],
                        title: 'Welcome Fair',
                        description: 'Brief Description'
                    },
                ]
            },
            minorProjects() {
                return [
                    {
                        details: [
                            {label: 'Description', text: 'A longer description'},
                            {label: 'Technologies', text: '<ul><li>PHP</li><li>Laravel</li><li>...</li></ul>'},
                            {label: 'Responsibilities', text: '<ul><li>x</li><li>y</li><li>...</li></ul>'},
                        ],
                        title: 'Dissertation',
                        description: 'Brief Description'
                    },
                    {
                        details: [
                            {label: 'Description', text: 'A longer description'},
                            {label: 'Technologies', text: '<ul><li>PHP</li><li>Laravel</li><li>...</li></ul>'},
                            {label: 'Responsibilities', text: '<ul><li>x</li><li>y</li><li>...</li></ul>'},
                        ],
                        title: 'Gpa App',
                        description: 'Brief Description'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
