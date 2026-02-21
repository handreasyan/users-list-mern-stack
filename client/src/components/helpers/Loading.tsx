export const LoadingComponent = ({ line }: { line?: boolean }) => {
  if (line) {
    return (
      <div className="absolute top-0 left-0 w-full">
        <div className="h-1 w-full bg-gray-200 rounded overflow-hidden">
          <div className="h-full w-1/3 bg-blue-600 animate-[loading_1s_ease-in-out_infinite]" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center py-10">
      <div className="h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
};
