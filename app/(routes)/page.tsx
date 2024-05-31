import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-product";

import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });

  const billboards = await getBillboards(
    "b4eb6bcb-598c-4555-b58b-d119996112a7"
  );
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />{" "}
        <div className="flex flex-col gap-y-9 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
