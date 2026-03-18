import CourseCard from '../components/CourseCard';

function StudentDashboard() {
  const recommendedCourses = [
    { id: 1, code: "CPE 101", title: "Intro to Computer Engineering", units: 3, isLocked: false, prereqs: [] },
    { id: 2, code: "CPE 102", title: "Logic Circuits and Design", units: 4, isLocked: true, prereqs: ["CPE 101"] }
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedCourses.map((course) => (
          <CourseCard 
            key={course.id}
            code={course.code}
            title={course.title}
            units={course.units}
            isLocked={course.isLocked}
            prereqs={course.prereqs}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;