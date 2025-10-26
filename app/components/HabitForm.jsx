'use client'
import { useState } from "react";

export default function Habitform({ onAddHabit }) {

    const [habitName, setHabitName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!habitName.trim()) return;
        onAddHabit(habitName);
        setHabitName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="border rounded p-2 w-full"
                placeholder="Habit name"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}>
            </input>
            <button type="submit">Add Habit</button>
        </form>
    )
}