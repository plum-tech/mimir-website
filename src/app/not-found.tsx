import MainFramework from '@/components/main'
import Title from '@/components/title'
import Link from 'next/link'

export default function NotFound() {
  return <MainFramework>
    <Title
      title="未找到您要访问的页面"
      desc={<Link href={"/"}>点此回到主页</Link>}
    />
  </MainFramework>
}