import React from 'react';
import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

export const useReactRouter5Props = () => ({
  location: useLocation(),
  navigate: useNavigate(),
  params: useParams()  
});

export const withRouter = (Component: React.JSXElementConstructor<any>) => {
  // @ts-ignore;
  Component.displayName = "Anonymous";

  const ComponentWithRouterProp = (props: any) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  ComponentWithRouterProp.displayName = "withRouter";
  return ComponentWithRouterProp;
}

export interface RouteComponentProps<T = {}> {
  location: {
    hash: string;
    key: string;
    pathname: string;
    state: any;
  };
  navigate?: Function;
  params?: T;
};
