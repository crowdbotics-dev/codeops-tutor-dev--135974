import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_userprogress_list = createAsyncThunk(
  "userProgresses/api_v1_userprogress_list",
  async payload => {
    const response = await apiService.api_v1_userprogress_list(payload)
    return response.data
  }
)
export const api_v1_userprogress_create = createAsyncThunk(
  "userProgresses/api_v1_userprogress_create",
  async payload => {
    const response = await apiService.api_v1_userprogress_create(payload)
    return response.data
  }
)
export const api_v1_userprogress_retrieve = createAsyncThunk(
  "userProgresses/api_v1_userprogress_retrieve",
  async payload => {
    const response = await apiService.api_v1_userprogress_retrieve(payload)
    return response.data
  }
)
export const api_v1_userprogress_update = createAsyncThunk(
  "userProgresses/api_v1_userprogress_update",
  async payload => {
    const response = await apiService.api_v1_userprogress_update(payload)
    return response.data
  }
)
export const api_v1_userprogress_partial_update = createAsyncThunk(
  "userProgresses/api_v1_userprogress_partial_update",
  async payload => {
    const response = await apiService.api_v1_userprogress_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_userprogress_destroy = createAsyncThunk(
  "userProgresses/api_v1_userprogress_destroy",
  async payload => {
    const response = await apiService.api_v1_userprogress_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const userProgressesSlice = createSlice({
  name: "userProgresses",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_userprogress_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_userprogress_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userprogress_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userprogress_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_userprogress_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userprogress_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userprogress_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_userprogress_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userprogress_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userprogress_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_userprogress_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userprogress_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userprogress_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_userprogress_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_userprogress_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userprogress_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_userprogress_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userprogress_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_userprogress_list,
  api_v1_userprogress_create,
  api_v1_userprogress_retrieve,
  api_v1_userprogress_update,
  api_v1_userprogress_partial_update,
  api_v1_userprogress_destroy,
  slice: userProgressesSlice
}
