import AdminNavbar from "@/components/AdminNavbar";
import AuthGate from "@/components/AuthGate";

export const dynamic = "force-dynamic";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGate>
      <AdminNavbar />
      {children}
    </AuthGate>
  );
}
