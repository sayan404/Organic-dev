import nodemailer from "nodemailer";

export interface mailInfo {
    from: string;
    to: string | Array<string>;
    subject: string;
    html: string;
}


const transport = nodemailer.createTransport({
    host: process.env.BASE_URL,
    port: 587,
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    },
});
export const sendEmail = async ({ from, to, subject, html }: mailInfo) => {
    try {
        return await transport.sendMail({
            from,
            to,
            subject,
            html
        });
    } catch (error) {
        console.log(error);
    }
};
