export default async function loadJobs(page,params) {
  const pageId = parseInt(page) || 1
  console.log(params)
  let url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${pageId}`
  const desc = params[0]['full_time']
  const location = params[0]['location']
  const full_time = (params[0]['full_time'].length > 0) ? true : false
  url = `${url}&description=${desc}&location=${location}&full_time=${full_time}`
  const response = await fetch(url)
  // const response = await fetch(`http://localhost:4004/jobs`)
  const jobs = await response.json()
  const nextPage = jobs.length === 50 ? pageId + 1 : null
  const loadedData = { data: jobs, nextPage }
  return loadedData
}