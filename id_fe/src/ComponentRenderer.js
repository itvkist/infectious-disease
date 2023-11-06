import {
  CassavaDetail,
  Cassavas,
  Pneumonia,
  DiseaseDetail,
  Diseases,
  Doctor,
  Homepage,
  Maps,
  NotFound,
  Patient,
  Profile,
  Signin,
  ForgotPassword,
  Datawarehouse,
  Enhancer,
  Statistics,
  Covid,
  Flu,
} from "pages";
import React from "react";
import { useParams } from "react-router-dom";

export default () => {
  const { id, page } = useParams();

  const components = {
    pages: {
      homepage: {
        component: <Homepage />,
        url: "/",
      },
      signin: {
        component: <Signin />,
        url: "/signin",
      },
      cassavas: {
        component: <Cassavas />,
        url: "/cassavas",
      },
      diseases: {
        component: <Diseases />,
        url: "/diseases",
      },
      cassavas_detail: {
        component: <CassavaDetail id={id} />,
        url: `/cassavas/${id}`,
      },
      diseases_detail: {
        component: <DiseaseDetail id={id} />,
        url: `/diseases/${id}`,
      },
      maps: {
        component: <Maps />,
        url: `/diseases`,
      },
      profile: {
        component: <Profile />,
        url: `/profile`,
      },
      forgot_password: {
        component: <ForgotPassword />,
        url: `/forgot_password`,
      },
      doctor: {
        component: <Doctor />,
        url: `/doctor`,
      },
      patient: {
        component: <Patient />,
        url: `/patient`,
      },
      datawarehouse: {
        component: <Datawarehouse />,
        url: `/datawarehouse`,
      },
      statistics: {
        component: <Statistics />,
        url: `/statistics`,
      },
      ai_enhancer: {
        component: <Enhancer />,
        url: `/ai_enhancer`,
      },
      ai_pneumonia: {
        component: <Pneumonia />,
        url: `/ai_pneumonia`,
      },
      ai_covid: {
        component: <Covid />,
        url: `/ai_covid`,
      },
      ai_flu: {
        component: <Flu />,
        url: `/ai_flu`,
      }
    },
  };
  try {
    return id
      ? components.pages[page + "_detail"].component
      : page
      ? components.pages[page].component
      : components.pages.homepage.component;
  } catch (e) {
    return <NotFound />;
  }
};
