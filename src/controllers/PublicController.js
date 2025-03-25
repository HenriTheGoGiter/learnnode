import { Router } from 'express';
const router = Router();
import db from '../../models/index.js'

router.get('/', async (req, res) => {
    const movies = await db.Movie.findAll();
    res.render('index.njk', { movies });
});

router.get('/about', (req, res) => {
    res.render('about.njk');
});

router.get('/form', (req, res) => {
    res.render('form.njk');
});

router.get('/answer', (req, res) => {
    res.render('answer.njk', req.query);
});

router.get('/square', (req, res) => {
    res.render('square.njk');
});

router.get('/squareanswer', (req, res) => {
    let a = req.query.a;
    let answer = {
        S: Math.pow(a, 2),
        a: a,
        V: Math.pow(a, 3),
        P: 4 * a,
    };
    res.render('squareanswer.njk', answer);
});

router.get('/circle', (req, res) => {
    res.render('circle.njk');
});

router.get('/circleanswer', (req, res) => {
    let r = req.query.r;
    let answer = {
        S: Math.pow(r, 2) * Math.PI,
        r: r,
        V: Math.pow(r, 2) * Math.PI * 4 / 3,
        C: 2 * Math.PI * r,
    };
    res.render('circleanswer.njk', answer);
});

router.get('/pythagoras', (req, res) => {
    res.render('pythagoras.njk');
});

router.get('/pythagorasanswer', (req, res) => {
    let a = req.query.a;
    let b = req.query.b;
    let answer = {
        b: b,
        a: a,
        C: Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)),
    };
    res.render('pythagorasanswer.njk', answer);
});

export default router;