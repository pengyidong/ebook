import { mapGetters, mapActions } from 'vuex'
export const ebookMinxin = {
    computed: {
        ...mapGetters(["fileName", "menuVisible", 'settingVisible', 'defaultFontSize']),
    },
    methods: {
        ...mapActions(['setFileName', 'setMenuVisible', 'setSettingVisible', 'setDefaultFontSize'])
    }
}