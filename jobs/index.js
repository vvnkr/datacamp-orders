if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const schedule = require('node-schedule');

const announcementJob = require('./announcementJob');
const ordersJob = require('./ordersJob');

function startJobs() {
  schedule.scheduleJob("42 15 * * *", announcementJob.runJob);
  schedule.scheduleJob("43 15 * * *", ordersJob.runJob);
}

startJobs();
