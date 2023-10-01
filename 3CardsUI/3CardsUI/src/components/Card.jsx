import  React from 'react';
import './Card.css';



const contentCards = [
        {
        id: 1,   
        colorGradient: 'green', 
        title: 'Your file was uploaded!', 

        textContent: 'Your file was succesfully uploaded. You can copy the link to your clipboard. ',
        contentButton1: 'Copy Link',
        contentButton2: 'Cancel',
        },
        {
        id: 2, 
        colorGradient: 'red',
        title: 'We are so sorry', 
        textContent: 'There was an error and your file could bot be uploaded. Would you like to try again? ',
        contentButton1: 'Retry',
        contentButton2: 'Cancel',
        }           
]

const Card = () => {
        let cardsContent = contentCards.map(item => item);

 return (       
<section> 
{ 
        cardsContent.map(({id, colorGradient, title, textContent, contentButton1, contentButton2}) => (
               
                <div key={id} className='cardDiv'>
                        <span className='closeBtn'>X</span>
                        <span style={{background: colorGradient}} className='circle'></span>
                        <h3>{title}</h3>
                        <p>{textContent}</p> 

                        <div className='containerButtons'>
                                <button>{contentButton1}</button>
                                <button>{contentButton2}</button>
                        </div>
                        
                </div>
))
}
              
        </section>
                     
)

}

export default Card;