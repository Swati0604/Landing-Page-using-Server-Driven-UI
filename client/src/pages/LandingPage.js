import { useEffect, useState } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const componentMap = {
    announcement: Announcement,
    navbar: Navbar,
    // SliderSection: Slider,
    // CategoriesSection: Categories,
    // FooterSection: Footer,
};

const LandingPage = () => {
  const [landingPageSchema, setLandingPageSchema] = useState([]);

  useEffect(() => {
    const fetchSchema = async () => {
      try {
        const response = await fetch('http://localhost:3000/landingPage');
        const data = await response.json();
        setLandingPageSchema(data);
      } catch (error) {
        console.error('Error fetching schema:', error);
      }
    };

    fetchSchema();
  }, []);

  console.log(landingPageSchema, 'landingPageSchema')

  if (!landingPageSchema) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {landingPageSchema &&
        landingPageSchema?.widgets?.map((widget, index) => {
          const widgetType = widget.type;
          const Component = componentMap[widgetType];

          console.log(widget, 'widgets')
          if (!Component) {
            return null;
          }
          const testId = `${widgetType}-${index}`;
          return (
            <div
              key={testId}
            >
              <Component {...widget} />
            </div>
          );
        })}
    </>
  );
}

export default LandingPage;