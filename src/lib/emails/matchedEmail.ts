const matchedEmails = ({ patientName, organType, bloodGroup, age, urlInfo, hospitalName, address, contact, claimURL }: any) => {
    return (
        `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Organ Match Notification</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                    }
                    .button {
                        background-color: #28a745;
                        color: white;
                        padding: 10px 20px;
                        text-decoration: none;
                        border-radius: 5px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h2>Organ Match Found</h2>
                    <p>Dear ${patientName},</p>
                    <p>
                        We are pleased to inform you that a potential matching organ has
                        been found according to your needs. Below are the details:
                    </p>
                    <h3>Organ Details</h3>
                    <ul>
                        <li><strong>Organ Type:</strong> ${organType}</li>
                        <li><strong>Blood Group:</strong> ${bloodGroup}</li>
                        <li><strong>Donor Age:</strong> ${age}</li>
                        <li><strong><a href="${urlInfo}">More Condition</a></strong></li>
                    </ul>
                    <h3>Hospital Information</h3>
                    <ul>
                        <li><strong>Hospital Name:</strong> ${hospitalName}</li>
                        <li><strong>Address:</strong> ${address}</li>
                        <li><strong>Contact:</strong> ${contact}</li>
                    </ul>
                    <p>If you wish to claim this organ, please click the link below:</p>
                    <a href="${claimURL}" class="button">Claim Organ</a>
                    <p>If you have any questions, feel free to contact us.</p>
                    <p>Best regards,<br />Organoid</p>
                </div>
            </body>
        </html>

        `
    )
}