import {
  Blog,
  BlogCreate,
  BlogDetail,
  CassavaDetail,
  Cassavas,
  Diagnostics,
  DiseaseDetail,
  Diseases,
  Doctor,
  Homepage,
  Market,
  MarketUser,
  Maps,
  NotFound,
  Patient,
  Profile,
  Signin,
  Suppliers,
  ForgotPassword,
  Datawarehouse,
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
      diagnostics: {
        component: <Diagnostics />,
        url: `/diagnostics`,
      },
      market: {
        component: <Market />,
        url: `/market`,
      },
      market_user: {
        component: <MarketUser />,
        url: `/market_user`,
      },
      suppliers: {
        component: <Suppliers />,
        url: `/suppliers`,
      },
      profile: {
        component: <Profile />,
        url: `/profile`,
      },
      blogs: {
        component: <Blog />,
        url: `/blogs`,
      },
      blog_create: {
        component: <BlogCreate />,
        url: `/blog_create`,
      },
      blogs_detail: {
        component: <BlogDetail title={id} />,
        url: `/blogs/${id}`,
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
