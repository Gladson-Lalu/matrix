import { AppColor } from '../../constants/app_color'
import styled from 'styled-components'
import { MdPhone } from 'react-icons/md'
function ContactCard({ name, phone }
    : { name: string, phone: string }) {
    return (
        <Container onClick={
            () => {
                window.open(`tel:${phone}`)
            }
        }>
            <PhoneIconContainer>
                <MdPhone size={25} />
            </PhoneIconContainer>
            <DetailContainer>
                <Name>{name}</Name>
                <Phone>{phone}</Phone>
            </DetailContainer>
        </Container>
    )
}

const PhoneIconContainer = styled.div`
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 2px solid ${AppColor.secondary};
                `
const Container = styled.button`
                width: 36vw;
                display: flex;
                flex-direction: row;
                background-color:#1a1a1a;
                padding: 10px;
                color: ${AppColor.secondary};
                padding: 20px;
                border-radius: 4px;
                margin-bottom: 20px;
                border: 1px solid ${AppColor.secondary};
                cursor: pointer;
                transition: all 0.2s ease-in-out;
                &:hover{
                    background-color: ${AppColor.secondary};
                    color: #000;
                }
                &:hover ${PhoneIconContainer} {
                    border: 2px solid #000;
                }
                @media (max-width: 768px) {
                    width: 100%;
                }
                `



const DetailContainer = styled.div`
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-left: 20px;
                `
const Name = styled.div`
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 5px;
                `

const Phone = styled.div`
                font-size: 14px;
                font-weight: 400;
                `


export default ContactCard