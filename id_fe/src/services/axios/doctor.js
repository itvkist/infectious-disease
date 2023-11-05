import axiosInstance, { newAbortSignal } from "services/axios";

export const getDoctors = async () => {
  const res = await axiosInstance.get("/api/doctors", {
    signal: newAbortSignal(),
  });
  if (res.status === 200)
    localStorage.setItem("doctor", JSON.stringify(res.data.data));
  return res;
};

export const getDoctorDetail = async (props) =>
  await axiosInstance.get(
    "/api/doctors/" + props,
    {
      signal: newAbortSignal(),
    }
  );
