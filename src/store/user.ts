import { defineStore } from "pinia";

const USER_KEY = 'USER'

interface UserState {
    user: any
    actions: string[]
    permissions: any[]
}

export const useUserStore = defineStore(USER_KEY, {
    state: () => ({
        user: null,
        actions: [],
        permissions: [],
    }) as UserState,
    getters :{
        
    },
    actions: {

    }
})