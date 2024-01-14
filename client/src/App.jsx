import './App.css';
import Display from './Display';
import { SignedOut, SignedIn, SignInButton } from '@clerk/clerk-react';

function App() {
  return (
    <div className='App'>
      <SignedOut>
        <div className='app-container'>
          <h1>California</h1>
          <h2>Writers Club</h2>
          <h3>Community Collaboration Page</h3>
          <SignInButton>
            <button className='login-button primary-button'>Log In</button>
          </SignInButton>
        </div>
      </SignedOut>
      <SignedIn>
        <Display />
      </SignedIn>
    </div>
  );
}

export default App;
