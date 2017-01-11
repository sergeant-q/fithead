import React from 'react';

export default function WorkOutLog(props) {
  let workouts = props.workouts.map((workout, index) => {
    return (
    <tr key={index}>
      <td>{workout.day}</td>
      <td>{workout.exercise}</td>
      <td>{workout.reps}</td>
      <td>{workout.lbs}</td>
      <td>{workout.set}</td>
    </tr>
    );
  });
  console.log(workouts);

  return (
    <div className="workout-container">
      <div className="workout-table">
        <table>
          <thead>
          <tr>
            <th>Day</th>
            <th>Exercise</th>
            <th>Reps</th>
            <th>Lbs</th>
            <th>Set</th>
          </tr>
        </thead>
          <tbody>
            {workouts}
          </tbody>
        </table>
      </div>
    </div>
  );
}
