import React, { useState, useEffect } from 'react';
import './App.css';
import { CustomerList } from './components/CustomerList';
import { getCustomers } from './services/CustomerService';

function App() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      const data = await getCustomers();
      setCustomers(data);
    };

    fetchCustomers();
  }, []);

  const handleSelectCustomer