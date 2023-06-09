import {useState, useEffect, createContext} from 'react';
import axios from 'axios';
import Skeleton from './components/Skeleton';
import Item from './components/Item';
import './App.css';

export const AppContext = createContext({});

function App() {
  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />)
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<any[]>([]);
  const fetchCompanies = async () => {
    setIsLoading(true)
    try {
        const { data } = await axios.get(`https://raw.githubusercontent.com/arkdich/mybuh-frontend-test/main/companies.json`)
        setItems(data)

    } catch (error) {

        console.log('error', error)
    } finally {
        setIsLoading(false)
    }
}

useEffect(() => {
    fetchCompanies()
}, [])

console.log(items)
  return (
    <AppContext.Provider value={{items, setItems}} >
      <div className="App">
        <div className="title">Мои организации</div>
        <div className="companies">
        {
          !isLoading ?
              items                              
                  .map(item => (
                      <Item key={item.company_id} logo={item.logo} name={item.company_name} bin={item.company_tin} />
                  ))
              :
              skeletons
        }
        </div>
      </div>
    </AppContext.Provider>
   
  );
}

export default App;
