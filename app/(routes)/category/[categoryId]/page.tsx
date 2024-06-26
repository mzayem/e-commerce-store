import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getStorages from "@/actions/get-storages";

import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product-card";

import Filter from "./components/filter";
import MobileFilter from "./components/mobile-filter";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    storageId: string;
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    storageId: searchParams.storageId,
  });

  const storages = await getStorages();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div>
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <div className="lg:hidden">
              <MobileFilter storages={storages} colors={colors} />
            </div>
            <div className="hidden lg:block">
              <Filter valueKey="storageId" name="Storages" data={storages} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
