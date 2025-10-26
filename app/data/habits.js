export let habits = [
  {
    id: 1,
    name: "Running",
    type: "fitness",
    details: { distance: 3.2, time: "25m", pace: "7:48/mile" },
  },
  {
    id: 2,
    name: "Reading",
    type: "learning",
    details: { pages: 20, time: "45m" },
  },
  {
    id: 3,
    name: "Weight Lifting",
    type: "fitness",
    details: { exercise: "Bench Press", sets: 3, reps: 10, weight: "135lb" },
  },
];

export function getHabits() {
    return habits
}

export function addHabit(newHabit) {
    const habit = { id: habits.length + 1, ...newHabit };
    habits.push(habit)
    return habits
}