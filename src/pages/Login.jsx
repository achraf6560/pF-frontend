import React, { useState } from "react";

const Login = () => {
    
const handleLogin = async () => {
    const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: "user",
            password: "password",
        }),
    });

    if(response.ok) {
        const data = await response.json();
        console.log("Token reçu :", data.token);
        localStorage.setItem("jwttoken", data.token); // Stocker le token si besoin
    } else {
        console.log("Échec de connexion");
    }
};

return (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Welcome back</h2>
        <p className="text-sm text-gray-600 mb-4">Enter your credentials to access your account</p>

        <div className="mb-4">
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        </div>

        <div className="mb-4">
          <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
          <p className="text-xs text-blue-600 text-right cursor-pointer mt-1">Forgot password?</p>
        </div>

        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition" onClick={handleLogin}>Log In</button>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <a href="/signup" className="text-blue-600">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
