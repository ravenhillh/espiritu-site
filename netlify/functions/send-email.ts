import type { Handler } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {
  try {
    const data = JSON.parse(event.body || "{}");

    const {
      fullName,
      phone,
      email,
      location,
      numberOfPeople,
      date,
      time,
      occasion,
      spacePreference,
      budgetPerPerson,
      specialRequests,
    } = data;

    const response = await resend.emails.send({
      from: "Reservations <onboarding@resend.dev>",
      to: ["ravenhillh@gmail.com"],
      subject: "New Group Reservation Request",
      html: `
        <h2>New Reservation Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Guests:</strong> ${numberOfPeople}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Occasion:</strong> ${occasion}</p>
        <p><strong>Space:</strong> ${spacePreference}</p>
        <p><strong>Budget:</strong> $${budgetPerPerson}</p>
        <p><strong>Requests:</strong> ${specialRequests}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, response }),
    };
  } catch (error) {
    console.error("Send email error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
