import AdminHeader from "@/components/AdminHeader";

export default function AdminLayout({ children }) {
  const isSideBar = true;
  return (
    <section>
      <AdminHeader />
      {children}
    </section>
  );
}
