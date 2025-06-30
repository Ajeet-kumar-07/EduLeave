const Leave = require('../models/Leave');

exports.applyLeave = async (req, res) => {
  const { reason, fromDate, toDate } = req.body;
  const leave = await Leave.create({
    student: req.user._id,
    reason,
    fromDate,
    toDate
  });
  res.json(leave);
};

exports.myLeaves = async (req, res) => {
  const leaves = await Leave.find({ student: req.user._id });
  res.json(leaves);
};

exports.getPendingLeaves = async (req, res) => {
  const leaves = await Leave.find({ status: 'pending' }).populate('student', 'name email');
  res.json(leaves);
};

exports.updateLeaveStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updated = await Leave.findByIdAndUpdate(id, { status }, { new: true });
  res.json(updated);
};
