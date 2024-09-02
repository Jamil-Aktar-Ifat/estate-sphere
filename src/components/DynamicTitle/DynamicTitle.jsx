import { useEffect } from "react";

const DynamicTitle = (title) => {
  useEffect(() => {
    document.title = `EstateSphere - ${title}`;
  }, []);
};

export default DynamicTitle;
