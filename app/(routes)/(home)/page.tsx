import AppFeature from "@/app/components/appfeature";
import Banner from "@/app/components/banner";
import Bussines from "@/app/components/bussines";
import Feature from "@/app/components/feature";
import Header from "@/app/components/header";
import ContactUS from "@/app/components/contactus";
export default function HomePage() {
  return (
    <div className="w-full">
      <Header />
      <Banner />
      <Bussines />
      <Feature />
      <AppFeature />
      <ContactUS />
    </div>
  );
}
