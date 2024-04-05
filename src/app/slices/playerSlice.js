// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     currentSong: null,
//     isPlaying: false,
//     playlist: [],
//     shuffle: false,
//     repeat: false,
//     volume: 0.5,
//     genreListId: "",
// };

// const playerSlice = createSlice({
//     name: "player",
//     initialState,
//     reducers: {
//         playSong: (state, action) => {
//             state.currentSong = action.payload;
//             state.isPlaying = true;
//         },
//         pauseSong: (state) => {
//             state.isPlaying = false;
//         },
//         stopSong: (state) => {
//             state.currentSong = null;
//             state.isPlaying = false;
//         },
//         addToPlaylist: (state, action) => {
//             state.playlist.push(action.payload);
//         },
//         removeFromPlaylist: (state, action) => {
//             state.playlist = state.playlist.filter(
//                 (song) => song.id !== action.payload
//             );
//         },
//         shufflePlaylist: (state) => {
//             state.shuffle = !state.shuffle;
//         },
//         setRepeat: (state, action) => {
//             state.repeat = action.payload;
//         },
//         setVolume: (state, action) => {
//             state.volume = action.payload;
//         },
//         selectGenreListId: (state, action) => {
//             state.genreListId = action.payload;
//         },
//     },
// });

// export const {
//     playSong,
//     pauseSong,
//     stopSong,
//     addToPlaylist,
//     removeFromPlaylist,
//     shufflePlaylist,
//     setRepeat,
//     setVolume,
//     selectGenreListId,
// } = playerSlice.actions;

// export default playerSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSongs: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {},
    genreListId: "",
};

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        setActiveSong: (state, action) => {
            state.activeSong = action.payload.song;

            if (action.payload?.data?.tracks?.hits) {
                state.currentSongs = action.payload.data.tracks.hits;
            } else if (action.payload?.data?.properties) {
                state.currentSongs = action.payload?.data?.tracks;
            } else {
                state.currentSongs = action.payload.data;
            }

            state.currentIndex = action.payload.i;
            state.isActive = true;
        },

        nextSong: (state, action) => {
            if (state.currentSongs[action.payload]?.track) {
                state.activeSong = state.currentSongs[action.payload]?.track;
            } else {
                state.activeSong = state.currentSongs[action.payload];
            }

            state.currentIndex = action.payload;
            state.isActive = true;
        },

        prevSong: (state, action) => {
            if (state.currentSongs[action.payload]?.track) {
                state.activeSong = state.currentSongs[action.payload]?.track;
            } else {
                state.activeSong = state.currentSongs[action.payload];
            }

            state.currentIndex = action.payload;
            state.isActive = true;
        },

        playPause: (state, action) => {
            state.isPlaying = action.payload;
        },

        selectGenreListId: (state, action) => {
            state.genreListId = action.payload;
        },
    },
});

export const {
    setActiveSong,
    nextSong,
    prevSong,
    playPause,
    selectGenreListId,
} = playerSlice.actions;

export default playerSlice.reducer;
