import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar.jsx";
import Link from "next/link";

export default async function Home({ searchParams }) {
  const items = await prisma.product.findMany({
    include: { productColors: { include: { color: true } } },
  });

  const filteredItems = items.filter((item) =>
    Object.entries(searchParams || {}).every(([key, list]) =>
      list.split(",").includes(item[key])
    )
  );

  return (
    <div className="grid grid-cols-[min-content_auto]">
      <FilterBar />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 px-4">
        {filteredItems.map((item) => (
          <Link href={`/products/${item.id}`} key={item.id}>
            <ProductCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
