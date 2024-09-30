import Navbar from './Navbar';
import MyComponent from './MyComponent';
import Footer from './Footer';
import Search from './Search';
import ActionsGrid from './ActionGrid';
import BottomNavbar from './BottomNavbar';
import Card from './Card';
import DonationCard from './DonationCard';
import Banner from './Benner';
import PrayerList from './PrayerList';
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        {/* Navbar */}
        <Navbar />

        {/* Search Section */}
        <div className="flex-grow">
          <Search />
          <MyComponent />
          <DonationCard/>
          <ActionsGrid />
          <Card/>
          <Banner/>
          <PrayerList />
        </div>
       
        {/* Footer */}
        <Footer />

        {/* Bottom Navbar (Mobile) */}
        <BottomNavbar />
      </div>
    </>
  );
}

export default App;
