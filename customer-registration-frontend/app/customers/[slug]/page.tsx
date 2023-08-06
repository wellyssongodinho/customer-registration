// pages/edit/[id].tsx
import { getCustomer } from '@/api';
import CustomerForm from '@/app/components/CustomerForm';

const EditCustomerPage = async({ params }: { params: { slug: string } }) => {
  const customer = await getCustomer(params.slug);

  return (
    <div>
      {/* <h1 className="text-2xl font-bold mb-4">Edit Customer</h1> */}
      <CustomerForm customer={customer}/>
    </div>
  );
};

export default EditCustomerPage;
