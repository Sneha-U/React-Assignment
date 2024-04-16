import React, { useState } from 'react';
import { Customer } from '../types/Customer';
import { FixedSizeList as List } from 'react-window';

interface CustomerListProps {
  customers: Customer[];
  onSelectCustomer: (customer: Customer) => void;
}

const Row = ({ data, index, style }: any) => {
  const customer = data[index];
  return (
    <div style={style} onClick={() => data.onSelectCustomer(customer)}>
      {customer.name} ({customer.title})
    </div>
  );
};

export const CustomerList: React.FC<CustomerListProps> = ({ customers, onSelectCustomer }) => {
  return (
    <List
      height={500}
      itemCount={customers.length}
      itemSize={35}
      width={300}
      className="list"
    >
      {({ index, style }) => <Row data={customers} index={index} style={style} onSelectCustomer={onSelectCustomer} />}
    </List>
  );
};