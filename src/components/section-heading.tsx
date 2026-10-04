type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center items-center"
      : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment} max-w-2xl`}>
      <span className="text-sm font-medium text-[#fdba74]">
        {kicker}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-base text-zinc-400 leading-relaxed">{description}</p>
      )}
    </div>
  );
}

