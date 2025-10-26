import HabitCard from "./HabitCard"

export default function HabitList({ habits }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {habits.map((habit) => (
                <HabitCard key={habit.id} habit={habit} />
            )
            )}
        </div>
    )
}