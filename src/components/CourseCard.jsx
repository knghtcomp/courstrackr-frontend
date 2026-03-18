function CourseCard({ code, title, units, isLocked, prereqs }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow">
      
      {/* Course Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-primary">{code}</h3>
          <p className="text-sm text-gray-500">{units} Units</p>
        </div>
        
        {/* Status Badge */}
        {isLocked ? (
          <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full">
            Locked
          </span>
        ) : (
          <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
            Available
          </span>
        )}
      </div>

      {/* Course Title */}
      <h4 className="text-lg font-semibold text-gray-800 flex-grow mb-4">
        {title}
      </h4>

      {/* Prerequisites Warning or Action Button */}
      {isLocked ? (
        <div className="mt-auto bg-gray-50 p-3 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-600 font-medium">Requires:</p>
          <p className="text-xs text-red-500 font-bold">{prereqs.join(', ')}</p>
        </div>
      ) : (
        <button className="mt-auto w-full bg-primary text-white font-semibold py-2 rounded-lg hover:opacity-90 transition-opacity">
          Add to Schedule
        </button>
      )}
    </div>
  );
}

export default CourseCard;