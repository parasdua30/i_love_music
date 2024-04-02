import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSong: null,
    isPlaying: false,
    playlist: [],
    shuffle: false,
    repeat: false,
    volume: 0.5,
    genreListId: "",
};

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        playSong: (state, action) => {
            state.currentSong = action.payload;
            state.isPlaying = true;
        },
        pauseSong: (state) => {
            state.isPlaying = false;
        },
        stopSong: (state) => {
            state.currentSong = null;
            state.isPlaying = false;
        },
        addToPlaylist: (state, action) => {
            state.playlist.push(action.payload);
        },
        removeFromPlaylist: (state, action) => {
            state.playlist = state.playlist.filter(
                (song) => song.id !== action.payload
            );
        },
        shufflePlaylist: (state) => {
            state.shuffle = !state.shuffle;
        },
        setRepeat: (state, action) => {
            state.repeat = action.payload;
        },
        setVolume: (state, action) => {
            state.volume = action.payload;
        },
        selectGenreListId: (state, action) => {
            state.genreListId = action.payload;
        },
    },
});

export const {
    playSong,
    pauseSong,
    stopSong,
    addToPlaylist,
    removeFromPlaylist,
    shufflePlaylist,
    setRepeat,
    setVolume,
    selectGenreListId,
} = playerSlice.actions;

export default playerSlice.reducer;
