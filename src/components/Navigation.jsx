import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <SignedIn>
          <Link to="/shop">Shop</Link>
        </SignedIn>
      </div>
      <div className="auth-buttons">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" />
          <Link to="/signup" className="signup-link">Sign Up</Link>
        </SignedOut>
      </div>
    </nav>
  );
}

export default Navigation;