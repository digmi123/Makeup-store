import ImageSelector from "@/components/ImageSelector";
import RelatedItems from "@/components/RelatedItems";
import ProductInformation from "@/components/ProductInformation";

export default async function Product({ params }) {
  const item = await prisma.product.findFirst({
    where: { id: Number(params.id) },
    include: { productColors: { include: { color: true } } },
  });

  return (
    <div style={{ width: "100%" }}>
      <div className="flex flex-wrap box-border items-start justify-around gap-[10px] py-6 px-2">
        <ImageSelector image={item.image} />
        <ProductInformation item={item} />
      </div>
      <RelatedItems />
    </div>
  );
}
