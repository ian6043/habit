'use client'

import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList'
import { useState, useEffect } from 'react'



export default function Home() {

  const [habits, setHabits] = useState([])

  useEffect(() => {
    fetch("/api/habits")
      .then((res) => res.json())
      .then(setHabits)
  }, [])

  const addHabit = async (name) => {
    const res = await fetch("/api/habtis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, type: "custom", details: {} }),
    })
    const newHabit = await res.json()
    setHabits((prev) => [...prev, newHabit])
  }

  return (
    <main className="max-w-xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Habit Tracker</h1>
      <HabitForm onAddHabit={addHabit} />
      <HabitList habits={habits} />
    </main>
  );
}
