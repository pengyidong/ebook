import { mapGetters, mapActions } from "vuex";
export const ebookMinx = {
    computed: {
        ...mapGetters(["fileName", "menuVisible"]),
        ...mapActions(['SET_FILENAME', 'SET_MENUVISIBLE'])
    }
}