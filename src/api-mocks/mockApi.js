import { cloudResourcesData } from "./mockData";

export const fetchCloudResources = async () => {
  // simulate a delay to mimic an async api call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return cloudResourcesData;
};
