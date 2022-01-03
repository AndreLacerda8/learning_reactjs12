import { Route } from 'react-router-dom'

export function Welcome(){
  return(
    <section>
      <h1>Welcome</h1>
      <Route path='/welcome/new-user'>
        <p>Welcome, new User</p>
      </Route>    
    </section>
  )
}