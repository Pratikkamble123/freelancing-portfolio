import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendProjectEmail(data: any) {
  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // temporary sender
      to: process.env.LEAD_RECEIVER_EMAIL!,
      subject: `🚀 New Project Inquiry from ${data.name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || "N/A"}</p>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Deadline:</strong> ${data.deadline}</p>
        <p><strong>Features:</strong> ${data.features}</p>
        <hr />
        <p><strong>Description:</strong></p>
        <p>${data.message}</p>
      `,
    });

    console.log("Email sent successfully ✅");
  } catch (error) {
    console.error("Resend email error:", error);
  }
}