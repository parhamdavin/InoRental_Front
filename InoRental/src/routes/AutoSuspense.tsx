import { Suspense } from "react";
import LoaderIcon from "../../src/utils/UI/Loader/LoaderIcon";

const withSuspense = (Component: any) => {
  const WrappedComponent = (props: any) => (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center">
          <LoaderIcon className="size-20" />
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );

  // Set a displayName for easier debugging
  WrappedComponent.displayName = `WithSuspense(${
    Component.displayName || Component.name || "Component"
  })`;

  return WrappedComponent;
};

export default withSuspense;
