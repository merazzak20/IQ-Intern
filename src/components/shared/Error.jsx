import React from "react";
import Container from "./Container";

const Error = () => {
  return (
    <Container>
      <div class="flex flex-col items-center justify-center text-sm max-md:px-4 w-full min-h-[80vh]">
        <h1 class="text-8xl md:text-9xl font-bold text-[#007A88]">404</h1>
        <div class="h-1 w-16 rounded bg-[#007A88] my-5 md:my-7"></div>
        <p class="text-2xl md:text-3xl font-bold text-gray-800">
          Page Not Found
        </p>
        <p class="text-sm md:text-base mt-4 text-gray-500 max-w-md text-center">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div class="flex items-center gap-4 mt-6">
          <a
            href="/"
            class="bg-gray-800 px-7 py-2.5 text-white rounded-md active:scale-95 transition-all"
          >
            Return Home
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Error;
