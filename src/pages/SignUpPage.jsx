import { SignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";

function SignUpPage() {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/shop");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="auth-container flex items-center justify-center mt-[3rem]">
      <SignUp 
        signInURL="/login"
        routing="path"
        path="/signup"
        fallbackRedirectUrl={"/shop"}
        afterSignUpUrl="/login"
        redirectUrl="/login"
      />
    </div>
  );
}

export default SignUpPage;