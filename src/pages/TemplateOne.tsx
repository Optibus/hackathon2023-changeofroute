import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PosterData } from "../types";

const TemplateOne: React.FC = () => {
  const { search } = useLocation();
  const [data, setData] = useState<PosterData>();

  const fetchData = async (url: string) => {
    const result = await fetch(url);
    const json = await result.json();

    setData(json);
  };

  const url = React.useMemo(() => {
    const query = new URLSearchParams(search);

    const base64Url = query.get("url")!;

    return atob(base64Url);
  }, [search]);

  useEffect(() => {
    if (!url) return;

    fetchData(url);
  }, [url]);

  console.log(data);

  return <p>Template one</p>;
};

export default TemplateOne;
