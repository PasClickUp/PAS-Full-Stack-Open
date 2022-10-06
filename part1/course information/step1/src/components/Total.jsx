const Total = ({ parts }) => {
    return (
        <div>
            <h3>Total Number of exercises is {parts[0].exercises + parts[1].exercises + parts[2].exercises}</h3>
        </div>
    )
}

export default Total