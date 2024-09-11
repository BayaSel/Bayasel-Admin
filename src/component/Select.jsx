'use client'

import { useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

const years = [
    { id: 1, year: '2020' },
    { id: 2, year: '2021' },
    { id: 3, year: '2022' },
    { id: 4, year: '2023' },
    { id: 5, year: '2024' },
  ]
export default function Select() {
  const [selected, setSelected] = useState(years[3])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative">
        <ListboxButton className="relative w-full cursor-default border border-[#4BAF47] rounded-lg bg-white py-[10px] pl-3 pr-10 text-left text-[#4BAF47] shadow-sm ring-1 ring-inset ring-[#4BAF47] focus:outline-none focus:ring-2 focus:ring-[#4BAF47] sm:text-sm lg:text-base leading-6 transition duration-300 ease-in-out transform hover:scale-105">
          <span className="block font-semibold">{selected.year}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronDownIcon aria-hidden="true" className="h-8 w-8 text-[#4BAF47] font-light" />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {years.map((year) => (
            <ListboxOption
              key={year.id}
              value={year}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-[#4BAF47] data-[focus]:text-white"
            >
              <span className="block truncate font-normal group-data-[selected]:font-semibold">
                {year.year}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#4BAF47] group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-6 w-6" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}

