import React from 'react';
import { Link } from "wouter";
import Button from "../button/Button";
import './Home.css';

const Home = () => {
    document.title = 'Bright Events - Create & Manage Events';
    return (
        <div className="index">
            <h1>plan your next event</h1>
            <Button><Link to="#">get started</Link></Button>
        </div>
    );
}

export default Home;
