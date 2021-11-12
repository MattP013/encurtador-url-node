
import {  URLController } from './controller/URLController';
import express from 'express';
const app = express();
app.use(express.json());

const urlController = new URLController()
app.post('/shorten', urlController.shorten)
app.get('/:hash', urlController.redirect)

app.listen(3000, ()=>{console.log('Server is running on http://localhost:3000');
});