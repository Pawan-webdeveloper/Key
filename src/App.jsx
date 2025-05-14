import Home from './pages/Home'
import Shop from './pages/Shop'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'


function App() {
  return (
    <BrowserRouter>
      
   
        <Routes>
          {/* Public routes - accessible whether signed in or not */}
          <Route path='/' element={<Home />} />
          
          {/* Auth routes - only when signed out */}
          <Route
            path='/signup'
            element={
              <SignedOut>
                <SignUpPage />
              </SignedOut>
            }
          />
          <Route
            path='/login'
            element={
              <SignedOut>
                <SignInPage />
              </SignedOut>
            }
          />

          <Route
            path='/shop'
            element={
              <SignedIn>
                <Shop />
              </SignedIn>
            }
          />

          
          <Route path='*' element={<Navigate to='/shop' replace />} />
        </Routes>
      
    </BrowserRouter>
  )
}

export default App