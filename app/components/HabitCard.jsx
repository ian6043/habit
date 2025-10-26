export default function HabitCard({ habit }) {
    return (
        <div className="bg-white dark:bg-zinc-900 shadow-md rounded-xl p-4 flex flex-col justify-between border border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
                {habit.name}
            </h2>

            {/* Example habit detail rendering */}
            {habit.details && Object.keys(habit.details).length > 0 && (
                <div className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                    {Object.entries(habit.details).map(([key, value]) => (
                        <p key={key}>
                            <span className="capitalize font-medium">{key}:</span> {value}
                        </p>
                    ))}
                </div>
            )}

            <button className="mt-3 self-end bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded">
                Log
            </button>
        </div>
    );
}
