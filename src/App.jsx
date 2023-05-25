import './App.css'
import resume from './assets/ashutosh_resume.pdf'

function App() {
  return (
    <div className="container">
      <div className="hero">
        <h1 className="display-3">Ashutosh Yadav</h1>
        <h3>An enthusiastic full-stack software developer</h3>
        <ul className="nav">
          <li className="nav-item"><a className="nav-link" href={resume} target="_blank" rel="noreferrer"><i className="fa fa-file-pdf-o"></i></a></li>
          <li className="nav-item"><a className="nav-link" href="tel:+91-7990058793"><i className="fa fa-phone"></i></a></li>
          <li className="nav-item"><a className="nav-link" href="mailto:ashutoshy730@gmail.com"><i className="fa fa-envelope-o"></i></a></li>
          <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/in/ashutosh730" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
          <li className="nav-item"><a className="nav-link" href="https://github.com/Ashutosh-730" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li>
          <li className="nav-item"><a className="nav-link" href="https://instagram.com/Ashutosh_730" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>
  )
}

export default App
