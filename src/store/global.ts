import { defineStore } from "pinia";

export const userGlobalStore = defineStore('global',{
    state: () =>({
        colorSet: [],
        toolTags: [],
        toolTypes: [],
        colorGraident: [],
    })
})