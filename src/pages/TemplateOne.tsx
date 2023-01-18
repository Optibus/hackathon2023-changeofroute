import React from "react";
import { useLocation } from "react-router-dom";

const TemplateOne: React.FC = () => {
  const { search } = useLocation();

  const url = React.useMemo(() => {
    const query = new URLSearchParams(search);

    const base64Url = query.get("url")!;

    return atob(base64Url);
  }, [search]);

  console.log(url);

  return <p>Template one</p>;
};

export default TemplateOne;
