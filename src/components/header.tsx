'use client'

import { HTMLAttributeAnchorTarget, ReactNode, useState } from 'react'

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
  target?: HTMLAttributeAnchorTarget
  popover?: TabPopover[]
}

export interface TabPopover {
  label: string
  desc?: string
  icon?: ReactNode
  href?: string
  target?: HTMLAttributeAnchorTarget
}

export interface HeaderLeading {
  icon?: ReactNode
  desc?: string
  href?: string
  target?: HTMLAttributeAnchorTarget
}

export interface HeaderTrailing {
  label: ReactNode
  href?: string
  target?: HTMLAttributeAnchorTarget
}

const Tab = ({ href, target, popover, children }: {
  href?: string
  target?: HTMLAttributeAnchorTarget
  popover?: TabPopover[]
  children: ReactNode
}) => {
  let label = <a href={href} target={target} className="text-sm font-semibold leading-6 text-gray-800">
    {children}
  </a>
  if (popover?.length) {
    label = (
      <Popover className="relative">
        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-800 ">
          {children}
          <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
        </PopoverButton>

        <PopoverPanel
          transition
          className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in  "
        >
          <div className="p-4 bg-white ">
            {popover.map((item) => (
              <div
                key={item.label}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 text-gray-800  hover:bg-black/10 "
              >
                {item.icon && <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                  {item.icon}
                </div>}
                <div className="flex-auto">
                  <a href={item.href} target={item.target} className="block font-semibold">
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

const Floating = ({ href, target, popover, children }: {
  href?: string
  target?: HTMLAttributeAnchorTarget
  popover?: TabPopover[]
  children: ReactNode
}) => {
  let label = <a
    href={href}
    target={target} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-400/30"
  >
    {children}
  </a>
  if (popover) {
    label = (
      <Disclosure as="div" className="-mx-3">
        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-800  hover:bg-gray-400/30">
          {children}
          <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
        </DisclosureButton>
        <DisclosurePanel className="mt-2 space-y-2">
          {popover.map((item) => (
            <DisclosureButton
              key={item.label}
              as="a"
              href={item.href}
              target={item.target}
              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-800  hover:bg-gray-400/30"
            >
              {item.label}
            </DisclosureButton>
          ))}
        </DisclosurePanel>
      </Disclosure>
    )
  }
  return label
}

const BrandIcon = ({ children, desc, href, target }: {
  children: ReactNode
  desc?: string
  href?: string
  target?: HTMLAttributeAnchorTarget
}) => {
  return <a href={href} target={target} className="-m-1.5 p-1.5">
    {desc && <span className="sr-only">{desc}</span>}
    {children}
  </a>
}

export default function HeaderFramework({
  title, leading, tabs, trailing
}: {
  title?: ReactNode
  leading?: HeaderLeading
  tabs: HeaderTab[]
  trailing?: HeaderTrailing
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return <>
    <header className="z-10 w-full fixed backdrop-blur-2xl">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          {leading &&
            <BrandIcon
              href={leading.href} desc={leading.desc}
              target={leading.target}>
              {leading.icon}
            </BrandIcon>}
        </div>
        {title}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6 text-black" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {tabs &&
            tabs.map((tab) => (
              <Tab
                key={tab.label}
                popover={tab.popover}
                href={tab.href}
                target={tab.target}
              >{tab.label}</Tab>
            ))
          }
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {trailing &&
            <a href={trailing.href}
              className="text-sm font-semibold leading-6"
              target={trailing.target}>
              {trailing.label} <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </a>}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-white/10 backdrop-blur">
          <div className="flex items-center justify-between">
            {leading &&
              <BrandIcon
                href={leading.href} desc={leading.desc}
                target={leading.target}>
                {leading.icon}
              </BrandIcon>}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-black"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="divide-y divide-gray-500/100">
            <div className="space-y-2 py-6">
              {tabs &&
                tabs.map((tab) => (
                  <Floating
                    key={tab.label}
                    popover={tab.popover}
                    href={tab.href}
                    target={tab.target}
                  >
                    {tab.label}
                  </Floating>
                ))
              }
            </div>
            {trailing && <div className="py-6">
              <a
                href={trailing.href}
                target={trailing.target}
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-400/30"
              >
                {trailing.label}
              </a>
            </div>}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <div className="h-4" />
  </>
}
