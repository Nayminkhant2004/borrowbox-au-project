import connectDB from '@/lib/db';
import Item from '@/models/Item';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    
    console.log("Attempting to save item:", data.name); // Check your terminal for this!

    const newItem = await Item.create({ name: data.name });
    return NextResponse.json({ message: "Success!", item: newItem }, { status: 201 });
  } catch (err) {
    console.error("DETAILED API ERROR:", err.message); // This tells us WHY it failed
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}