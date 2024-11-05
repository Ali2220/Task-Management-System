import { useContext, useEffect, useState } from 'react';
import './App.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';
import { data } from 'autoprefixer';

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  //  setting up who is logged in (admin or employee)
  // Ye hum is liye kr rhe hain k jab employee ne login kia aur phr se project k start kia to login hi khula rhe ga, ye is liye hoga kio k humne data localStorage mai save kr dia hai.

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role); // user k andr chla jae ga admin ya employee chla jae ga
      setLoggedInUserData(userData.data); // loggedInUser k andr jo bhi employee hoga wo chla jae ga (Example: Ali, Ahmed, Sara, etc)
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    }
    // Humne Yahn employees pr find is liye lgaya hai kio k employee array jo localStorage se araha aus mai 5 employees hain, to hum aus array mai se employee find kr k aus ki email ko check kr rhe hain kia wo useState wale email k braber hai.
    else if (userData) {
      const employee = userData.find(
        (e) => e.email === email && e.password == password
      );
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        );
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? (
        <AdminDashboard changeUser={setUser} data={loggedInUserData} />
      ) : (
        ''
      )}
      {user == 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : (
        ''
      )}
    </>
  );
}

export default App;
