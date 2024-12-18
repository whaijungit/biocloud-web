<template>
    <div class="monaco-editor-container" ref="monacoRef" />
</template>

<script setup lang="ts">
import './worke'
import { ref, watchEffect } from 'vue';
import  * as monaco from 'monaco-editor'

const monacoRef = ref<HTMLDivElement>()
const monacoValue = ref<string>('')
const monacoOptions = ref<monaco.editor.IStandaloneEditorConstructionOptions>({
    fontSize: 16,
    fontWeight: '400',
    value: monacoValue.value,
    language: 'json'
})

const emit = defineEmits(['change','update'])

const createEditor = () => {
    if (monacoRef.value) {
        const parentNode = monacoRef.value?.parentElement
        const rect = parentNode?.getBoundingClientRect()
        if (!rect?.height) {
            monacoRef.value!.style.width = rect?.width + 'px'
            monacoRef.value!.style.height = `300px`
        }
        else {
            monacoRef.value.style.height = rect.height  +'px'
        }
        const editorIns = monaco.editor.create(monacoRef.value!, monacoOptions.value)
            editorIns.onDidChangeModelContent(() => {
            const value = editorIns.getValue()
            monacoValue.value = value
            emit('change',value)
        })
    }
    
}

watchEffect(() => {
    createEditor()
})
</script>

<style lang="less" scoped>

</style>