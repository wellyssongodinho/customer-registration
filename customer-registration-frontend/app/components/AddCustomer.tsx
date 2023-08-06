"use client";

import { useRouter } from "next/navigation";
import { AiOutlinePlus } from "react-icons/ai";

const AddCustomer = () => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => router.push('/customers')}
        className='btn btn-primary w-full'
      >
        Add new customer <AiOutlinePlus className='ml-2' size={18} />
      </button>
    </div>
  );
};

export default AddCustomer;
