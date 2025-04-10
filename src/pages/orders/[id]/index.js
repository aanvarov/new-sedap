import Head from "next/head";
import MainLayout from "@/components/common/layouts/MainLayout";
import { useRouter } from "next/router";
import { orderListData } from "@/data";
import { useEffect, useState } from "react";

export default function OrderDetail() {
  const router = useRouter();
  const orderId = router.query.id;
  const [currentOrder, setCurrentOrder] = useState(null);

  useEffect(() => {
    const topilganOrder = orderListData.find((order) => order.userId == router.query.id);
    setCurrentOrder(topilganOrder);
  }, [router]);

  return (
    <>
      <Head>
        <title>{currentOrder ? "Order Detail: " + currentOrder.userId : "Tovar not found"}</title>
      </Head>
      <div>{currentOrder ? <p>Detail {currentOrder.userName}</p> : <p>Tovar not found</p>}</div>
    </>
  );
}

OrderDetail.getLayout = (pageProps) => (
  <MainLayout>
    <OrderDetail {...pageProps} />
  </MainLayout>
);
