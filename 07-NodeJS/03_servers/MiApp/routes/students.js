const router = require('express').Router();

router.delete('/delete', (req, res) => {
    res.send('Borramos un alumno');
});

module.exports = router;