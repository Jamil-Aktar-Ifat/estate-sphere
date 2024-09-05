import { useLoaderData, useParams } from "react-router-dom";
import DynamicTitle from "../../components/DynamicTitle/DynamicTitle";
import { IoPricetagsOutline } from "react-icons/io5";
import { GrStatusGood } from "react-icons/gr";
import { LuAreaChart } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { LuPackagePlus } from "react-icons/lu";
import Leaflet from "../../components/Leaflet/Leaflet";

const PropertyDetails = () => {
  //   DynamicTitle(`${property.property_title}`);

  const properties = useLoaderData();
  const { id } = useParams();
  const property = properties.find((property) => property.id === parseInt(id));
  console.log(property);
  DynamicTitle(property.property_title);
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-10">
        <div className=" grid items-center">
          <img
            src={property.image}
            alt={property.property_title}
            className="md:w-[1300px] md:h-[480px]  rounded-lg"
          />
        </div>
        <div className=" grid items-center ">
          <h1 className="text-3xl font-bold mb-4">{property.property_title}</h1>
          <p className="text-gray-700 mb-2 flex items-center gap-1">
            <IoPricetagsOutline></IoPricetagsOutline>
            <strong>Price:</strong> {property.price}
          </p>
          <p className="text-gray-700 mb-2 flex items-center gap-1">
            <GrStatusGood></GrStatusGood>
            <strong>
              {property.status === "sale" ? "For Sale" : "For Rent"}
            </strong>
          </p>
          <p className="text-gray-700 mb-2 flex items-center gap-1">
            <LuAreaChart></LuAreaChart>
            <strong>Area:</strong> {property.area}
          </p>
          <p className="text-gray-700 mb-2 flex items-center gap-1">
            <IoLocationOutline></IoLocationOutline>
            <strong>Location:</strong> {property.location}
          </p>
          <p className="text-gray-700 mb-4 flex gap-1">
            <span className="text-xl">
              <MdOutlineDescription></MdOutlineDescription>
            </span>
            <strong>Description:</strong> {property.description}
          </p>

          <h3 className="text-xl font-semibold mb-2 flex items-center gap-1">
            <span>
              <LuPackagePlus></LuPackagePlus>
            </span>
            Facilities:
          </h3>
          <ul className="list-disc pl-5 mb-6">
            {property.facilities.map((facility, index) => (
              <li key={index} className="text-gray-700">
                {facility}
              </li>
            ))}
          </ul>
          <button className="bg-[#FA4A4A] text-white px-6 py-3 rounded-md custom-hover">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
