import React from "react";
import { useParams } from "react-router-dom";
import { useLaunchProfileQuery } from "../../generated/graphql";
import LaunchProfile from "./LaunchProfile";
import Spinner from "../Spinner";

const LaunchProfileContainer = () => {
  const { id } = useParams();

  const { data, loading, error } = useLaunchProfileQuery({
    variables: { id },
  });

  if (loading) return <Spinner />;

  if (error || !data) return <h3>Something Went Wrong</h3>;

  return <LaunchProfile data={data} />;
};

export default LaunchProfileContainer;
