
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the requests page on initial load
    navigate('/requests');
  }, [navigate]);
  
  return null;
};

export default Index;
