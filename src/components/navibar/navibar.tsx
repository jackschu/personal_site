import React from 'react'
import { Link } from 'gatsby'

interface Props {
  title: string
  location: Location
}

const Navibar: React.FC<Props> = ({ location, title }: Props) => {
  return (
    <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
      <div className="container-fluid justify-content-start">
        <Link className="text-center" to="/">
          <h1 className="navbar-brand mb-0 ml-8">{title}</h1>
        </Link>
        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            <li className={'nav-item'}>
              <Link
                to="/"
                className={
                  location.pathname === '/' ? 'nav-link active' : 'nav-link'
                }
              >
                Home
              </Link>
            </li>
            <li className={'nav-item'}>
              <Link
                to="/profile/"
                className={
                  location.pathname === '/profile/'
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                Profile
              </Link>
            </li>
            <li className={'nav-item'}>
              <Link
                to="/blog/"
                className={
                  location.pathname === '/blog/'
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                Blog?
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
      </div>
    </nav>
  )
}

export default Navibar
