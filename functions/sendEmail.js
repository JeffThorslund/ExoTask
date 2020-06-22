const nodemailer = require("nodemailer");

exports.handler = async (event, context, callback) => {
  async function main() {
    let transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "exotask@zoho.com", // generated ethereal user
        pass: "yummypass", // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "exotask@zoho.com", // sender address
      to: "jeffrey.thorslund@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log(process.env);

    transporter.verify((err, success) => {
      if (err) console.error(err);
      console.log("Your config is correct");
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  }

  main().catch(console.error);

  return {
    statusCode: 200,
    body: `Hello, Jeff`,
  };
};
