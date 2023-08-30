
import About from '@/about/About';
import Banner from '@/banner/Banner';
import FrontLayout from '@/components/FrontLayout';
import Contact from '@/contact/Contact';
import Portfolio from '@/portfolio/Portfolio';
import Services from '@/services/Services';
import Technology from '@/technology/Technology';


export default function Home() {
  return (
    <FrontLayout>
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Technology />
    </FrontLayout>
  )
}
