import './about.css'
import im from '../../media/MandyAngelo.png'
import mandy from '../../media/Mandy.png'
import angelo from '../../media/Angelo.png'
import {motion, useDragControls} from 'framer-motion';
import { useState,useRef } from 'react';

function About() {
    
    const [toggledMandy,setToggledMandy] = useState(false)
    const [toggledAngelo,setToggledAngelo] = useState(false)
    const [toggledMangelo,setToggledMangelo] = useState(false)

    const toggle = (type) => {
        if(type==='m'){
            setToggledMandy(true)
            setToggledMangelo(false)
            setToggledAngelo(false)
        }else if(type==='a'){
            setToggledMandy(false)
            setToggledMangelo(false)
            setToggledAngelo(true)
        }else if(type==='ma'){
            setToggledMandy(false)
            setToggledMangelo(true)
            setToggledAngelo(false)
        }
    }

    return(
        <div id='about' className="aboutContainer">
            <div className="aboutTitle">
                <div>
                    <motion.h3 viewport={{once:true}} whileInView={{scale:1}} initial={{opacity:0.5,scale:0}} whileHover={{opacity:1}} animate={{opacity:toggledMandy?1:0.5}} onClick={()=>{toggle('m')}} style={{cursor:'pointer',color:'white'}} transition={{scale:{delay:0.3}}}>Mandy</motion.h3>
                </div>
                <div>
                    <motion.h1 viewport={{once:true}} whileInView={{scale:1}} initial={{opacity:0.5,scale:0}} whileHover={{opacity:1}} animate={{opacity:toggledMangelo?1:0.5}} onClick={()=>{toggle('ma')}} style={{cursor:'pointer',color:'white'}} transition={{scale:{delay:1.3}}} >MANGELO</motion.h1>
                </div>
                <div>
                    <motion.h3 viewport={{once:true}} whileInView={{scale:1}} initial={{opacity:0.5,scale:0}} whileHover={{opacity:1}} animate={{opacity:toggledAngelo?1:0.5}} onClick={()=>{toggle('a')}} style={{cursor:'pointer',color:'white'}} transition={{scale:{delay:0.8}}}>Angelo</motion.h3>
                </div>
            </div>
            <div className="contentContainer">
                <div className="descCol" style={{visibility:toggledMandy?'visible':'hidden'}}>
                    <h1>Amanda Blanco</h1>
                    <p>a.k.a Mandy</p>
                    <p>
                    Graphic designer, crossfitter and curious person with a thirst for creativity
                    </p>
                    <p>
                        Costarican moved to spain, enjoyed the sun and becam a freelance and have been having the time of my life
                    </p>
                </div>
                <motion.div whileInView={{opacity:1}} initial={{opacity:0}} transition={{duration:1,delay:1.5}} viewport={{once:true}} className="photoCol" style={{position:'relative'}}>
                    <motion.img animate={{opacity:!toggledMangelo?0.5:1,x:toggledMangelo?'-80%':0}} src={im} className='fullImage' style={{position:'absolute'}}/>
                    <motion.img animate={{scale:toggledMandy?1.1:1,opacity:!toggledMandy?0.5:1,x:toggledMangelo?'-80%':0}} src={mandy} className='fullImage' style={{position:'absolute'}}/>
                    <motion.img animate={{scale:toggledAngelo?1.1:1,opacity:!toggledAngelo?0.5:1,x:toggledMangelo?'-80%':0}} src={angelo} className='fullImage' style={{position:'absolute'}}/>
                </motion.div>
                <div className="descCol" style={{position:'relative'}}>
                    <div style={{visibility:toggledAngelo?'visible':'hidden',position:'absolute'}}>
                        <h1>Angelo Rosace</h1>
                        <p>a.k.a Accilo</p>
                        <p>
                            Software engineer with an unquenchable thirst for learning new skills. Lot's of creativity and powerfull will to explore. 
                        </p>
                        <p>
                            Italian, moved to Barcelona for a Masters stayed for a PhD
                        </p>
                    </div>
                    <motion.div style={{visibility:toggledMangelo?'visible':'hidden',position:'absolute'}}
                        initial={{opacity:0}} animate={{opacity:toggledMangelo?1:0,x:toggledMangelo?'-60%':0}}
                    >
                        <h1>Angelo & Mandy</h1>
                        <p>a.k.a MANGELO</p>
                        <p>
                            Software engineer with an unquenchable thirst for learning new skills. Lot's of creativity and powerfull will to explore. 
                        </p>
                        <p>
                            Italian, moved to Barcelona for a Masters stayed for a PhD
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About

