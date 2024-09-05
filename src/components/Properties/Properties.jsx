import { useEffect, useState } from "react";
import Property from "../Property/Property";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("/properties.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);
  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold text-center my-10">
        Trading Properties
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {properties.map((property) => (
          <Property key={property.id} property={property}></Property>
        ))}
      </div>
    </div>
  );
};

export default Properties;
