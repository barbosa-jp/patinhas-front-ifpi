import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";

const GoogleLoginButton = () => {
	const [vh, setVh] = useState(window.innerWidth * 0.004);

	window.addEventListener('resize', () => {
		setVh(window.innerWidth * 0.004);
  });

	return (
		<GoogleOAuthProvider clientId="728803447933-733fsqhnbtbnmm414c3qntvoi7rvgtib.apps.googleusercontent.com">
				<GoogleLogin
					onSuccess={(credentialResponse) => {
						console.log("Login Success:", credentialResponse);
					}}
					onError={() => {
						console.log("Login Failed");
					}}
					shape="circle"
					size="large"
					text="signin_with"
					width={window.innerWidth < 500 ? 210*vh : 200}
				/>
		</GoogleOAuthProvider>
	);
};

export default GoogleLoginButton;
