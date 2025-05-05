import { useEffect } from "react";

const ReservationWidget = () => {
  useEffect(() => {
    // Prevent script from being added multiple times
    if (
      !document.querySelector('script[src="https://widgets.resy.com/embed.js"]')
    ) {
      const script = document.createElement("script");
      script.src = "https://widgets.resy.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="resy-widget"
      data-resy-type="reservations"
      data-resy-inline="true"
      data-resy-restaurant-id="YOUR_RESTAURANT_ID"
      data-resy-source-type="widget"
    ></div>
  );
};

export default ReservationWidget;
