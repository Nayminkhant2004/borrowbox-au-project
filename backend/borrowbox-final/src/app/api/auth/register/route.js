import connectDB from '@/lib/db';
import User from '@/models/User';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    await connectDB();
    const { name, email, password } = await req.json();
    const userExists = await User.findOne({ email });
    if (userExists) return NextResponse.json({ error: "User exists" }, { status: 400 });

    const user = await User.create({ name, email, password });
    return NextResponse.json({ message: "User Created", user }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Database failed" }, { status: 500 });
  }
}