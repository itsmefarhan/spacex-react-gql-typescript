import React from "react";
import { useLaunchListQuery } from "../../generated/graphql";
import Spinner from "../Spinner";
import LaunchList from "./LaunchList";

const LaunchListContainer = () => {
  const { data, loading, error } = useLaunchListQuery();

  if (loading) return <Spinner />;

  if (error || !data) return <h3>Something Went Wrong</h3>;

  return <LaunchList data={data} />;
};

export default LaunchListContainer;
