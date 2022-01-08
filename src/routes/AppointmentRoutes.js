const express = require('express')
const { getAppointments, createAppointment, updateAppointment, deleteAppointment } = require('../controllers/AppointmentController')
const authorizeMiddleware = require('../middleware/authorizeMiddleware')
const { rolesObjects } = require('../utils/index')

const router = express.Router();

router.get('/', authorizeMiddleware([rolesObjects.ADMIN, rolesObjects.SECRETARY]), getAppointments);
router.post('/add', authorizeMiddleware([rolesObjects.ADMIN, rolesObjects.SECRETARY]), createAppointment);
router.patch('/:id', authorizeMiddleware([rolesObjects.ADMIN, rolesObjects.SECRETARY]), updateAppointment);
router.post('/delete/:id', authorizeMiddleware([rolesObjects.ADMIN, rolesObjects.SECRETARY]), deleteAppointment);

module.exports = router