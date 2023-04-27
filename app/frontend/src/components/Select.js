export default function Select({ id, name, options, searchData, setSearchData }) {
  return (
    <select
      id={id}
      onChange={setSearchData}
      defaultValue={searchData}
      className="min-[641px]:p-2.5 max-[640px]:w-full max-[640px]:p-4 max-[640px]:m-1 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-640 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option value="">{name}</option>
      {
        options.map((option, index) => <option key={index} value={option}>{option}</option>)
      }
    </select>
  )
}