const express = require('express');
const router = express.Router();
const workingHoursMiddleware = (req, res, next) => {
  const now = moment();
  const dayOfWeek = now.day();
  const hourOfDay = now.hour();

  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay <= 17) {
    next();
  } else {
    res.status(403).send('Sorry, this website is only available during working hours (Monday to Friday, from 9 to 17).');
  }
};