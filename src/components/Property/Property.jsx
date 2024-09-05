import { Link } from "react-router-dom";

const Property = ({ property }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white relative">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={property.image}
          alt={property.estate_title}
        />
        {/* Status Badge on Top Right */}
        <span
          className={`absolute top-2 right-2 px-3 py-1 rounded-lg text-sm font-semibold ${
            property.status === "sale"
              ? "bg-green-500 text-white"
              : "bg-blue-500 text-white"
          }`}
        >
          {property.status === "sale" ? "For Sale" : "For Rent"}
        </span>
      </div>
      <div className="p-6">
        <div className="font-bold text-xl mb-2">{property.property_title}</div>
        <p className="text-gray-700 text-base">{property.description}</p>
        <div className="mt-4">
          <span className="block font-semibold text-gray-900">
            Price: {property.price}
          </span>
          <span className="block text-sm text-gray-600">
            Area: {property.area}
          </span>
          <span className="block text-sm text-gray-600">
            Location: {property.location}
          </span>
        </div>
        <div className="mt-4">
          <ul className="list-disc list-inside">
            {property.facilities.map((facility, index) => (
              <li key={index} className="text-sm text-gray-600">
                {facility}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 w-full ">
          <Link
            to={`/property/${property.id}`}
            className="btn w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-slate-700"
          >
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Property;
