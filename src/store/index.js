import {defineStore} from "pinia";

export const useAppStore = defineStore('app', {
    state: () => ({
        activeTab:0,
        title:'这是一个标题',
    }),
    actions: {
    }
})
