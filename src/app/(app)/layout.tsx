import Footer from "@/components/footer";
import Header from "@/components/header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className=''>
      <Header active='home' />
      <div className='min-h-screen'>{children}</div>
      <Footer />
    </main>
  );
}
