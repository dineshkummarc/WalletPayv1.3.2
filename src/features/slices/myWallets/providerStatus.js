import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getInfo } from "../../auth/login/loginApi";

const initialState = {
    loading: false,
    tatumio: 'Inactive'
};

export const providerStatus = createAsyncThunk(
    'wallet/providerStatus',
    async ({token, url}) => {
        try {
            if(url.includes('tatumio')) {
                return {
                    provider: 'tatumio',
                    data: await getInfo(token, url)
                }
            } 
        } catch (error) {
            
        }
    }
);

const providerStatusSlice = createSlice({
    name: 'providerStatus',
    initialState,
    reducers: {
        resetProviderStatusState: (state) => {
            state.loading = false;
            state.tatumio = 'Inactive';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(providerStatus.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(providerStatus.fulfilled, (state, {payload}) => {
            const {provider, data} = payload;
            const {status, records} = data?.response || {};
            if(status?.code == 200 && provider == 'tatumio') {
                state.tatumio = records?.status
            } 
            state.loading = false;
        });
        builder.addCase(providerStatus.rejected, (state) => {
            state.loading = false
        })
    }
});

export const {resetProviderStatusState} = providerStatusSlice.actions;
export default providerStatusSlice.reducer;