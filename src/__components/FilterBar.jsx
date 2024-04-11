"use client";
import styles from "@/app/styles/filterBar.module.css";
import FilterExpand from "./FilterExpand";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
    <aside className={styles.container}>
      {Object.entries(filters).map(([label, filterOptions]) => {
        return (
          <FilterExpand label={filterOptions.name} key={label}>
            {filterOptions.options.map((filterOption) => {
              return (
                <label className={styles.filterOption} key={filterOption}>
                  <input
                    type="checkbox"
                    onChange={handleFilter(label, filterOption)}
                    checked={checkDefault(label, filterOption)}
                  />
                  {filterOption}
                </label>
              );
            })}
          </FilterExpand>
        );
      })}
    </aside>
  );
}
