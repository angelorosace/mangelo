import './servicecard.css';
import {motion} from "framer-motion";

function ServiceCard(data) {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
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
        <div className="serviceCardContainer">
            <div className="CardContainer">
                <div className="DescriptionContainer">
                    <h3>{data.title}</h3>
                    <h1>{data.subtitle}</h1>
                    <p>{data.description}</p>
                </div>
                <motion.ul
                    className="container"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {data.skills.map((im,index) => (
                    <motion.li key={index} className="item" variants={item}>
                        <img src={require('../../media/'+im)} className='SkillImg'/>
                    </motion.li>
                    ))}
                </motion.ul>
                {/*<div className="SkillsContainer">
                    <div className='SkillsColumn' style={{justifyContent:col2.length === 3 ? 'space-around' : ''}}>
                    {   
                        col2.map((im,index)=>{
                            return(
                            <div key={im} className='skillIconContainer' style={{marginBottom: col1.length === 3 ? 0: 20}}>
                            <img src={require('../../media/'+im)} className='SkillImg'/>
                            </div>)
                        })   
                    }
                    </div>
                    <div className='SkillsColumn' style={{justifyContent:col2.length === 3 ? 'space-around' : ''}}>
                    {
                        
                        col1.map((im,index)=>{
                            return(<div key={im} className='skillIconContainer' style={{marginBottom:col2.length === 3 ? 0 : 20}}>
                            <img src={require('../../media/'+im)} className='SkillImg'/>
                            </div>)
                        })
                        
                    }
                    </div>
                </div>*/}
            </div>
        </div>
        )
}

export default ServiceCard