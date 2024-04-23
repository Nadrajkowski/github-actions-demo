import express from 'express';

const app = express();
const port = 3000;

export function add(a: number, b: number): number {
    return a + b;
}

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});