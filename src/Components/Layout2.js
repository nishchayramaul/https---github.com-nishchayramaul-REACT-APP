import React from 'react'

import '../Styling/layout2.css'
import '../Styling/Button.css'
import Card from './MultiActionAreaCard';
import carlogo from '../Resources/Template.png'
import PlainCard from '../Components/PlainCard'
import card_1 from '../Resources/card 1.jpg'
import card_2 from '../Resources/card 2.jpg'
import card_3 from '../Resources/card 3.jpg'
import card_4 from '../Resources/card 4.jpg'
import img1 from '../Resources/MyZdegree.jpeg'
import img2 from '../Resources/Symptoms of a Bad Camshaft Position Sensor.jpeg'
import img3 from '../Resources/Volvo V90.jpeg'
import { TextField } from '@mui/material';
import ContainedButtons from './Navbar/ContainedButtons';
import mapsimage from '../Resources/google-maps-icon-1580992464.png'
import mp from '../Resources/Screenshot 2023-10-15 232405.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import SelectTextFields from './SelectTextFields';
import Services from '../Components/Services';

export const Layout2 = (props) => {
  return (
    <div className='layout2'>
    <div className='services'>
      <h1> Our services</h1>
    </div>

    <div className='cardlayout'>
      <div className='row'>
       <div className='column'>
        <Card 
          content='Special wheels, spoilers, or would it rather be a chassis 
          change? Our test engineers assess and document the 
          changes for you in accordance with the regulations'
          title='Change acceptances'
          imagesrc={card_1}
          />
        </div>
        <div className='column'>
          <Card
          content ='Is your general inspection due? Our test engineers, like 
          our competitors from TÜV and Dekra, are authorized to 
          carry out the HU both in our test center and in our bases.'
          title='Inspections'
          imagesrc={card_2}
          />
        </div>
        </div>
        <div className='row'>
        <div className='column'>
          <Card
          content = "If you have been involved in an accident through no
          fault of your own we offer you to prepare an 
          independent damage report so that you can enforce 
          your right to compensation"
          title='Accident and valuation report'
          imagesrc={card_3}
          />
        </div>
        <div className='column'>
        <Card
          content = 'Is your vehicle older than 30 years and largely in its 
          original condition? Our test engineers also carry out 
          classic car inspections in accordance with Section 23 '
          title='Classic car - report'
          imagesrc = {card_4}
          />
        </div>
        </div>
        </div>
        <div className='link'>
        <strong>  <a className='link' href='#'>Go to our services → </a></strong>
        </div>
        <div className='temp'>
          <img className='cars' src={carlogo} alt= 'logo'/>
        </div>
        <div className='work'>
          <h1>
          Our work
          </h1>
        </div>
        <div className='cards1'>
          <div className='cardcomponent'>
            <PlainCard 
            title="General inspections and safety" 
            content ="Audi A5" 
            imagesrc={img1}
            />
          </div>
          <div className='cardcomponent'>
          <PlainCard
           title="Gas system tests according" 
           content ="Toyota Avensis" 
           imagesrc={img2}/>
          </div>
          <div className='cardcomponent'>
          <PlainCard
           title="Emissions tests according to" 
           content ="Volvo" 
           imagesrc={img3}/>
          </div>
        
        </div>
        <div className='contacts'>
          <h1> Contact us</h1>
        </div>
      
        <div className='form'>
          <div className='boxx'>
         First name
          <div>
          <TextField />
          </div>
          </div>
          <div className='boxx'>
          Last name
          <div>
          <TextField />
          </div>
          </div>
          <div className='boxx'>
          Location
          <SelectTextFields/>
          </div>
          <div className='boxx'>
          Choose service
          <Services/>   
          </div>
          <div className='savebtn'>
          <ContainedButtons sx={{ width: '100%' }}>Send Message</ContainedButtons>

          </div>
          <div className='para'>
          <p>
          If you have a technical question, please always provide us with your contact details - even if you 
          are already our customer. In order to quickly forward your request to the right place, as well as 
          for any questions, it is very helpful for us to provide us with your place of residence 
          and your telephone number. Thank you
          </p>
          </div>
          </div>
          <div className='icn'>
          <div className='icnpos'>
          <img className='mapicn' src={mapsimage} alt='maps'/>
           </div>
           <div className='maptxt'>
            Google Maps
           </div>
           </div>
           <div className='route'>
            <img className='mp' src={mp} alt='img'/>
           </div>
           <div className='footer'>
          
           <div className='innercontent'>
            <div className='brow'>
              <div className='header2'>
              <i> INGENIEURTEAM </i>
              </div>
              <div className='footertxt'>
              TUV SUD AUTO PARTNER <br></br>
              IN NEUSS
              </div>
              <div className='button4'>
              <ContainedButtons fontSize='large '>Book an Appointment</ContainedButtons>
              </div>

            </div>
            <div className='brow'>
              <div>
                <h1 className='headingbtm'>
                  Company
                </h1>
              </div>
              <div className=' ele1'>
              <a href ='#'> Services </a>
              </div>
              <div className='ele2'>
              <a href ='#'> Prices </a>
              </div>
              <div className='ele3'>
              <a href ='#'>Locations </a>
              </div>
              <div className='ele4'>
              <a href ='#'> Contacts </a>
              </div>
              
            </div>
            <div className='brow3'>
            <div className='header3'>
              <h1> Legal </h1>

            </div>
              <div className='ele11'>
               <a href ='#'>Imprint</a>
              </div>
              <div className='ele12'>
              <a href ='#'> Data protection </a>
              </div>
            </div>
            <div className='brow2'>
              <div className='icns'>
              <div className='icn1'><LocationOnIcon sx fontSize='large' htmlColor='#2B8AEF'/></div>
              <div className='icn2'><PhoneIcon sx fontSize='large' htmlColor='#2B8AEF'/></div>
              <div className='icn3'><AccessTimeIcon sx fontSize='large' htmlColor='#2B8AEF'/></div>
              </div>
            <div className='content1'>
            <div className='ele21'>
            Heinrich-Pesch-Str. <br></br>
            5a 50739 Kolna
            </div>
              <div className='ele22'>
              +49 221 57 000 807
              </div>
              <div className='ele23'>
              Mon-Fri, 9:00- 19:00
              </div>
              </div>
            </div>
            </div>
            <div className='lastblock'>
            <div className='lasttext'>
              ST-Ingenieurteam 2023
            </div>
            <div className='lasticons'>
              <div className='instaicon'>
              <InstagramIcon fontSize='large' sx={{color:'white'}}/>
              </div>
              <div className='fbicon'>
              <FacebookIcon fontSize='large' sx={{color:'white'}}/>
              </div>
            </div>
           </div>
           </div>
           

   
     

    </div>
  )
}
