import { NextResponse } from "next/server"
import contactSchema from "@/schema/contact.schema"
import "@/lib/db"

export async function POST(req) {
  try {
    const body = await req.json()

    const contact = new contactSchema(body)
    await contact.save()

    return NextResponse.json(
      { success: true, message: "Message saved" },
      { status: 201 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, message: "Failed to save message" },
      { status: 500 }
    )
  }
}
