import { JOB_CREATE, JOB_REMOVE, JOB_UPDATE } from "../actionTypes/jobActionTypes"

export const jobCreate = (
  recruiter_id,
  job_title,
  job_type,
  job_category_id,
  job_location,
  job_vancey,
  job_salary,
  job_duration,
  job_overview,
  job_skills,
  job_language,
  job_duties,
  job_started_date,
  job_ending_date,
  job_current_status
) => {
  return {
    type: JOB_CREATE,
    payload: {
      recruiter_id: recruiter_id,
      job_title: job_title,
      job_type: job_type,
      job_category_id: job_category_id,
      job_location: job_location,
      job_vancey: job_vancey,
      job_salary: job_vancey,
      job_duration: job_duration,
      job_overview: job_overview,
      job_skills: job_skills,
      job_language: job_language,
      job_duties: job_duties,
      job_started_date: job_started_date,
      job_ending_date: job_ending_date,
      job_current_status: job_current_status,
    },
  }
}

export const jobRemove = (id) => {
  return {
    type: JOB_REMOVE,
    payload: id,
  }
}
export const jobUpdate = () => {
  return {
    type: JOB_UPDATE,
    payload: {},
  }
}
