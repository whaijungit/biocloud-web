import { defineStore } from "pinia";

const USER_KEY = 'USER'

interface UserState {
    user: any
    actions: string[]
    permissions: any[]
}

export const userStore = defineStore(USER_KEY,{
    state: {
        
    } as UserState,
    actions: {

    }
})