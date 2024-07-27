import Image from "next/image";
import { ReactNode } from "react";

const actions = [{
  title: "应用下载",
  desc: "下载最新版小应生活App，适用于 iOS 和 Android",
  // href: "/download",
  href: "https://g.mysit.life/",
}, {
  title: "联系我们",
  desc: "与我们取得联系，电子邮箱，QQ群，微信公众号",
  href: "/contact",
}, {
  title: "关于我们",
  desc: "了解小应生活与我们团队",
  href: "/about",
}]
import MainFramework from "@/components/main"
import Title from "@/components/title";

export default function Home() {
  return (
    <MainFramework>
      <Title
        title="小应生活"
        desc="你的校园生活，从未如此简单"
      />

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {
          actions.map(action => (
            <ActionButton
              key={action.title}
              title={action.title}
              href={action.href}
            >{action.desc}</ActionButton>
          ))
        }
      </div>
    </MainFramework>
  );
}

const ActionButton = ({
  title, href, children,
}: {
  title: ReactNode
  children: ReactNode
  href?: string
}) => {
  return <a
    href={href}
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    rel="noopener noreferrer"
  >
    <h2 className="mb-3 text-2xl font-semibold">
      {`${title} `}
      {href && <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>}
    </h2>
    <p className="m-0 max-w-[30ch] text-sm opacity-60">
      {children}
    </p>
  </a>
}
