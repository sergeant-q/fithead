import React from 'react';

export default class AddworkOut extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.day.value, this.exercise.value, this.reps.value, this.lbs.value, this.set.value)
  }

  render() {
    return (
      <div className="form-container">
        <div className="form">
          <form onSubmit={this.onSubmit}>
            <label htmlFor="day">Day</label>
            <input type="text" name="day" ref={(input) => { this.day = input;}} />
            <label htmlFor="exercise">Exercise</label>
            <input type="text" name="exercise" ref={(input) => { this.exercise =  input;}} />
            <label htmlFor="reps">Reps</label>
            <input type="text" name="reps" ref={(input) => { this.reps = input;}} />
            <label htmlFor="lbs">Lbs</label>
            <input type="text" name="lbs" ref={(input) => { this.lbs = input;}} />
            <label htmlFor="set">Set</label>
            <input type="text" name="set" ref={(input) => { this.set = input;}} />
            <button>Add Workout</button>
          </form>
        </div>
      </div>
    );
  }
}
