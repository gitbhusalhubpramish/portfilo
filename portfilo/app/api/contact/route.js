import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
	try {
		const body = await req.formData();

		const files = body.getAll("attachment"); // File[]

		const attachments = await Promise.all(
			files.map(async (file) => ({
				filename: file.name,
				content: Buffer.from(await file.arrayBuffer()),
			}))
		);

		await resend.emails.send({
			from: "Portfolio <onboarding@resend.dev>",
			to: ["bpramish71@gmail.com"],
			subject: body.get("subject"),
			html: `
				<p>${body.get("message")}</p>
				<p style="margin-top:30px;">from: ${body.get("reply")}</p>
			`,
			attachments,
		});

		return NextResponse.json({ success: true });

	} catch (err) {
		console.error(err);
		return NextResponse.json({ success: false }, { status: 500 });
	}
}
