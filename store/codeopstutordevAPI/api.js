import axios from "axios"
const codeopstutordevAPI = axios.create({
  baseURL: "https://codeops-tutor-dev--135974.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return codeopstutordevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_certification_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/certification/`)
}
function api_v1_certification_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/certification/`, payload)
}
function api_v1_certification_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/certification/${payload.id}/`)
}
function api_v1_certification_update(payload) {
  return codeopstutordevAPI.put(`/api/v1/certification/${payload.id}/`, payload)
}
function api_v1_certification_partial_update(payload) {
  return codeopstutordevAPI.patch(
    `/api/v1/certification/${payload.id}/`,
    payload
  )
}
function api_v1_certification_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/certification/${payload.id}/`)
}
function api_v1_consultancysession_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/consultancysession/`)
}
function api_v1_consultancysession_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/consultancysession/`, payload)
}
function api_v1_consultancysession_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/consultancysession/${payload.id}/`)
}
function api_v1_consultancysession_update(payload) {
  return codeopstutordevAPI.put(
    `/api/v1/consultancysession/${payload.id}/`,
    payload
  )
}
function api_v1_consultancysession_partial_update(payload) {
  return codeopstutordevAPI.patch(
    `/api/v1/consultancysession/${payload.id}/`,
    payload
  )
}
function api_v1_consultancysession_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/consultancysession/${payload.id}/`)
}
function api_v1_contentitem_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/contentitem/`)
}
function api_v1_contentitem_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/contentitem/`, payload)
}
function api_v1_contentitem_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/contentitem/${payload.id}/`)
}
function api_v1_contentitem_update(payload) {
  return codeopstutordevAPI.put(`/api/v1/contentitem/${payload.id}/`, payload)
}
function api_v1_contentitem_partial_update(payload) {
  return codeopstutordevAPI.patch(`/api/v1/contentitem/${payload.id}/`, payload)
}
function api_v1_contentitem_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/contentitem/${payload.id}/`)
}
function api_v1_course_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/course/`)
}
function api_v1_course_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/course/`, payload)
}
function api_v1_course_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/course/${payload.id}/`)
}
function api_v1_course_update(payload) {
  return codeopstutordevAPI.put(`/api/v1/course/${payload.id}/`, payload)
}
function api_v1_course_partial_update(payload) {
  return codeopstutordevAPI.patch(`/api/v1/course/${payload.id}/`, payload)
}
function api_v1_course_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/course/${payload.id}/`)
}
function api_v1_event_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/event/`)
}
function api_v1_event_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/event/`, payload)
}
function api_v1_event_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/event/${payload.id}/`)
}
function api_v1_event_update(payload) {
  return codeopstutordevAPI.put(`/api/v1/event/${payload.id}/`, payload)
}
function api_v1_event_partial_update(payload) {
  return codeopstutordevAPI.patch(`/api/v1/event/${payload.id}/`, payload)
}
function api_v1_event_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/event/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_user_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/user/`, payload)
}
function api_v1_user_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/user/${payload.id}/`)
}
function api_v1_user_update(payload) {
  return codeopstutordevAPI.put(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_partial_update(payload) {
  return codeopstutordevAPI.patch(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/user/${payload.id}/`)
}
function api_v1_userprogress_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/userprogress/`)
}
function api_v1_userprogress_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/userprogress/`, payload)
}
function api_v1_userprogress_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/userprogress/${payload.id}/`)
}
function api_v1_userprogress_update(payload) {
  return codeopstutordevAPI.put(`/api/v1/userprogress/${payload.id}/`, payload)
}
function api_v1_userprogress_partial_update(payload) {
  return codeopstutordevAPI.patch(
    `/api/v1/userprogress/${payload.id}/`,
    payload
  )
}
function api_v1_userprogress_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/userprogress/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return codeopstutordevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return codeopstutordevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return codeopstutordevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return codeopstutordevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return codeopstutordevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return codeopstutordevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return codeopstutordevAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return codeopstutordevAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return codeopstutordevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return codeopstutordevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return codeopstutordevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_certification_list,
  api_v1_certification_create,
  api_v1_certification_retrieve,
  api_v1_certification_update,
  api_v1_certification_partial_update,
  api_v1_certification_destroy,
  api_v1_consultancysession_list,
  api_v1_consultancysession_create,
  api_v1_consultancysession_retrieve,
  api_v1_consultancysession_update,
  api_v1_consultancysession_partial_update,
  api_v1_consultancysession_destroy,
  api_v1_contentitem_list,
  api_v1_contentitem_create,
  api_v1_contentitem_retrieve,
  api_v1_contentitem_update,
  api_v1_contentitem_partial_update,
  api_v1_contentitem_destroy,
  api_v1_course_list,
  api_v1_course_create,
  api_v1_course_retrieve,
  api_v1_course_update,
  api_v1_course_partial_update,
  api_v1_course_destroy,
  api_v1_event_list,
  api_v1_event_create,
  api_v1_event_retrieve,
  api_v1_event_update,
  api_v1_event_partial_update,
  api_v1_event_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_retrieve,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_destroy,
  api_v1_userprogress_list,
  api_v1_userprogress_create,
  api_v1_userprogress_retrieve,
  api_v1_userprogress_update,
  api_v1_userprogress_partial_update,
  api_v1_userprogress_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
