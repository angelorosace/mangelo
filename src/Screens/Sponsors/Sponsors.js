import './sponsors.css'

import tmpLogo from '../../mangelo-logo-dark.png'

function Sponsors() {
    
    const sponsors_list = ['haf.png','clickbid.png','ef.png','slalom.png','la maison.png',
    'haf.png','clickbid.png','ef.png','slalom.png','la maison.png',
    'haf.png','clickbid.png','ef.png','slalom.png','la maison.png',
    'haf.png','clickbid.png','ef.png','slalom.png','la maison.png',
    'haf.png','clickbid.png','ef.png','slalom.png','la maison.png']

    return(
        <div id="logos-home-page" className='sponsorsContainer'>
            <div className="slider">
                <div class="slide-track">
                {
                    sponsors_list.map((val)=>{
                        return(
                            <div className='slide'>
                            <img className='sponsor' /*src={'../../media'+val}*/ src={tmpLogo} alt='val'/>
                            </div>
                        )
                    })
                }
                </div>
            
            </div>
        </div>
        
    )
}

export default Sponsors