import Loading from '@/components/Loading'
import Products from '@/components/Products'
import Seachbar from '@/components/Searchbar'
import { requestData } from '@/services/requests'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState({
    searchFor: "",
    category: "",
    website: ""
  });

  const getProducts = async () => {
    setLoading(true);

    const products = await requestData(searchData);

    setProductsData(products);
    setLoading(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-neutral-50">
      <Seachbar searchData={searchData} setSearchData={setSearchData} getProducts={getProducts} />
      {
        isLoading ? <Loading /> : <Products productsData={productsData} />
      }
    </main>
  )
}
