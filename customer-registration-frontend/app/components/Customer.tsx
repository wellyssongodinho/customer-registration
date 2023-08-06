"use client";
import { deleteCustomer, editCustomer } from "@/api";
import { ICustomer, IUpdatedCustomer } from "@/types/customers";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";

interface CustomerProps {
  customer: ICustomer;
}

const Customer: React.FC<CustomerProps> = ({ customer }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [formData, setFormData] = useState<IUpdatedCustomer>(customer);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editCustomer(customer.id, formData);
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteCustomer = async (id: string) => {
    const response = await deleteCustomer(id);
    setOpenModalDeleted(false);
    if (response.statusCode === 200 || response.statusCode === 201 || response.statusCode === undefined) {
      // alert('Customer deleted successfully!');
      router.refresh();
    }else
      alert(`Customer information submitted successfully, but something went wrong: ${response.message} error ${response.error}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <tr key={customer.id}>
      <td className='w-full'>{customer.name}</td>
      <td className='w-full'>{customer.cpf}</td>
      <td className='w-full'>{customer.email}</td>
      <td className='w-full'>{customer.color}</td>
      <td className='w-full'>{customer.note}</td>
      <td className='flex gap-5'>
        <FiEdit
          onClick={() => 
            router.push(`/customers/`+customer.id )
            // setOpenModalEdit(true)
          }
          cursor='pointer'
          className='text-blue-500'
          size={25}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className='font-bold text-lg'>Edit task</h3>
            <div className='modal-action'>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Color</label>
                <input
                  type="text"
                  name="preferredColor"
                  value={formData.color}
                  onChange={handleChange}
                  className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring focus:border-blue-300"
                />
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
              <button type='submit' className='btn'>
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2
          onClick={() => setOpenModalDeleted(true)}
          cursor='pointer'
          className='text-red-500'
          size={25}
        />
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <h3 className='text-lg'>
            Are you sure, you want to delete this customer?
          </h3>
          <div className='modal-action'>
            <button onClick={() => handleDeleteCustomer(customer.id)} className='btn'>
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Customer;
