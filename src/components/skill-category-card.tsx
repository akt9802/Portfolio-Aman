import type { SkillCategory } from "@/data/profile";

type SkillCategoryCardProps = {
  category: SkillCategory;
};

export function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  return (
    <div className="group/row grid gap-3 border-b border-white/8 py-4 transition-colors last:border-b-0 last:pb-0 hover:bg-white/[0.03] sm:grid-cols-[11rem_1fr] sm:items-center sm:gap-6 sm:-mx-3 sm:rounded-2xl sm:px-3">
      <p className="text-sm font-medium text-[#fdba74] transition-colors group-hover/row:text-[#fed7aa]">
        {category.title}
      </p>
      <ul className="flex flex-wrap gap-2">
        {category.items.map((item) => (
          <li
            key={item}
            className="cursor-default rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-200 transition duration-200 hover:-translate-y-0.5 hover:border-[#fdba74]/50 hover:bg-[#fdba74]/15 hover:text-white"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
