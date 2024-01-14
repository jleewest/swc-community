import './App.css';
import Display from './Display';
import {
  SignedOut,
  SignedIn,
  SignInButton,
  //SignOutButton,
} from '@clerk/clerk-react';

function App() {
  return (
    <div className='App'>
      <SignedOut>
        <SignInButton />
        <p>LoginPage</p>
      </SignedOut>
      <SignedIn>
        {/*<SignOutButton afterSignOutUrl='/' />*/}
        <Display />
      </SignedIn>
    </div>
  );
}

export default App;
