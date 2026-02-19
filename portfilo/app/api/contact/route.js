import { NextResponse } from "next/server";
export async function POST(req) { 
	const body = await req.formData(); 
	console.log(body); 
	return NextResponse.json({ success: true }); 
}
