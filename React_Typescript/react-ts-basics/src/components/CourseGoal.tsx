type CourseGoalProps = {
    title: string;
    description: string;
    children: React.ReactNode;
}

export default function CourseGoal({title, description, children}: CourseGoalProps) {

    const upperCaseTitle = title.toUpperCase();
    return <article>
        <div>
            <h2>{upperCaseTitle}</h2>
            <p>{description}</p>
            <h5>{children}</h5>
        </div>
        <button>Delete</button>
    </article>
}