import {createContext} from 'react';
import './App.css';
import Layout from './Layouts';
import RoutersNav from './Routes/RoutersNav';
import {listOfNavBar} from './Constants/GlobalVariables';

let lang = 1;
let data = [listOfNavBar, lang]
export const MyUserContext = createContext(undefined)

function App() {

    return (
        <>

            <MyUserContext.Provider value={data}>
                <Layout>
                    <RoutersNav/>
                </Layout>
            </MyUserContext.Provider>
        </>

    );
}

export default App;
