import './App.css'
import {Button} from '@douyinfe/semi-ui'
import {BrowserRouter, Link, Outlet, Route, Routes, useParams} from 'react-router-dom'
import DatasourceEdit from './pages/datasource/Edit'
import Datasource from "./pages/datasource/List";
import { LocaleProvider } from '@douyinfe/semi-ui'
import { IntlProvider } from 'react-intl'
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN'
import en_GB from '@douyinfe/semi-ui/lib/es/locale/source/en_GB'
import {useMemo} from "react";
import {Locales, messages} from "./locale";
import ProjectEdit from "./pages/project/ProjectEdit";
import ProjectList from "./pages/project/ProjectList";
import Generate from "./pages/generate/Generate";

function Nav() {
    return (
        <div>
            <Button><Link to="/">Home</Link></Button>
            <Button><Link to="/about">About</Link></Button>
            <Button><Link to="/datasource">DataSource</Link></Button>
            <Button><Link to="/project">Project</Link></Button>
            <Button><Link to="/article/1">Article</Link></Button>
            <Button><Link to="/contact">Contact</Link></Button>
        </div>
    )
}

function Home() {
    return (
        <main>
            <h2>Home</h2>
            <Nav/>
        </main>
    )
}

function About() {
    return (
        <main>
            <h2>About</h2>
            <Nav/>
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
            <Nav/>
            <p>id: {params.id}</p>
            <Link to="comment">Comment</Link>
            <Link to="statistics">Statistics</Link>
            <Routes>
                <Route path="comment" element={<Comment/>}/>
                <Route path="statistics" element={<Statistics/>}/>
            </Routes>
        </main>
    )
}

function Contact() {
    return (
        <main>
            <h2>Contact</h2>
            <Nav/>
            <Link to="address">Address</Link>
            <Link to="phone">Phone</Link>
            <Outlet/>
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
    const locale = Locales.ZH_CN

    const getLocale = useMemo(() => {
        // if (locale === 'en_GB') {
        //     return en_GB
        // } else if (locale === 'zh_CN') {
        //     return zh_CN
        // }
        return zh_CN
    }, [locale])



    return (
        <LocaleProvider locale={getLocale}>
            <IntlProvider locale={locale.split('_')[0]} messages={messages[locale].app} defaultLocale={Locales.ZH_CN}>
                <BrowserRouter>
                    <div className="App">
                        <div>
                            <h1>Header!</h1>
                        </div>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/datasource" element={<Datasource/>}></Route>
                            <Route path="/datasource/edit" element={<DatasourceEdit/>}></Route>
                            <Route path="/project" element={<ProjectList/>}></Route>
                            <Route path="/project/edit" element={<ProjectEdit/>}></Route>
                            <Route path="/project/generate" element={<Generate/>}></Route>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/contact" element={<Contact/>}>
                                <Route index element={<ContactIndex/>}></Route>
                                <Route path="address" element={<Address/>}></Route>
                                <Route path="*" element={<NotFound/>}/>
                                <Route path="phone" element={<Phone/>}></Route>
                            </Route>
                            <Route path="/article/:id/*" element={<Article/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                        <div>
                            <h1>Footer!</h1>
                        </div>
                    </div>
                </BrowserRouter>
            </IntlProvider>
        </LocaleProvider>
    )
}

export default App
