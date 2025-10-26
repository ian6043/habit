export default function HabitItem({ habit }) {
    return (
        <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h2 className="text-lg font-semibold">{habit.name}</h2>
            <p className="text-sm text-gray-500">Type: {habit.type}</p>
            <pre className="text-sm mt-2 bg-gray-50 p-2 rounded">
                {JSON.stringify(habit.details, null, 2)}
            </pre>
        </div>
    )
}