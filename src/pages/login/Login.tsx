import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout, useGoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import  './Login.css';
import { loginUser, useAuthDispatch } from '@/context';


function Login() { 
	const [ profile, setProfile ] = useState<any>([]);
	const dispatch = useAuthDispatch(); 
    const clientId = '699112400964-03tv2de85nlr1g234cu048kfsnte8r5s.apps.googleusercontent.com';

	const { signIn, loaded } = useGoogleLogin({
		onSuccess,
		onFailure,
		clientId,
	  })

	useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient); 
		loaded ? signIn(): ''
		
    }, [loaded]);

	function onSuccess(res: any){
        setProfile(res.profileObj);
		if(res.profileObj){
			loginUser(dispatch, res)
		}
    };

    function onFailure(err: any){
        console.log('failed', err);
    };

	const logOut = () => {
        setProfile(null);
    };
	return (
		<div>
		<h2>React Google Login {JSON.stringify(profile)}</h2>
		<br />
		<br />
		{profile ? (
			<div>
				<img src={profile.imageUrl} alt="user image" />
				<h3>User Logged in</h3>
				<p>Name: {profile.name}</p>
				<p>Email Address: {profile.email}</p>
				<br />
				<br />
				<GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
			</div>
		) : (
			<GoogleLogin
				clientId={clientId}
				buttonText="Sign in with Google"
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={'single_host_origin'}
				isSignedIn={true}
			/>
		)}
	</div>
	);
}

export default Login;
