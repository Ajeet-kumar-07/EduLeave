const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const {
  applyLeave,
  myLeaves,
  getPendingLeaves,
  updateLeaveStatus
} = require('../controllers/leaveController');

router.post('/', auth, role('student'), applyLeave);
router.get('/my', auth, role('student'), myLeaves);
router.get('/pending', auth, role('admin'), getPendingLeaves);
router.patch('/:id', auth, role('admin'), updateLeaveStatus);

module.exports = router;
