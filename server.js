const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.urlencoded({ extended: true }));

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Your email
        pass: 'your-email-password' // Your email password or app password
    }
});

app.post('/submit-form', upload.single('upload'), (req, res) => {
    const { firstname, lastname, email, occupation, areacode, phone, age, dob, address, address2, message } = req.body;
    const file = req.file;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'website-owner@gmail.com',
        subject: 'New Job Application',
        text: `First Name: ${firstname}\nLast Name: ${lastname}\nEmail: ${email}\nGender: ${occupation}\nArea Code: ${areacode}\nPhone: ${phone}\nApplying for Position: ${age}\nStart Date: ${dob}\nAddress: ${address}, ${address2}\nCover Letter: ${message}`,
        attachments: [
            {
                filename: file.originalname,
                path: file.path
            }
        ]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email: ' + error);
        }
        // Delete the uploaded file after sending the email
        fs.unlinkSync(file.path);
        res.status(200).send('Form submitted successfully!');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
