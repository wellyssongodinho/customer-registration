import { getAllCustomers } from "@/api";
import AddCustomer from "@/app/components/AddCustomer";
import CustomerList from "@/app/components/CustomerList";

export default async function Home() {
  const customer = await getAllCustomers();

  return (
    <main className='max-w-6xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Customers Register App</h1>
        <AddCustomer />
      </div>
      <CustomerList customers={customer} />
    </main>
  );
}
