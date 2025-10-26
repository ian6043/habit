import { NextResponse } from "next/server"
import { getHabits, addHabit } from "../../data/habits.js"

export async function GET() {
    const data = getHabits()
    return NextResponse.json(data);
}

export async function POST(request) {
    const body = await request.json()
    const habit = addHabit(body)
    return NextResponse.json(habit, {status: 201})
}