const book = {
    state: {
        fileName: '',
        menuVisible: false,
        // -1:隐藏，0:显示，1:主题，2:进度，3:目录，
        settingVisible: -1,
        defaultFontSize: 16
    },
    mutations: {
        'SET_FILENAME': (state, fileName) => {
            state.fileName = fileName
        },
        "SET_MENUVISIBLE": (state, menuVisible) => {
            state.menuVisible = menuVisible
        },
        "SET_SETTINGVISIBLE": (state, settingVisible) => {
            state.settingVisible = settingVisible
        },
        "SET_DEFAULTFONTSIZE": (state, defaultFontSize) => {
            state.defaultFontSize = defaultFontSize
        }
    },

}

export default book