import dynamic from 'next/dynamic'
const Sidebar = dynamic(() => import('@/components/admin/Sidebar'), { ssr: false })

export const metadata = {
  title: "Blog Admin Pannel",
  description: "This is Blog Admin Pannel",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Sidebar />
      <div className="admin-right-part">{children}</div>
    </>
  );
}
