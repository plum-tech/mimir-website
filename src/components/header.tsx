'use client'
import { ReactNode, useState } from 'react'

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'

import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon
} from '@heroicons/react/20/solid'

export interface HeaderTab {
  label: string
  href?: string
  popover?: TabPopover[]
}

export interface TabPopover {
  label: string
  desc?: string
  icon?: ReactNode
  href?: string
}

export interface HeaderLeading {
  icon?: ReactNode
  desc?: string
  href?: string
}

export interface HeaderTrailing {
  label: ReactNode
  href?: string
}

const Tab = ({ href, popover, children }: {
  href?: string
  popover?: TabPopover[]
  children: ReactNode
}) => {
  let label = <a href={href} className="text-sm font-semibold leading-6 text-gray-300">
    {children}
  </a>
  if (popover?.length) {
    label = (
      <Popover className="relative">
        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-300">
          {children}
          <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
        </PopoverButton>

        <PopoverPanel
          transition
          className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="p-4">
            {popover.map((item) => (
              <div
                key={item.label}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 text-gray-300"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                  {item.icon}
                </div>
                <div className="flex-auto">
                  <a href={item.href} className="block font-semibold">
                    {item.label}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </PopoverPanel>
      </Popover>
    )
  }
  return label
}

const Floating = ({ href, popover, children }: {
  href?: string
  popover?: TabPopover[]
  children: ReactNode
}) => {
  let label = <a
    href={href}
    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-50"
  >
    {children}
  </a>
  if (popover) {
    label = (
      <Disclosure as="div" className="-mx-3">
        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-50">
          {children}
          <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
        </DisclosureButton>
        <DisclosurePanel className="mt-2 space-y-2">
          {/* {[...products, ...callsToAction].map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-300 hover:bg-gray-50"
            >
              {item.name}
            </DisclosureButton>
          ))} */}
        </DisclosurePanel>
      </Disclosure>
    )
  }
  return label
}

const BrandIcon = ({ children, desc, href }: {
  children: ReactNode
  desc?: string
  href?: string
}) => {
  return <a href={href} className="-m-1.5 p-1.5">
    {desc && <span className="sr-only">{desc}</span>}
    {children}
  </a>
}

export default function HeaderFramework({ leading, tabs, trailing }: {
  leading?: HeaderLeading
  tabs: HeaderTab[]
  trailing?: HeaderTrailing
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          {leading && <BrandIcon href={leading.href} desc={leading.desc}>
            {leading.icon}
          </BrandIcon>}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {tabs &&
            tabs.map((tab) => (
              <Tab
                key={tab.label}
                popover={tab.popover}
                href={tab.href}
              >{tab.label}</Tab>
            ))
          }
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {trailing && <a href={trailing.href} className="text-sm font-semibold leading-6 text-gray-300">
            {trailing.label} <span aria-hidden="true">&rarr;</span>
          </a>}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {leading && <BrandIcon href={leading.href} desc={leading.desc}>
              {leading.icon}
            </BrandIcon>}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {tabs &&
                  tabs.map((tab) => (
                    <Floating
                      key={tab.label}
                      popover={tab.popover}
                      href={tab.href}
                    >{tab.label}</Floating>
                  ))
                }
              </div>
              {trailing && <div className="py-6">
                <a
                  href={trailing.href}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-50"
                >
                  {trailing.label}
                </a>
              </div>}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
