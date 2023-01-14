import './style.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled from 'styled-components';
import 'react-vertical-timeline-component/style.min.css';




const data = [
    {
        title: 'Event 1',
        day: '1',
        time: '10:00 AM',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, fuga.',
        image: "https://picsum.photos/1080"
    },
    {
        title: 'Event 2',

        day: '2',
        time: '1:00 PM',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, fuga.',
        image: "https://picsum.photos/1080"
    },
    {
        title: 'Event 3',
        day: '3',
        time: '3:00 PM',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, fuga.',
        image: "https://picsum.photos/1080"
    },
    {
        title: 'Event 4',
        day: '4',
        time: '5:00 PM',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, fuga.',
        image: "https://picsum.photos/1080"
    },
]

function TimeLineSection() {
    return (
        <TimeLineContainerWrapper>
            <TimeLineTitle>Timeline</TimeLineTitle>
            <VerticalTimeline
                layout="2-columns"
            >
                {data.map((event, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={'Day ' + event.day + ', ' + event.time}
                        dateClassName="date"
                        contentStyle={{
                            background: '#000 linear-gradient(180deg,rgba(0,0,0,.25),rgba(0,0,0,.788))',
                            color: '#000',
                            backdropFilter: 'blur(10px)',
                            backgroundImage: `url(${event.image})`,
                            backgroundSize: 'cover',
                            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
                            borderRadius: '6px',
                            padding: '20px',
                            height: '200px',
                            width: '300px',

                        }}
                        iconStyle={{ visibility: 'hidden' }}
                        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    >
                        <TimeLineCardTitle>{event.title}</TimeLineCardTitle>
                        <TimeLineCardDescription>{event.description}</TimeLineCardDescription>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </TimeLineContainerWrapper>
    )
}

const TimeLineContainerWrapper = styled.div`
    width: 60vw;
    margin-top: 150px;
    margin: 0 auto;
    padding: 0 2rem;
    `;


const TimeLineTitle = styled.h3`
 color: #fff;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    `;

const TimeLineCardTitle = styled.h3`
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
    `;

const TimeLineCardDescription = styled.p`
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    text-align: left;
    margin-bottom: 2rem;
    `;


export default TimeLineSection;