import { mapGetters, mapActions } from 'vuex'
export const ebookMinxin = {
    computed: {
        ...mapGetters(["fileName", "menuVisible"]),
    },
    methods: {
        ...mapActions(['setFileName', 'setMenuVisible'])
    }
}