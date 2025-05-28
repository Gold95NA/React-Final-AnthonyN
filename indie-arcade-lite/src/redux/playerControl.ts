import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PlayerState {
  name: string;
  score: number;
}

const initialState: PlayerState = {
  name: "",
  score: 0,
};

const playerControl = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayerName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    incrementScore: (state) => {
      state.score += 1;
    },
    resetScore: (state) => {
      state.score = 0;
    },
  },
});

export const { setPlayerName, incrementScore, resetScore } = playerControl.actions;

export default playerControl.reducer;