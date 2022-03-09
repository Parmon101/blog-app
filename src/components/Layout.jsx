import { NavLink, Outlet } from 'react-router-dom'; 


export const Layout = () => {
  return (
    <>
        <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/posts">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </header>

        <main className="container">
            <Outlet />
        </main>


        <footer className="container">2022</footer>
    </>
  )
}
