import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
import { IStackNavigationProp } from "../../types/navigation";
import { JobDetailsComponent } from "./JobDetailsComponent";

declare interface IJobDetailsPageProps {
  navigation: IStackNavigationProp;
}

export const JobDetailsPage: FunctionComponent<IJobDetailsPageProps> = ({ navigation }: IJobDetailsPageProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const categories: jobsInformationType[] = ["About", "Qualification", "Resposibilities"];

  const descriptionLabel = `Candidate must possess at least a Professional Certificate, Diploma, Advanced/Higher/Graduate Diploma, Bachelor's Degree,Post Graduate Diploma, Professional Degree, Computer Science/Information Technology, Engineering (Computer/Telecommunication), Engineering (Electrical/Electronic) or equivalent. At least 3 year(s) of working experience in the related field is required for this position. Preferably Managers specializing in IT/Computer - Software or equivalent. Full-Time position(s) available`;
  const handleFetch = async () => {
    let url = "https://jobs.github.com/positions.json";
    let data = {
      description: "javascript",
      location: "san francisco",
    };

    let params = Object.keys(data)
      .map((key) => key + "=" + encodeURIComponent(data[key]))
      .join("&");
    let fullUrl = `${url}?${params}`;

    fetch(fullUrl)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    handleFetch();
  });

  const jobInformations: IJobInformation = {
    title: "React Developer",
    companyTitle: "ProdWare Solution / USE",
    description: { about: descriptionLabel, qualification: descriptionLabel, responsibilities: descriptionLabel },
  };

  return (
    <Fragment>
      <JobDetailsComponent {...navigation} categories={categories} jobInformations={jobInformations} loading={loading} />
    </Fragment>
  );
};
