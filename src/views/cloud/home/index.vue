<template>
    <div style="width: 500px; height: 600px;">
        <MonacoEditor
        @change="handleChange"
    />
    </div>
</template>

<script setup>
import MonacoEditor from '../../../components/monaco-editor/index.vue'
const handleChange = (e) => {
    console.log(e)
}
</script>

<style lang="scss" scoped>

</style>