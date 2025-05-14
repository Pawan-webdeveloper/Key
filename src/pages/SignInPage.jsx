import { SignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";

function SignInPage() {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/shop");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="auth-container flex items-center justify-center mt-[3rem]">
      <SignIn 
        afterSignInUrl="/shop"
        onSignedInUrl="/shop"
        path="/login"
        signUpUrl="/signup"
        redirectUrl="/shop"
        appearance={{
          elements: {
            footerActionLink: "text-rose-600 hover:text-rose-700",
            formButtonPrimary: "bg-rose-600 hover:bg-rose-700",
            formFieldInput: "border-rose-300 focus:border-rose-500",
            formFieldLabel: "text-gray-700",
            headerTitle: "text-rose-600",
            socialButtonsBlockButton: "border-rose-300 hover:bg-rose-50",
            socialButtonsBlockButtonText: "text-gray-700",
            socialButtonsBlockButtonArrow: "text-rose-600",
          },
        }}
      />
    </div>
  );
}

export default SignInPage;