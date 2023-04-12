import Products from '@/components/Products'
import Seachbar from '@/components/Searchbar'
import { requestData } from '@/services/requests'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [productsData, setProductsData] = useState([]);
  const [searchData, setSearchData] = useState({
    searchFor: "",
    category: "",
    website: ""
  });

  const getProducts = async () => {
    const { searchFor, category, website } = searchData;
    console.log(searchData);
    const products = await requestData('/', { searchFor, category, website });

    setProductsData(products);
  };

  console.log(productsData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Seachbar searchData={searchData} setSearchData={setSearchData} getProducts={getProducts} />
      {/* <Products productsData={productsData} /> */}

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">

      </div>
    </main>
  )
}
