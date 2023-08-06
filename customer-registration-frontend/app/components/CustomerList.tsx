import { ICustomer } from "@/types/customers";
import React from "react";
import Customer from "./Customer";

interface CustomerListProps {
  customers: ICustomer[];
}

const CustomerList: React.FC<CustomerListProps> = ({ customers }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>CPF</th>
            <th>E-mail</th>
            <th>Preferred Color</th>
            <th>Note</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <Customer key={customer.id} customer={customer} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
