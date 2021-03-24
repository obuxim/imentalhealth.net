import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutBanner from '../components/About/Banner'
import AboutGoal from '../components/About/Goal'
import AboutSkill from '../components/About/Skill'
import AboutProfessional from '../components/About/Professional'



export default function About(){
    return (
        <>
           <AboutBanner />
           <AboutGoal />
           <AboutSkill />
           <AboutProfessional />
        </>
    )
}