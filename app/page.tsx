import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import {Events, Features, ServiceArea, Gallery, HowItWorks, FAQ, FinalCTA} from '@/components/Sections';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';
export default function Home(){return <><Navbar/><main id="contenu"><Hero/><div className="brand-strip"><span>UN SOURIRE.</span><span className="strip-star">✳</span><span>UN DÉCLIC.</span><span className="strip-star">✳</span><span>UN SOUVENIR.</span><span className="strip-star">✳</span><span>ET ON RECOMMENCE.</span></div><Events/><Features/><ServiceArea/><Gallery/><HowItWorks/><FAQ/><FinalCTA/><QuoteForm/></main><Footer/></>}
