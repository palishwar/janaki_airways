import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div classname="container">
        <nav className="navbar navbar-expand-lg">
          <div className="st container-fluid">
            <span className="head  fw-bolder fs-1 me-5 ps-5"> Janaki Airways</span>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item pe-3 ps-5">
                  <Link className="nav-link active" aria-current="page" to="/">FLIGHT</Link>
                </li>
                <li className="drpit nav-item dropdown pe-3">
                  <Link className="nav-link dropdown-toggle" to="" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    FLIGHT INFO
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><Link className="dropdown-item" to="/flightstatus">FLIGHT STATUS</Link></li><hr className='hr' />
                    <li><Link className="dropdown-item" to="/flightschedule">FLIGHT SCHEDULE</Link></li>
                  </ul>
                </li>

                <li className="nav-item pe-3">
                  <Link className="nav-link active" aria-current="page" to="/hotel">HOTEL</Link>
                </li>
                <li className="nav-item pe-3">
                  <Link className="nav-link active" aria-current="page" to="/travel">TRAVEL</Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="word form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="but ms-2 me-3" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header