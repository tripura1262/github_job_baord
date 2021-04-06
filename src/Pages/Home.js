import JobsFilters from '../Components/JobsFilters'
import JobsList from '../Components/JobsList'
import './../Styles/Pages/home.css'
import './../Styles/Pages/job-detail.css'

export default function Home() {
  
  return (
    <main className="main main--home">
      <div className="container">
        <JobsFilters />
        <JobsList />
      </div>
    </main>    
  )
}
