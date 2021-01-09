import React, { useEffect, useState } from 'react';
import CourseSelection from '../CourseSelection/CourseSelection';
import { fakeData } from '../FakeData/FakeData';
import './Course.css';

const Course = () => {
    const [courses,setCourse]=useState([]);
    console.log(courses);
    useEffect(()=>{
       setCourse(fakeData);
    })
    return (
       <div className="apelContainer row">
            <div className="giyasContainer">
            
            {
                courses.map(course=><CourseSelection course={course} ></CourseSelection>)
            }
        </div>
        <div>

        </div>
       </div>
    );
};

export default Course;