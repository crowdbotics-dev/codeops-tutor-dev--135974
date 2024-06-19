import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_contentitem_list = createAsyncThunk(
  "contentItems/api_v1_contentitem_list",
  async payload => {
    const response = await apiService.api_v1_contentitem_list(payload)
    return response.data
  }
)
export const api_v1_contentitem_create = createAsyncThunk(
  "contentItems/api_v1_contentitem_create",
  async payload => {
    const response = await apiService.api_v1_contentitem_create(payload)
    return response.data
  }
)
export const api_v1_contentitem_retrieve = createAsyncThunk(
  "contentItems/api_v1_contentitem_retrieve",
  async payload => {
    const response = await apiService.api_v1_contentitem_retrieve(payload)
    return response.data
  }
)
export const api_v1_contentitem_update = createAsyncThunk(
  "contentItems/api_v1_contentitem_update",
  async payload => {
    const response = await apiService.api_v1_contentitem_update(payload)
    return response.data
  }
)
export const api_v1_contentitem_partial_update = createAsyncThunk(
  "contentItems/api_v1_contentitem_partial_update",
  async payload => {
    const response = await apiService.api_v1_contentitem_partial_update(payload)
    return response.data
  }
)
export const api_v1_contentitem_destroy = createAsyncThunk(
  "contentItems/api_v1_contentitem_destroy",
  async payload => {
    const response = await apiService.api_v1_contentitem_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const contentItemsSlice = createSlice({
  name: "contentItems",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_contentitem_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_contentitem_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_contentitem_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_contentitem_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_contentitem_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_contentitem_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_contentitem_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_contentitem_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_contentitem_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_contentitem_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_contentitem_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_contentitem_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_contentitem_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_contentitem_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_contentitem_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_contentitem_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_contentitem_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_contentitem_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_contentitem_list,
  api_v1_contentitem_create,
  api_v1_contentitem_retrieve,
  api_v1_contentitem_update,
  api_v1_contentitem_partial_update,
  api_v1_contentitem_destroy,
  slice: contentItemsSlice
}
