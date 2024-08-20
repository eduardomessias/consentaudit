"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Routes
const express_1 = require("express");
const servicelog_middleware_1 = require("../middleware/servicelog.middleware");
const router = (0, express_1.Router)();
router.get('/', servicelog_middleware_1.servicelog, (req, res) => {
    res.send('Consent Audit Backend Service');
});
exports.default = router;
