import { createSlice } from "@reduxjs/toolkit";


const recommendSlice = createSlice({
    name: 'recommend',
    initialState: {
        showRecommendationView: false,
        recommendedMovies: null
    },
    reducers: {
        toggleRecommendationView: (state, action) => {
            state.showRecommendationView = !state.showRecommendationView
        },
        addRecommendedMovies: (state, action) => {
            state.recommendedMovies = action.payload
        }
    }
})

export const { toggleRecommendationView, addRecommendedMovies } = recommendSlice.actions
export default recommendSlice.reducer