import { type ReactNode } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeLiteFlix from './components/home/HomeLiteFlix'
import MovieProvider from './context/MovieProvider'
import './App.css'

interface WithProviderProps {
  children: ReactNode
}

function App (): JSX.Element {
  return (
        <>
            <Routes>
                <Route path="/" element={
                    <WithProvider>
                        <HomeLiteFlix/>
                    </WithProvider>
                }/>
            </Routes>
        </>
  )
}

const WithProvider = ({ children }: WithProviderProps): JSX.Element => {
  return (
        <MovieProvider>
            {children}
        </MovieProvider>
  )
}

export default App
