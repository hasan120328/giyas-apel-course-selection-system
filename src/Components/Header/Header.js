import React from 'react';
import './Header.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

const Header = () => {
    return (
        <div className="box-container">
             <div className="header-container">
           
             <Link className="headerLink"  to="/course">Course</Link>
             <Link className="headerLink"  to="/student">Student</Link>
             <Link className="headerLink"  to="/teacher">Teacher</Link>
             <Link className="headerLink"  to="/schedule">Schedule</Link>
             <Link className="headerLink"  to="/login">Sign out</Link>
        </div>
        <div>
           <h1>spring semester</h1>
           <p>Most of the students apply for the Fall intake as their Undergraduate program finishes in June and Fall semesters begin in September which makes it convenient for Higher Education unless they break off from the typical pattern for specific reasons like work experience or personal issues.</p>
           <p>
           The biggest advantage of the Fall intake is the number of courses on offer. Most colleges offer a myriad number of courses in fall, a comparatively smaller number of courses during the Spring semester.
Another major advantage is the number of sources for financial assistance which a student can obtain. While funding is available during the spring intake, the number of opportunities present during fall is much higher. The on-campus jobs and TA, RA positions usually open up during the fall semester intake, preference is usually given to students who have finished at least one year in college i.e. since you would have completed only 6 months of college at that time, you will be disadvantaged.
           </p> <br/> <br/><br/>
           <h1>summer semester</h1>
           <p>
           Summer Semester offers several hundred undergraduate and postgraduate courses, taught during an intensive eight-week study period.

Finish your degree faster (if you're a UQ student) or study to satisfy a program's prerequisites.
Discover new subject areas like anthropology, criminology, economics, business, or creative writing.
Study during a concentrated period and in smaller classes than ordinary semesters.
Gain experience studying at university.
Develop new skills and new ways of understanding the world.
Enjoy the opportunity to study with a diverse group of people in a supportive environment.
           </p>
          
        </div>
        </div>
    );
};

export default Header;