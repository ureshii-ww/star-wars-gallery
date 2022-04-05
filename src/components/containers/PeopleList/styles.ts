export const styles ={
  container: 'min-h-peopleList grid grid-rows-peopleList text-neutral-900',
  searchContainer: 'mb-6',
  searchInput:
    'w-full p-3 bg-zinc-800 rounded-2xl text-lg text-neutral-300 placeholder-neutral-500 focus-visible:outline-0 focus-visible:outline-indigo-400 focus-visible:outline-2 focus-visible:outline',
  mainLoaderContainer: 'flex justify-center items-center',
  mainLoader: 'w-12 h-12 animate-spin text-zinc-900',
  cardsList: 'grid grid-cols-2 gap-6',
  cardsListEmpty: 'h-full flex justify-center items-center',
  peopleLoaderContainer:
    'w-full mt-6 p-3 flex justify-center items-center rounded-xl bg-zinc-400 border border-gray-700 shadow-lg shadow-zinc-800',
  peopleLoaderSpinner: 'w-6 h-6 text-indigo-900 animate-spin',
  noPeople: 'text-2xl font-semibold',
}