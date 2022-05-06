import app from './index.js'
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Running on port ${port}`);
    console.log('press CTRL + C to quit');
});
