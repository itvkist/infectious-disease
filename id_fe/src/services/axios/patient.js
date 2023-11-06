import axiosInstance, { newAbortSignal } from "services/axios";

export const getPatients = async () => {
  const res = await axiosInstance.get("/api/patients", {
    signal: newAbortSignal(),
  });
  if (res.status === 200)
    localStorage.setItem("patient", JSON.stringify(res.data.data));
  return res;
};

export const getPatientDetail = async (props) =>
  await axiosInstance.get(
    "/api/patients/" + props,
    {
      signal: newAbortSignal(),
    }
  );
