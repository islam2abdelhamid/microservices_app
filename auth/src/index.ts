import express from 'express';
const app = express();

import { currentUserRouter, signinRouter, signoutRouter,signupRouter } from "./routes";

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.get('/api/users', (req, res) => {
    console.log('request received');
    res.send('GET request to the homepage');
});

app.get('/api/users/current', (req, res) => {
    console.log('request received');
    res.send('GET request to the homepage');
});

app.listen(3000, () => {
    console.log("listening on port 3000!");
});