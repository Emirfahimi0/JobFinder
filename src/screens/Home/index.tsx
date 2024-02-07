import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
import { HomeScreenComponent } from "./HomeComponent";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStoreProps } from "../../store";
import { updateCurrentList, setCurrentJob } from "../../store/global";
import { IStackNavigationProp } from "../../types/navigation";

declare interface IHomePageProps {
  navigation: IStackNavigationProp;
}

export const HomePage: FunctionComponent<IHomePageProps> = ({ navigation }: IHomePageProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { listJobs, currentJobs } = useSelector((state: GlobalStoreProps) => state.global);
  const dispatch = useDispatch();

  const popularJobs: JobInformation[] = [
    {
      jobTitle: "Lead Product Manager",
      companyTitle: "Google",
      salaryRange: "$60K -$ 80K / Per year",
      srcPath: "../../assets/images/google.png",
      jobTypes: "Full-Time",
    },
    {
      jobTitle: "React Developer",
      companyTitle: "Twitch",
      salaryRange: "$20K -$ 40K / Per year",
      srcPath: "../../assets/images/amazon.png",
      jobTypes: "Contract",
    },
  ];

  const nearbyJobs: JobInformation[] = [
    {
      jobTitle: "Lead Product Manager",
      companyTitle: "Google",
      salaryRange: "$60K -$ 80K / Per year",
      srcPath: "../../assets/images/google.png",
      jobTypes: "Full-Time",
    },
    {
      jobTitle: "React Developer",
      companyTitle: "Twitch",
      salaryRange: "$20K -$ 40K / Per year",
      srcPath: "../../assets/images/amazon.png",
      jobTypes: "Contract",
    },
    {
      jobTitle: "Lead Product Manager",
      companyTitle: "Google",
      salaryRange: "$60K -$ 80K / Per year",
      srcPath: "../../assets/images/google.png",
      jobTypes: "Full-Time",
    },
    {
      jobTitle: "React Developer",
      companyTitle: "Twitch",
      salaryRange: "$20K -$ 40K / Per year",
      srcPath: "../../assets/images/amazon.png",
      jobTypes: "Contract",
    },
    {
      jobTitle: "React Developer",
      companyTitle: "Twitch",
      salaryRange: "$20K -$ 40K / Per year",
      srcPath: "../../assets/images/amazon.png",
      jobTypes: "Contract",
    },
  ];

  const handleFetchJobs = async () => {
    const url = "https://indeed-jobs-api-sweden.p.rapidapi.com/indeed-se/?offset=0&keyword=python&location=Stockholm";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0972822c2fmsh6eea06143018752p16a3cejsnaefe83817129",
        "X-RapidAPI-Host": "indeed-jobs-api-sweden.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      const response = await fetch(url, options);
      const result = await response.text();
      setLoading(false);
      dispatch(updateCurrentList(JSON.parse(result)));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (listJobs === undefined) handleFetchJobs();
  }, []);

  return (
    <Fragment>
      <HomeScreenComponent popularJobs={listJobs} nearbyJobs={nearbyJobs} {...navigation} loading={false} />
    </Fragment>
  );
};
