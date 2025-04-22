
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-gold">
      <div className="text-navyblue mb-4 text-3xl">{icon}</div>
      <h3 className="font-montserrat font-semibold text-xl mb-3 text-navyblue">
        {title}
      </h3>
      <p className="font-lato text-charcoal mb-4">{description}</p>
      <Link
        to={link}
        className="inline-block font-montserrat text-sm text-gold hover:text-deepblue transition-colors"
      >
        Learn More &rarr;
      </Link>
    </div>
  );
};

export default ServiceCard;
