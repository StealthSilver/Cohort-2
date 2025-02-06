import React from 'react';

const Greeting = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
};

const App = () => {
    return <Greeting name="Alice" />;
};