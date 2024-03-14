import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import '../styles/Exprience.css';
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School';

function Exprience() {
    return (
        <div className="exprience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="2018 - 2022"
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<SchoolIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p> Creative Direction, User Experience, Visual Design </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="2018 - 2022"
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<SchoolIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p> Creative Direction, User Experience, Visual Design </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="2018 - 2022"
                iconStyle={{background: "#e0d35b", color: "#fff"}}
                icon={<SchoolIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p> Creative Direction, User Experience, Visual Design </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="2018 - 2022"
                iconStyle={{background: "#e0d35b", color: "#fff"}}
                icon={<SchoolIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p> Creative Direction, User Experience, Visual Design </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Exprience
