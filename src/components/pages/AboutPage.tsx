import React, {FC} from 'react';
import { useNavigate} from "react-router-dom";

const AboutPage: FC = () => {

    const navigate = useNavigate()
    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt, veniam.</p>
            <button onClick={() => navigate('/')} className='btn'>Обратно к списку дел</button>
        </>
    );
};

export default AboutPage;