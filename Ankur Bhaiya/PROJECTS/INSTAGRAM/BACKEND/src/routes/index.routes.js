const {Router} = require('express');

const router = Router();

// GET /
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to Instagram API' });
});

module.exports = router;