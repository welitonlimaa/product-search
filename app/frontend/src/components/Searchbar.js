import Select from "./Select";

export default function Seachbar({ searchData, setSearchData, getProducts }) {
  const { searchFor, category, website } = searchData;

  return (
    <div className="z-10 w-full min-[641px]:max-w-5xl min-[641px]:px-10 min-[641px]:py-6 max-[640px]:w-96 max-[640px]:p-4 min-[641px]:rounded-full max-[640px]:rounded-xl items-center min-[641px]:justify-between font-medium text-center min-[641px]:flex bg-slate-800">
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
          className="min-[641px]:w-80 min-[641px]:p-4 min-[641px]:pl-10 max-[640px]:w-full max-[640px]:p-4 max-[640px]:m-1 min-[641px]:rounded-md text-base text-gray-900 border border-gray-300 rounded-min-[641px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-640 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar..."
          required
        />

        <button
          type="button"
          disabled={!(searchFor && category && website)}
          onClick={() => getProducts()}
          className="min-[641px]:w-24 min-[641px]:-ms-12 max-[640px]:w-full min-[641px]:rounded-md text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-min-[641px] text-sm p-4 dark:bg-blue-640 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Buscar
        </button>
      </form>
    </div>
  )
}