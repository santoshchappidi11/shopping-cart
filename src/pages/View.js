import { useState } from "react";
import { useParams } from "react-router";
import ProductDetails from "../components/ProductDetails";
import { ShoppingCart } from "../context/ShoppingcartContext";
import MainPageLayout from "../navbar/MainPageLayout";
import FooterLayout from "../footer/FooterLayout";

const View = () => {
  const { shoppingViewData } = ShoppingCart();
  const [viewData] = useState(shoppingViewData);
  const { id } = useParams();

  return (
    <>
      <MainPageLayout>
        <FooterLayout>
          {viewData
            .filter((item) => item.id === id)
            .map((item) => (
              <ProductDetails item={item} key={item.id} />
            ))}
        </FooterLayout>
      </MainPageLayout>
    </>
  );
};

export default View;
