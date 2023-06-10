import { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from './components/Skeleton';
import Item from './components/Item';
import './App.scss';
import Modal from './components/UI/Modal'

function App() {
  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />)
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<any[]>([]);
  const [editName, setEditName] = useState('');
  const fetchCompanies = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios.get(`https://raw.githubusercontent.com/arkdich/mybuh-frontend-test/main/companies.json`)
      setItems(data)

    } catch (error) {

      console.log('error', error)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }
  }

  useEffect(() => {
    fetchCompanies()
  }, [])

  return (
    <div className="App">
      <div className="title">Мои организации</div>
      <div className="companies">
        {
          !isLoading ?
            items
              .map(item => (
                <Item
                  id={item.company_id}
                  key={item.company_id}
                  logo={item.logo}
                  name={item.company_name}
                  bin={item.company_tin}
                  onEdit={() => setEditName(item.company_name)}
                  onDrop={() => setItems(items.filter(el => el.company_id !== item.company_id))}
                />
              ))
            :
            skeletons
        }
      </div>
      <Modal
        isShow={editName}
        title={editName}
        onClose={() => setEditName('')}
      >
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ducimus!</h3>
      </Modal>
    </div>

  );
}

export default App;
