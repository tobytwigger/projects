<template>
    <div role="tablist">
        <accordian-item
            v-for="item in details"
            :key="details.indexOf(item)"
            :title="item.label"
            :description="item.text"
            :accordian-name="projectName"></accordian-item>
    </div>
</template>

<script>
    import AccordianItem from "./AccordianItem";
    export default {
        name: "Accordian",

        components: {
            AccordianItem
        },

        props: {
            details: {
                required: true,
                type: Array,
                default: function () {
                    return [];
                }
            },
            projectName: {
                required: true,
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>

</style>
