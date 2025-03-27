import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "Student",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Signup Data:", formData);
        // Ajoute ici la logique d'envoi au backend
        
        const response = await fetch("http://localhost:8080/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password
            }),
        });
        
        if(response.ok) {
            const data = await response.json();
            console.log("Token reçu :", data.token);
            localStorage.setItem("jwttoken", data.token);
            navigate("/dashboard");
        } else {
            console.log("Échec de connexion");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-2 text-gray-900">
                    Create an account
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                    Join <span className="text-blue-500 font-medium">EcLosia</span> to
                    access internship opportunities
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Sélection du rôle */}
                    <div>
                        <label className="block text-gray-700 font-medium">I am a</label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        >
                            <option value="Student">Student</option>
                            <option value="Employer">Employer</option>
                        </select>
                    </div>

                    {/* Prénom & Nom */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 font-medium">
                                First name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                placeholder="John"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">
                                Last name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            placeholder="name@example.com"
                        />
                    </div>

                    {/* Mot de passe */}
                    <div>
                        <label className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            placeholder="••••••••"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            Must be at least 8 characters with a number and a special
                            character
                        </p>
                    </div>

                    {/* Bouton de soumission */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                        onClick={handleSubmit}
                    >
                        Create Account
                    </button>

                    {/* Mentions légales */}
                    <p className="text-xs text-gray-600 text-center">
                        By signing up, you agree to our{" "}
                        <span className="text-blue-500 cursor-pointer">
                            Terms of Service
                        </span>{" "}
                        and{" "}
                        <span className="text-blue-500 cursor-pointer">Privacy Policy</span>
                        .
                    </p>
                </form>

                {/* Lien pour se connecter */}
                <p className="text-sm text-gray-600 text-center mt-4">
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="text-blue-500 font-medium hover:underline"
                    >
                        Log in
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
