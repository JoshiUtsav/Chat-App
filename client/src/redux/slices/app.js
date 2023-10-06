import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";

const initialStore = {
    sidebar: {
        open: false,
        type: "CONTACT",
    }
}

const slice = createSlice({
    name: "app",
    initialState: initialStore,
    reducers: {
        // Toggle Sidebar
        toggleSidebar(state, action) {
            state.sidebar.open = !state.sidebar.open;
        },
        updateSidebarType(state, action) {
            state.sidebar.type = action.payload.type;
        },
    },
});

export default slice.reducer;

// 

export function toggleSidebar() {
    return async () => {
        dispatch(slice.actions.toggleSidebar());
    }
}

export function updateSidebarType(type) {
    return async () => {
        dispatch(slice.actions.updateSidebarType({
            type,
        }))
    }
}