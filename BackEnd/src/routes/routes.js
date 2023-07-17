const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const studentRoutes = require('./studentRoutes');

const teacherRoutes = require('./teacherRoutes');

router.use(studentRoutes);
router.use(teacherRoutes);

/* router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, '../../FrontEnd/testing/HTML', 'index.html'));
});
 */
module.exports = router;