import connectDB from '@/lib/db';
import Request from '@/models/Request';
import { NextResponse } from 'next/server';

// This handles CREATING a new borrow request
export async function POST(req) {
  try {
    await connectDB();
    const { toolName } = await req.json();

    if (!toolName) {
      return NextResponse.json({ error: "Tool name is required" }, { status: 400 });
    }

    const newRequest = await Request.create({ toolName });
    return NextResponse.json({ message: "Request Sent!", request: newRequest }, { status: 201 });
  } catch (err) {
    console.error("Request API Error:", err);
    return NextResponse.json({ error: "Failed to send request" }, { status: 500 });
  }
}

// This handles FETCHING all borrow requests to show on the dashboard
export async function GET() {
  try {
    await connectDB();
    const requests = await Request.find({}).sort({ createdAt: -1 });
    return NextResponse.json(requests, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch requests" }, { status: 500 });
  }
}