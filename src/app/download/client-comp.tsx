"use client"
import { Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { Card } from "@/components/card"
import { useState } from 'react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

export const MoreDownloads = ({
  versions
}: {
  versions: string[]
}) => {
  const [selected, setSelected] = useState(versions[0])

  return <Card header={
    "更多版本下载"
  }>
    <Listbox value={selected} onChange={setSelected}>
      <ListboxButton className={clsx(
        'relative block w-full rounded-lg bg-black/5 py-1.5 pr-8 pl-3 text-left text-sm/6 ',
        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
      )}>
        v{selected}
        <ChevronDownIcon
          className="group pointer-events-none absolute top-2.5 right-2.5 size-4"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className={clsx(
          'w-[var(--button-width)] rounded-xl border border-black/5 bg-black/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
          'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
        )}
      >
        {versions.map((version) => (
          <ListboxOption key={version} value={version} className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/10">
            <CheckIcon className="invisible size-4 group-data-[selected]:visible" />
            v{version}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  </Card>
}