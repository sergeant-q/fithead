import React from 'react';
import AddWorkOut from './add-workout';
import WorkOutLog from './workout-log';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [
        {
          day: 'Monday',
          exercise: 'Bench Press',
          reps: 8,
          lbs: 200,
          set: 1
        },
        {
          day: 'Monday',
          exercise: 'Preacher Curls',
          reps: 8,
          lbs: 65,
          set: 1
        }
      ]
    }
    this.addWorkout = this.addWorkout.bind(this);
  }

  addWorkout(day, exercise, reps, lbs, set) {
    console.log('day: ', day);
    console.log('exercise: ', exercise);
    let newWorkout = {
      day,
      exercise,
      reps,
      lbs,
      set
    };

    let workouts = [...this.state.workouts, newWorkout];

    this.setState({
      workouts
    });
  }

  render() {
    return (
      <div>
        <AddWorkOut onSubmit={this.addWorkout}/>
        <WorkOutLog workouts={this.state.workouts}/>
      </div>
    );
  }
}
