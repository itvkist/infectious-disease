import axiosInstance, { newAbortSignal } from "services/axios";

export const getDiseases = async () => {
  const res = await axiosInstance.get("/api/infectious-diseases", {
    signal: newAbortSignal(),
  });
  if (res.status === 200)
    localStorage.setItem("disease", JSON.stringify(res.data.data));
  return res;
};

export const getDiseaseDetail = async (props) =>
  await axiosInstance.get(
    "/api/infectious-diseases/" + props,
    {
      signal: newAbortSignal(),
    }
  );
