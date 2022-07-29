const book = {
    state: {
        fileName: '',
        menuVisible: false
    },
    getters: {
    },
    mutations: {
        'SET_FILENAME': (state, fileName) => {
            state.fileName = fileName
        },
        "SET_MENUVISIBLE": (state, menuVisible) => {
            state.menuVisible = menuVisible
        }
    },

}

export default book