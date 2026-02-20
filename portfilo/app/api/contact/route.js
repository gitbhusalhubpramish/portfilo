import { NextResponse } from "next/server";
import {Resend} from "resend"
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) { 
	const body = await req.formData(); 
	console.log(body); 
	try{
		await resend.emails.send({
			from: "Portfolio <onboarding@resend.dev",
			to: ["bpramish71@gmail.com"],
			subject: body.get("subject") as string,
			html: `<p> ${body.get("message")} </p> <p style="margin-top:30px;"> from: ${body.get("reply")}</p>`,
			body.getAll("attachment") as File[],
		})
	}
	
	return NextResponse.json({ success: true }); 
}
