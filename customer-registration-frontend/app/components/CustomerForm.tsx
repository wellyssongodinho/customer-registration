// components/CustomerForm.tsx
'use client'
import { addCustomer, editCustomer } from '@/api';
import { ICustomer, IUpdatedCustomer } from '@/types/customers';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import Modal from './Modal';

interface CustomerFormProps {
  customer?: ICustomer; // Optional customerId prop for editing
}

const options = [
  {
    label: "Blue",
    value: "blue",
  },
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Orange",
    value: "orange",
  },
  {
    label: "Yellow",
    value: "yellow",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Indigo",
    value: "indigo",
  },
  {
    label: "Violet",
    value: "violet",
  },
];

// const CustomerForm: React.FC<CustomerFormProps> = ({ customerId }) => {
const CustomerForm: React.FC<CustomerFormProps> = ({customer}) => {
  const [openModalMessage, setOpenModalMessage] = useState<boolean>(false);
  const [isWithError, setIsWithError] = useState<boolean>(false);
  const [messageResponse, setMessageResponse] = useState<string>('');
  const [formData, setFormData] = useState<IUpdatedCustomer>(customer ? customer :
    {
    name: '',
    cpf: '',
    email: '',
    color: 'blue',
    note: '',
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleMessage = () => {
    console.log('handleMessage');
    setOpenModalMessage(false);
    if (!isWithError)
      router.push('/'); // Redirect to the customer list page
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      let response = null;
      if (customer) {
        console.log('editCustomerForm');
        response = await editCustomer(customer.id, formData);
      } else {
        console.log('AddCustomer');
        response = await addCustomer(formData);
      }
      console.log('response', response);
      if (response.statusCode === 200 || response.statusCode === 201 || response.statusCode === undefined) {
        setIsWithError(false);
        setMessageResponse('Customer information submitted successfully!');
        setOpenModalMessage(true)
        // alert('Customer information submitted successfully!');

        // setFormData({
        //   name: '',
        //   cpf: '',
        //   email: '',
        //   color: '',
        //   note: '',
        // });
        // router.push('/'); // Redirect to the customer list page
      }else{
        // alert(`Customer information submitted successfully, but something went wrong: ${response.message} error ${response.error}`);
        setIsWithError(true);
        setMessageResponse(`Customer information submitted successfully, but something went wrong: ${response.message} error ${response.error}`);
        setOpenModalMessage(true)
      }
    } catch (error) {
      console.error(error);
      alert('Failed to submit customer information.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">{customer ? 'Edit' : 'Add'} Customer</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        {/* <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Color</label>
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div> */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Color</label>
          <select
            name='color'
            value={formData.color}
            onChange={handleChange}
            className="bg-white border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring focus:border-blue-300 "
          >
            {options.map((option) => (
              // eslint-disable-next-line react/jsx-key
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Note</label>
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          {customer ? 'Save Changes' : 'Submit'}
        </button>
      </form>
      <Modal modalOpen={openModalMessage} setModalOpen={setOpenModalMessage} onClose={handleMessage}>
        <h3 className='text-lg'>
          {messageResponse}
        </h3>
        <div className='modal-action'>
          <button onClick={handleMessage} className='btn'>
            Ok
          </button>
        </div>
      </Modal>
    </>
  );
};

export default CustomerForm;