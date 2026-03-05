
const TaskStatus = ({ taskStatus, resolved, handleComplete }) => {
  return (
    <div className="lg:w-1/3 bg-base-200 p-4 rounded-xl">
      <h2 className="text-lg font-bold mb-4">Task Status</h2>

      {taskStatus.map(task => (
        <div key={task.id} className="card bg-white shadow mb-3 p-3">
          <h3 className="font-semibold">{task.title}</h3>
          <button
            onClick={() => handleComplete(task)}
            className="btn btn-success btn-sm mt-2"
          >
            Complete
          </button>
        </div>
      ))}

      <h2 className="text-lg font-bold mt-6">Resolved Task</h2>
      {resolved.map(task => (
        <div key={task.id} className="mt-2 text-sm text-gray-600">
          ✔ {task.title}
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;