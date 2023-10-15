const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD, EMAIL_USERNAME } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_USERNAME,
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: EMAIL_USERNAME };
    await transport.sendMail(email);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;
