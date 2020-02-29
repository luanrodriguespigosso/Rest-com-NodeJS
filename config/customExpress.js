// Configura o express

module.exports = () => {
    const express = require('express');
    const consign = require('consign');

    const app = express();

    consign()
        .include('controllers')
        .into(app)

    return app;
}