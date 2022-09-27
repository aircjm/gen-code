import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from '@douyinfe/semi-ui'
import { request } from './api/request'
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom'
import Datasource from './pages/datasource'
import DatasourceEdit from './pages/datasource/edit'


function Nav() {
  return (
    <div>
      <Button><Link to="/">Home</Link></Button>
      <Button><Link to="/about">About</Link></Button>
      <Button><Link to="/datasource">DataSource</Link></Button>
      <Button><Link to="/article/1">Article</Link></Button>
      <Button><Link to="/contact">Contact</Link></Button>
    </div>
  )
}

function Home() {
  return (
    <main>
      <h2>Home</h2>
      <Nav />
    </main>
  )
}

function About() {
  return (
    <main>
      <h2>About</h2>
      <Nav />
    </main>
  )
}

function Comment() {
  return <div>This is comment list.</div>
}

function Statistics() {
  return <div>This is statistics.</div>
}

function Article() {
  let params = useParams()
  return (
    <main>
      <h2>Article</h2>
      <Nav />
      <p>id: {params.id}</p>
      <Link to="comment">Comment</Link>
      <Link to="statistics">Statistics</Link>
      <Routes>
        <Route path="comment" element={<Comment />} />
        <Route path="statistics" element={<Statistics />} />
      </Routes>
    </main>
  )
}

function Contact() {
  return (
    <main>
      <h2>Contact</h2>
      <Nav />
      <Link to="address">Address</Link>
      <Link to="phone">Phone</Link>
      <Outlet />
    </main>
  )
}

function ContactIndex() {
  return <div>ContactIndex</div>
}

function Address() {
  return <div>This is address: xxxxxxxxxxx</div>
}

function Phone() {
  return <div>This is phone: xxxxxxxxxxx</div>
}

function NotFound() {
  return <div>404 Not Found</div>
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datasource" element={<Datasource />}>
          <Route path="edit" element={<Address />}></Route>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route index element={<ContactIndex />}></Route>
          <Route path="address" element={<Address />}></Route>
          <Route path="*" element={<NotFound />} />
          <Route path="phone" element={<Phone />}></Route>
        </Route>
        <Route path="/article/:id/*" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
export default App
