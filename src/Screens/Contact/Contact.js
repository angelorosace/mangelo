import './contact.css';
import {motion} from 'framer-motion';

const item = {
    hidden: { opacity: 0,x:20},
    visible: {
      opacity: 1,x:0
    }
  };

const container = {
    visible: {
        transition: {
        delayChildren: 0,
        staggerChildren: 0.2
        }
    }
};

function Contact(){
    return(
        <motion.div variants={container} id='contact' className="contactContainer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
            <h2>CONTACT US</h2>
            <div className='mailContainer'>
                <motion.h1 style={{fontFamily:'arial',fontSize: '80px',color: '#15433D'}} variants={item}>mangelo</motion.h1>
                <motion.h1 variants={item} style={{fontFamily:'arial',fontSize: '80px',color: '#15433D'}}>@</motion.h1>
                <motion.h1 variants={item} style={{fontFamily:'arial',fontSize: '80px',color: '#15433D'}}>gmail.com</motion.h1>
            </div>
            
        </motion.div>
    )
}

export default Contact;
