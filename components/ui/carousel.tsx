"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
} from "embla-carousel";

type CarouselApi = EmblaCarouselType;

type CarouselProps = {
  opts?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
  setApi?: (api: CarouselApi) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
  children: React.ReactNode;
};

type CarouselContextValue = {
  carouselRef: (node: HTMLDivElement | null) => void;
  api: CarouselApi | undefined;
  scrollPrev: () => void;
  scrollNext: () => void;
  orientation: "horizontal" | "vertical";
};

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within <Carousel />");
  }
  return context;
}

export function Carousel({
  opts,
  plugins,
  setApi,
  orientation = "horizontal",
  className = "",
  children,
}: CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
      direction: "rtl",
    },
    plugins
  );

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        scrollPrev,
        scrollNext,
        orientation,
      }}
    >
      <div className={`relative ${className}`}>{children}</div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        className={`flex ${
          orientation === "horizontal" ? "-mr-3" : "-mt-3 flex-col"
        } ${className}`}
        {...props}
      />
    </div>
  );
}

export function CarouselItem({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={`min-w-0 shrink-0 grow-0 basis-full ${
        orientation === "horizontal" ? "pr-3" : "pt-3"
      } ${className}`}
      {...props}
    />
  );
}

export function CarouselPrevious({
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { orientation, scrollPrev } = useCarousel();

  return (
    <button
      type="button"
      className={`absolute z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--border) bg-(--surface) text-(--brand-deep) ${
        orientation === "horizontal"
          ? "-left-3 top-1/2 -translate-y-1/2"
          : "-top-3 left-1/2 -translate-x-1/2 rotate-90"
      } ${className}`}
      onClick={scrollPrev}
      {...props}
    >
      <span aria-hidden="true">&#10095;</span>
      <span className="sr-only">Previous slide</span>
    </button>
  );
}

export function CarouselNext({
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { orientation, scrollNext } = useCarousel();

  return (
    <button
      type="button"
      className={`absolute z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--border) bg-(--surface) text-(--brand-deep) ${
        orientation === "horizontal"
          ? "-right-3 top-1/2 -translate-y-1/2"
          : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90"
      } ${className}`}
      onClick={scrollNext}
      {...props}
    >
      <span aria-hidden="true">&#10094;</span>
      <span className="sr-only">Next slide</span>
    </button>
  );
}
