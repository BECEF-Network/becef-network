import react from 'react';
import styled from 'styled-components';
import HomeSlider from '../components/HomeSlider';

const Homepage = () => {
    return (
        <>
        <Container>
            <HomeSlider />
        </Container>
        </>
    );
};
const Container = styled.main`
position:relative;
min-height:calc(100vh - 250px);
overflow-x: hidden;
display: block;
top:22px;
padding: 0 calc(3.5vw - 5px);
background: black;
`;
export default Homepage;