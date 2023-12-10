import CourseGoal from "./components/CourseGoal.tsx";

export default function App() {
  return <main>
    <CourseGoal 
      title="Learn React + TS" 
      description="Learn how to build a React app with TS.">
        <h5>This is additional children prop.</h5>
      </CourseGoal>
  </main>
}