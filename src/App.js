import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'


function App() {

    return (
        <FeedbackProvider>
        <Router>
            <Header />
            <div /*className="container"*/>
            <Routes>
                <Route exact path='/' element={
                    <>
                    <div className="container">
                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedbackList />
                    </div>
                    <AboutIconLink />
                    </>
                }>
                </Route>

                <Route></Route>

                <Route path='/about' element={
                    <div className="container">
                        <AboutPage />
                    </div>
                } />

            </Routes>
            </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App