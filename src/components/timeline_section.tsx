import styled from "styled-components"

function TimelineSection() {
    return (
        <>
            <TimelineSectionDiv>
                <TimeLineCard>
                    <h1>Timeline</h1>
                </TimeLineCard>
            </TimelineSectionDiv>
        </>
    )
}

const TimelineSectionDiv = styled.div`
    position: relative;
    width: 98vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `;

const TimeLineCard = styled.div`
    position: relative;
    width: 50vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `;


export default TimelineSection