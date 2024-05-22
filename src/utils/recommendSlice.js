import { createSlice } from "@reduxjs/toolkit";


const recommendSlice = createSlice({
    name: 'recommend',
    initialState: {
        showRecommendationView: false
    },
    reducers: {
        toggleRecommendationView: (state, action) => {
            state.showRecommendationView = !state.showRecommendationView
        }
    }
})

export const { toggleRecommendationView } = recommendSlice.actions
export default recommendSlice.reducer