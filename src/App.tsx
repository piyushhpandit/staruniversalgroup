import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Events from './pages/Events';
import Foundation from './pages/Foundation';
import Travel from './pages/Travel';
import AboutUs from './pages/Events/aboutUs';
import Clients from './pages/Events/clients';
import Images from './pages/Events/images';
import Nepal from './pages/Travel/Tours/nepal';
import India from './pages/Travel/Tours/india';
import BuddhaCircuit from './pages/Travel/Tours/buddhaCircuit';
import HolidayPackage from './pages/Travel/Tours/holidayPackage';
import Donation from './pages/Foundation/donation';
import FoundationAboutUs from './pages/Foundation/foundationaboutus';
import Gallery from './pages/Foundation/gallery';
import ContactEvent from './pages/ContactUs/ContactEvent';
import ContactFoundation from './pages/ContactUs/ContactFoundation';
import ContactTravel from './pages/ContactUs/ContactTravel';
import EventsWeddingPlannerPatna from './pages/Seo/EventsWeddingPlannerPatna';
import EventsLocationLanding from './pages/Seo/EventsLocationLanding';
import EventsCityServiceDynamic from './pages/Seo/EventsCityServiceDynamic';
import SeoShell from './seo/SeoShell';
import { eventsFAQs, foundationFAQs, travelFAQs } from './content/faqs';
import { faqPage } from './seo/schema';


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SeoShell
            title="Star Universal Group | Events, Travel & Foundation"
            description="Star Universal Group offers event planning in Bihar, tour & travel services for India and Nepal, and foundation work supporting communities."
            canonicalPath="/"
          >
            <LandingPage />
          </SeoShell>
        }
      />
      <Route
        path="/events"
        element={
          <SeoShell
            title="Event Management Company in Bihar | Star Universal Group"
            description="Star Universal Group plans weddings, corporate events, and celebrations across Bihar with premium décor, trusted vendors, and seamless on-ground coordination."
            canonicalPath="/events"
            jsonLd={[{ id: 'faq', data: faqPage(eventsFAQs) }]}
          >
            <Events />
          </SeoShell>
        }
      />
      <Route
        path="/foundation"
        element={
          <SeoShell
            title="Foundation Working in Bihar | Star Universal Group"
            description="Star Universal Foundation supports community initiatives in Bihar—education, healthcare and social impact programs. Learn about our work and how to contribute."
            canonicalPath="/foundation"
            jsonLd={[{ id: 'faq', data: faqPage(foundationFAQs) }]}
          >
            <Foundation />
          </SeoShell>
        }
      />
      <Route
        path="/travel"
        element={
          <SeoShell
            title="Tour & Travel Services in India | Nepal Tour Packages | Star Universal"
            description="Book curated tour packages for India and Nepal with Star Universal—reliable planning, clear itineraries, and helpful support from start to finish."
            canonicalPath="/travel"
            jsonLd={[{ id: 'faq', data: faqPage(travelFAQs) }]}
          >
            <Travel />
          </SeoShell>
        }
      />

      {/* SEO-first Events routes (do not remove existing routes) */}
      <Route
        path="/events/bihar"
        element={
          <EventsLocationLanding
            canonicalPath="/events/bihar"
            title="Event Management Company in Bihar | Star Universal Group"
            description="Looking for an event company in Bihar? Star Universal Group delivers weddings and events across Bihar with trusted vendors, premium décor, and professional on-ground coordination."
            h1="Event Management Company in Bihar"
            intro="From weddings to corporate events, we manage planning, vendors, décor, and execution across Bihar—Patna, Muzaffarpur, Darbhanga, Purnia, Begusarai and more."
            childLinks={[
              { href: '/events/wedding-planner-patna', label: 'Best Wedding Planner in Patna' },
              { href: '/events/patna', label: 'Events in Patna' },
            ]}
          />
        }
      />
      <Route
        path="/events/patna"
        element={
          <EventsLocationLanding
            canonicalPath="/events/patna"
            title="Event Management Company in Patna, Bihar | Star Universal Group"
            description="Event management in Patna for weddings, receptions, corporate events and private functions. Get a clear plan, transparent budget, and seamless execution."
            h1="Event Management Company in Patna, Bihar"
            intro="Planning an event in Patna? We handle venue shortlisting, vendors, décor, guest flow and event-day coordination—so your functions run smooth and on time."
            childLinks={[{ href: '/events/wedding-planner-patna', label: 'Best Wedding Planner in Patna' }]}
          />
        }
      />
      <Route path="/events/wedding-planner-patna" element={<EventsWeddingPlannerPatna />} />
      {/* Programmatic city+service pages: /events/:serviceSlug-:citySlug */}
      <Route path="/events/:serviceSlug-:citySlug" element={<EventsCityServiceDynamic />} />

      <Route
        path="/aboutus"
        element={
          <SeoShell
            title="About Star Universal Events | Event Planning in Bihar"
            description="Learn about Star Universal Group’s events team, our planning process, and how we deliver weddings and events across Bihar."
            canonicalPath="/aboutus"
          >
            <AboutUs />
          </SeoShell>
        }
      />
      <Route
        path="/eventclients"
        element={
          <SeoShell
            title="Event Clients & Work | Star Universal Group"
            description="See our event clients and highlights from weddings, corporate events, and celebrations delivered by Star Universal Group."
            canonicalPath="/eventclients"
          >
            <Clients />
          </SeoShell>
        }
      />
      <Route
        path="/eventimages"
        element={
          <SeoShell
            title="Event Gallery | Weddings & Corporate Events | Star Universal Group"
            description="Browse our event gallery—wedding décor, corporate setups, and celebration highlights delivered by Star Universal Group."
            canonicalPath="/eventimages"
          >
            <Images />
          </SeoShell>
        }
      />

      {/* Preferred travel URLs */}
      <Route
        path="/travel/nepal"
        element={
          <SeoShell
            title="Nepal Tour Packages | Tour & Travel Services | Star Universal"
            description="Explore Nepal with curated tour packages—Kathmandu, Pokhara, Lumbini and more. Get itinerary support and transparent planning with Star Universal."
            canonicalPath="/travel/nepal"
          >
            <Nepal />
          </SeoShell>
        }
      />
      <Route
        path="/travel/india"
        element={
          <SeoShell
            title="India Tour Packages | Tour & Travel Services in India | Star Universal"
            description="Book India tour packages—Golden Triangle, Rajasthan, Kerala, Goa, Ladakh and more. Clear itineraries and reliable coordination with Star Universal."
            canonicalPath="/travel/india"
          >
            <India />
          </SeoShell>
        }
      />

      {/* Legacy travel routes kept for compatibility; canonicalized to /travel/* */}
      <Route
        path="/nepal"
        element={
          <SeoShell
            title="Nepal Tour Packages | Star Universal"
            description="Explore Nepal tour packages with Star Universal. Preferred URL: /travel/nepal"
            canonicalPath="/travel/nepal"
          >
            <Nepal />
          </SeoShell>
        }
      />
      <Route
        path="/india"
        element={
          <SeoShell
            title="India Tour Packages | Star Universal"
            description="Explore India tour packages with Star Universal. Preferred URL: /travel/india"
            canonicalPath="/travel/india"
          >
            <India />
          </SeoShell>
        }
      />
      <Route
        path="/buddhacircuit"
        element={
          <SeoShell
            title="Buddha Circuit Tour Packages | Star Universal"
            description="Buddha Circuit tour packages covering key Buddhist sites. Plan your journey with Star Universal."
            canonicalPath="/buddhacircuit"
          >
            <BuddhaCircuit />
          </SeoShell>
        }
      />
      <Route
        path="/holidaypackage"
        element={
          <SeoShell
            title="Holiday Tour Packages | Star Universal"
            description="Holiday tour packages across India and nearby destinations. Get a clear itinerary and support from Star Universal."
            canonicalPath="/holidaypackage"
          >
            <HolidayPackage />
          </SeoShell>
        }
      />

      <Route
        path="/donations"
        element={
          <SeoShell
            title="Donations | Star Universal Foundation"
            description="Support Star Universal Foundation initiatives. Learn donation details and how contributions are used."
            canonicalPath="/donations"
          >
            <Donation />
          </SeoShell>
        }
      />
      <Route
        path="/foundationaboutus"
        element={
          <SeoShell
            title="About Our Foundation | Star Universal Foundation"
            description="Learn about Star Universal Foundation’s mission, focus areas and impact in Bihar."
            canonicalPath="/foundationaboutus"
          >
            <FoundationAboutUs />
          </SeoShell>
        }
      />
      <Route
        path="/foundationgallery"
        element={
          <SeoShell
            title="Foundation Gallery | Star Universal Foundation"
            description="Explore photos and highlights from Star Universal Foundation’s work in Bihar."
            canonicalPath="/foundationgallery"
          >
            <Gallery />
          </SeoShell>
        }
      />

      {/* Contact forms: keep accessible but noindex */}
      <Route
        path="/contact-event"
        element={
          <SeoShell
            title="Contact Events Team | Star Universal Group"
            description="Contact Star Universal Group for wedding planning and event management inquiries in Bihar."
            canonicalPath="/contact-event"
            robots="noindex,follow"
          >
            <ContactEvent />
          </SeoShell>
        }
      />
      <Route
        path="/contact-foundation"
        element={
          <SeoShell
            title="Contact Foundation | Star Universal Foundation"
            description="Get in touch with Star Universal Foundation for partnerships, support, and inquiries."
            canonicalPath="/contact-foundation"
            robots="noindex,follow"
          >
            <ContactFoundation />
          </SeoShell>
        }
      />
      <Route
        path="/contact-travel"
        element={
          <SeoShell
            title="Contact Travel Team | Star Universal"
            description="Contact Star Universal for tour packages and travel planning for India and Nepal."
            canonicalPath="/contact-travel"
            robots="noindex,follow"
          >
            <ContactTravel />
          </SeoShell>
        }
      />

    </Routes>
  );
}

export default App;