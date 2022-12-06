import 'bulma/css/bulma.css'
import ProfileCard from './profileCard' 
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from  './images/siri.png'



function App(){
    return(
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistants</p>
                </div>
            </section>
          

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'> 
                              <ProfileCard title='Alexa' handle='@alexa99' image={AlexaImage} content ='Alexa was created by amazon and helps you buy things' />

                        </div>
                        <div className='column is-4'>
                               <ProfileCard title='Cortana' handle='@Cortana32' image={CortanaImage} content ='Cortana was created by Cortana and helps you buy things'/>  
                        </div>
                        <div className='column is-4'>
                             <ProfileCard title='Siri' handle='@siri01' image={SiriImage} content ='Siri was created by Apple and helps you buy things'/>
                        </div>
                    </div>
                </section>
            </div>
           
       
           

        </div>
    )
}

export default App