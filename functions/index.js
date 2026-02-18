const { onRequest } = require("firebase-functions/v2/https");
const { Resend } = require("resend");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

admin.initializeApp();
const db = admin.firestore();

// Initialize Resend with your API Key
const resend = new Resend("re_PjbfGpRQ_Q1umSrmQEnFvsfjrfQBZdcuv");

exports.sendEmail = onRequest({ cors: true }, (req, res) => {
    cors(req, res, async () => {
        if (req.method !== "POST") {
            return res.status(405).send("Method Not Allowed");
        }

        const { Nom, Contact, Service, Moment, Message } = req.body;

        try {
            // 1. Save to Firestore
            await db.collection("leads").add({
                Nom,
                Contact,
                Service,
                Moment,
                Message,
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
                status: "nouveau"
            });

            // 2. Send via Resend
            const data = await resend.emails.send({
                from: "Clinique Taïse Neves <reception@solutionsquasar.ca>",
                to: ["cliniquetaiseneves@gmail.com"],
                subject: `Nouveau message de ${Nom} - Clinique Taïse Neves`,
                html: `
                    <div style="font-family: sans-serif; padding: 20px; color: #333;">
                        <h2 style="color: #74685b;">Nouvelle soumission de formulaire</h2>
                        <p><strong>Nom:</strong> ${Nom}</p>
                        <p><strong>Contact:</strong> ${Contact}</p>
                        <p><strong>Service demandé:</strong> ${Service}</p>
                        <p><strong>Moment préféré:</strong> ${Moment}</p>
                        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap;">${Message}</p>
                    </div>
                `,
            });

            if (data.error) {
                console.error("Resend error:", data.error);
                return res.status(400).json({ success: false, error: data.error });
            }

            return res.status(200).json({ success: true, id: data.id });
        } catch (error) {
            console.error("Firebase Function error:", error);
            return res.status(500).json({ success: false, error: error.message });
        }
    });
});
