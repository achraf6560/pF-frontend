import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <section className="p-8">
            <h2 className="text-3xl font-bold">Tableau de Bord</h2>
            <p className="mt-4 text-gray-600">Bienvenue sur votre espace personnel.</p>
        </section>
    );
};

export default Dashboard;
