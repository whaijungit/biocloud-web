import { defineStore } from "pinia";

const USER_KEY = 'USER'

interface UserState {
    user: any
    actions: string[]
    permissions: any[]
}

export const userStore = defineStore(USER_KEY, {
    state: () => {
        return {
            user: null,
            actions: [],
            permissions: [],
        } as UserState
    },
    actions: {

    }
})