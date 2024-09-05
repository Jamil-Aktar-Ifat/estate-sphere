import { useEffect, useState } from "react";
import Property from "../Property/Property";
import "animate.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [dataLength, setDataLength] = useState(6);

  useEffect(() => {
    fetch("/properties.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold text-center my-10 animate__animated animate__bounceInRight animate__repeat-2	animate__slower">
        Trading Properties
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {properties.slice(0, dataLength).map((property) => (
          <Property key={property.id} property={property}></Property>
        ))}
      </div>
      <div className="text-center my-5">
        <div className={dataLength === properties.length && "hidden"}>
          <button
            onClick={() => setDataLength(properties.length)}
            className="bg-[#FA4A4A] text-white border-none px-5 py-3 rounded-md custom-hover"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Properties;
