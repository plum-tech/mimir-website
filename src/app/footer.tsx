import { ReactNode } from "react"

export default function Footer() {
  return <FooterFramework>
    <FooterSection title="帮助">
      <SectionItem url="/contact">联系我们</SectionItem>
      <SectionItem url="/about">关于</SectionItem>
    </FooterSection>
    <FooterSection title="应用下载">
      <SectionItem url="">iOS</SectionItem>
      <SectionItem url="">Android</SectionItem>
    </FooterSection>
  </FooterFramework>
}

const FooterFramework = ({
  children
}: {
  children: ReactNode
}) => {
  return <footer className="">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        {children}
      </div>
      <div className="px-4 py-6 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2024 <a href="https://flowbite.com/">Plum Technology</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          <QuickContactButton
            desc="GitHub"
            url="https://github.com/liplum-dev/mimir-website"
          >
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
            </svg>
          </QuickContactButton>
        </div>
      </div>
    </div>
  </footer>
}

const FooterSection = ({
  title, children
}: {
  title: ReactNode
  children?: ReactNode
}) => {
  return <div>
    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{title}</h2>
    <ul className="text-gray-500 dark:text-gray-400 font-medium">
      {children}
    </ul>
  </div>
}

const SectionItem = ({
  url, children
}: {
  url: string
  children?: ReactNode
}) => {
  return <li className="mb-4">
    <a href={url} className="hover:underline">{children}</a>
  </li>
}

const QuickContactButton = ({
  desc, url, children
}: {
  desc?: string
  url?: string
  children?: ReactNode
}) => {
  return <a href={url} className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
    {children}
    {desc ? <span className="sr-only">{desc}</span> : <></>}
  </a>
}