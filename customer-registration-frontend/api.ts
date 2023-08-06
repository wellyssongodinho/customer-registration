import { ICustomer, IUpdatedCustomer } from "./types/customers";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getAllCustomers = async (): Promise<ICustomer[]> => {
  const res = await fetch(`${baseUrl}/customers`, { cache: 'no-store' });
  const customers = await res.json();
  return customers;
}

export const getCustomer = async (id: string): Promise<ICustomer> => {
  const res = await fetch(`${baseUrl}/customers/${id}`, { cache: 'no-store' });
  const customers = await res.json();
  return customers;
}

export const addCustomer = async (customer: IUpdatedCustomer) => {
  const res = await fetch(`${baseUrl}/customers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
  })
  const newCustomer = await res.json();
  return newCustomer;
}

export const editCustomer = async (id:string, customer: IUpdatedCustomer) => {
  console.log('baseUrl',baseUrl);
  const res = await fetch(`${baseUrl}/customers/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
  });
  const updatedCustomer = await res.json();
  return updatedCustomer;
}

export const deleteCustomer = async (id: string): Promise<any> => {
  const deletedCustomer = await fetch(`${baseUrl}/customers/${id}`, {
    method: 'DELETE',
  });
  return deletedCustomer;
}