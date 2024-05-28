"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const filters = {
  category: {
    name: "Categories",
    options: ["pencil", "lipstick", "liquid", "powder"],
  },
  shipping: {
    name: "Shipping",
    options: ["pencil", "lipstick", "liquid", "powder"],
  },
  price: {
    name: "Price",
    options: ["pencil", "lipstick", "liquid", "powder"],
  },
  test1: {
    name: "Test1",
    options: ["pencil", "lipstick", "liquid", "powder"],
  },
  test2: {
    name: "Test2",
    options: ["pencil", "lipstick", "liquid", "powder"],
  },
};

export default function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const checkDefault = (label, filterParam) => {
    const params = new URLSearchParams(searchParams);
    let labelList = params.get(label)?.split(",") || [];
    return labelList.includes(filterParam);
  };

  const handleFilter = (label, filterParam) => (event) => {
    const { checked } = event.target;
    const params = new URLSearchParams(searchParams);
    let labelList = params.get(label)?.split(",") || [];

    if (checked) labelList.push(filterParam);
    else labelList.splice(labelList.indexOf(filterParam), 1);

    //If list is empty clear URL:
    if (labelList.length) params.set(label, labelList.join(","));
    else params.delete(label);

    router.push(pathname + "?" + params.toString());
  };

  return (
    <aside className="max-h-screen px-6 overflow-auto">
      <Accordion
        type="multiple"
        className="text-[--filter-foreground] bg-[--filter-background]"
      >
        {Object.entries(filters).map(([label, filterOptions]) => {
          return (
            <AccordionItem value={label} key={label}>
              <AccordionTrigger className="text-lg">
                {filterOptions.name}
              </AccordionTrigger>
              <AccordionContent>
                {filterOptions.options.map((filterOption) => {
                  return (
                    <label
                      className="flex items-center gap-4 py-2 text-lg"
                      key={filterOption}
                    >
                      <input
                        type="checkbox"
                        onChange={handleFilter(label, filterOption)}
                        checked={checkDefault(label, filterOption)}
                      />
                      {filterOption}
                    </label>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </aside>
  );
}
