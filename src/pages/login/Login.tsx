/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAuthDispatch, useAuthState, loginUser } from '../../context';
import React, { useState } from 'react';  
import  './Login.css';


function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useAuthDispatch();
	const { loading, errorMessage } = useAuthState();

	const handleLogin = async (e: { preventDefault: () => void; }) => {
		e.preventDefault();

		try {
			const response: any = await loginUser(dispatch, { username: email, password });
			if (!response.username) return;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container">
			<div >
				<h1>Login Page</h1>
				{errorMessage ? <p className="error">{errorMessage}</p> : null}
				<form>
					<div className="loginForm">
						<div className="loginFormItem">
							<label htmlFor='email'>Username</label>
							<input
								type='text'
								id='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								disabled={loading}
							/>
						</div>
						<div className="loginFormItem">
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								id='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								disabled={loading}
							/>
						</div>
					</div>
					<button onClick={handleLogin} disabled={loading}>
						login
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
