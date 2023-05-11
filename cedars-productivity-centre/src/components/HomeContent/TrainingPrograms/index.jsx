import React from 'react';
import Trainings from '../Trainings';

const TrainingPrograms = () => {
  return (
    <div>
        <div className="training-programs">
                <div className="header">
                    <h1>Our <span>Training Programs</span></h1>
                </div>

                <div className="content">
                    <Trainings />
                </div>
            </div>
    </div>
  )
}

export default TrainingPrograms;