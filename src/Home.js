import React from 'react';
import Title from './components/atoms/Title';
import Para from './components/atoms/Para';
import ImageContent from './components/atoms/ImageContent';
import me2 from './img/me2.png';
import { useAuth0 } from './react-auth0-spa';
import Navigation from './Navigation';
 
const home = () => {

    const { logout } = useAuth0();

    return (
       <div>
        <Navigation/>
        <div className="index">
	    <div className="wrapper">
        
         <div class="img-info">
            <Title title="MOHAMMED KHALEELUR REHMAN"/>
            <Para paragraph="I am Mohammed Khaleelur Rehman, an undergraduate Computer Science Engineering student at Muffakham Jah College of Engineering and Technology, Hyderabad. I am learning to become a full stack web developer."/>
            <Para paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
        </div>

        <ImageContent className="img-me" sourceName={me2}/>
	    
        </div>
        </div>
       </div>
    );
}
 
export default home;