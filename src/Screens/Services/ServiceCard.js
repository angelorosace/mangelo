import {React,useState} from 'react';

import './services.css'

import {motion} from 'framer-motion';

function ServiceCard({backgroundImg,title,subtitle,description,icons}) {
    
    const [hovered,setHovered] = useState(false);

    const container = {
        hidden: { opacity: 1},
        visible: {
            opacity:1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
    
    return(
        <motion.div className='ServiceCardContainer'
            whileHover={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <motion.img src={backgroundImg}
                animate={{scale:hovered?0.8:1}}
            />
            <motion.div
                animate={{y:hovered?-140:0}}
                className='CardTextContainer'
            >
                <h1>{title}</h1>
                {hovered && <motion.p
                    animate={{opacity:hovered?1:0}}
                    transition={{delay:0.2}}
                >{description}</motion.p>}
                {hovered && <motion.div 
                    variants={container}
                    className='iconList'
                    initial="hidden"
                    animate="visible"
                    >
                    {icons.map((i,index)=>{return(
                        <motion.img 
                            variants={item}
                            key={index} 
                            src={i}
                            alt={index}/>
                    )})}
                </motion.div>}
            </motion.div>
            
        </motion.div>
        
    )
}

export default ServiceCard