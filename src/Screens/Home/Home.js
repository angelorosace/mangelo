import './Home.css'
import {motion} from 'framer-motion';
import { useState,useEffect } from 'react';

import mandy1 from '../../media/gem.png'
import mandy2 from '../../media/gems.png'
import mandy3 from '../../media/diamond.png'
import angelo1 from '../../media/mine.png'
import angelo2 from '../../media/mining-cart.png'
import angelo3 from '../../media/mining.png'

function Home() {

    const [circle1Active,setCircle1Active] = useState(false);
    const [circle2Active,setCircle2Active] = useState(true);

    const [circle1Size,setCircle1Size]=useState(100);
    const [circle2Size,setCircle2Size]=useState(300);

    const [transitionEnd,setTransitionEnd]=useState(false);

    const circle1 = {
        height:circle1Size,
        width:circle1Size,
        marginLeft:350,
        marginTop:70,
        backgroundColor:'gray',
        borderRadius:200,
        position:'absolute',
        cursor:circle2Active?'pointer':'default'
    }
    const circle2 = {
        height:circle2Size,
        width:circle2Size,
        marginLeft:50,
        marginTop:130,
        backgroundColor:'black',
        borderRadius:200,
        position:'absolute',
        cursor:circle1Active?'pointer':'default'
    }
    const circleContainer = {
        height:500,
        width:500,
        marginRight:50,
        marginTop:140,
        position:'relative'
    }


    const setActive = (val) => {
        if (val==='circle1' && !circle1Active){
            setCircle2Active(false)
            setCircle1Active(true)
        }
        if (val==='circle2' && !circle2Active){
            setCircle2Active(true)
            setCircle1Active(false)
        }
    }

    useEffect(()=>{
        setTimeout(function() {
            setTransitionEnd(true)
             }, 2000);
           },
       [])

    return(
        <div className="homeContainer">
            <div className='homeTitle'>
                <motion.h1 initial={{opacity:0}} 
                            animate={{opacity:1}} 
                            transition={{duration:1,delay:0.3}}>MAKING ENDS MEET</motion.h1>
                <motion.div initial={{y:200,opacity:0}} animate={{y:0,opacity:[0,0,0.8,1]}} transition={{duration:0.3,delay:1.7}} className='callToActionContainer'>
                    <a href='#' className='callToAction'>GET STARTED</a>
                </motion.div>
            </div>
            <div className='homeAnimationContainer'>
            {!transitionEnd && 
                <div style={circleContainer}>
                    <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:1,delay:0.8}} style={circle1}></motion.div>
                    <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:0.6,delay:0.8}} style={circle2}></motion.div>
                </div>
            }
            {transitionEnd && 
                <div style={circleContainer}>
                    <motion.div style={circle1} animate={{scale:circle1Active?3:1}} onClick={()=>setActive('circle1')}>
                        <motion.img className='img' initial={{scale:0,zIndex:-1}} animate={{scale:circle1Active?1:0,zIndex:2}} src={angelo3} alt='tmp' style={{height:'20%',width:'20%',position:'absolute',top:-2}}/>
                        <motion.img className='img' initial={{scale:0,zIndex:-1}} animate={{scale:circle1Active?1:0,zIndex:2}} src={angelo2} alt='tmp' style={{height:'25%',width:'25%',position:'absolute',top:'30%',left:'90%'}}/>
                        <motion.img className='img' initial={{scale:0,zIndex:-1}} animate={{scale:circle1Active?1:0,zIndex:2}} src={angelo1} alt='tmp' style={{height:'15%',width:'15%',position:'absolute',top:'80%',left:'20%'}}/>
                    </motion.div>
                    <motion.div style={circle2} animate={{scale:circle1Active?1/3:1}} onClick={()=>setActive('circle2')}>
                        <motion.img className='img' initial={{scale:0,zIndex:-1}} animate={{scale:circle1Active?0:1,zIndex:2}} src={mandy3} alt='tmp' style={{height:'20%',width:'20%',position:'absolute',top:'-10%',left:'30%'}}/>
                        <motion.img className='img' initial={{scale:0,zIndex:-1}} animate={{scale:circle1Active?0:1,zIndex:2}} src={mandy2} alt='tmp' style={{height:'15%',width:'15%',position:'absolute',top:'35%',left:'-10%'}}/>
                        <motion.img className='img' initial={{scale:0,zIndex:-1}} animate={{scale:circle1Active?0:1,zIndex:2}} src={mandy1} alt='tmp' style={{height:'25%',width:'25%',position:'absolute',top:'55%',left:'85%'}}/>
                    </motion.div>
                </div>
            }
            </div>
            
        </div>
    )
}

export default Home;