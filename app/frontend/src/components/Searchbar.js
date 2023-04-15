import Select from "./Select";

export default function Seachbar({ searchData, setSearchData, getProducts }) {
  const { searchFor, category, website } = searchData;

  return (
    <div className="z-10 w-full max-w-5xl px-10 py-6 rounded-full items-center justify-between font-medium text-center lg:flex bg-slate-800">
      <form className="flex flex-wrap w-full justify-around">
        <Select
          id="web"
          name="Escolha o Site"
          options={['Todos', 'Mercado Livre', 'Buscapé']}
          setSearchData={(e) => setSearchData({ ...searchData, website: e.target.value })}
          searchData={website}
        />

        <Select
          id="categorys"
          name="Escolha a Categoria"
          options={['Geladeira', 'TV', 'Celular']}
          setSearchData={(e) => setSearchData({ ...searchData, category: e.target.value })}
          searchData={category}
        />

        <input
          type="search"
          id="search"
          onChange={(e) => setSearchData({ ...searchData, searchFor: e.target.value })}
          value={searchFor}
          className="w-80 p-4 pl-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."
          required
        />

        <button
          type="button"
          disabled={!(searchFor && category && website)}
          onClick={() => getProducts()}
          className="w-24 -ms-12 text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm p-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Search
        </button>
      </form>
    </div>
  )
}