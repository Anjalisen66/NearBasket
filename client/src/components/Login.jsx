import React from 'react'
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {
    const { setShowUserLogin, setUser, axios, navigate } = useAppContext();
    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const onSubmitHandler = async (event) => {
        try {
            event.preventDefault();

            if (loading) return; // Prevent multiple submissions

            // Basic validation
            if (!email || !password) {
                toast.error('Please fill in all required fields');
                return;
            }

            if (state === 'register' && !name) {
                toast.error('Please enter your name');
                return;
            }

            setLoading(true);

            const { data } = await axios.post(`/api/user/${state}`,{
                name,email,password
            },
                                              {
                withCredentials: true,
            })
            if (data.success) {
                navigate('/')
                setUser(data.user);
                setShowUserLogin(false);
            } else {
                toast.error(data.message)
            }
            
        } catch (error) {
            console.error('Login/Register error:', error);
            if (error.response?.data?.message) {
                toast.error(error.response.data.message);
            } else if (error.message.includes('Network Error')) {
                toast.error('Network error. Please check your connection and try again.');
            } else if (error.message.includes('CORS')) {
                toast.error('Server configuration error. Please try again later.');
            } else {
                toast.error(error.message || 'An unexpected error occurred');
            }
        } finally {
            setLoading(false);
        }

    }

    return (
        <div onClick={() => setShowUserLogin(false)} className='fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center text-sm text-gray-600 bg-black/50'>
            <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
                <p className="text-2xl font-medium m-auto">
                    <span className="text-primary">User</span> {state === "login" ? "Login" : "Sign Up"}
                </p>
                {state === "register" && (
                    <div className="w-full">
                        <p>Name</p>
                        <input onChange={(e) => setName(e.target.value)} value={name} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type="text" required />
                    </div>
                )}
                <div className="w-full ">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type="email" required />
                </div>
                <div className="w-full ">
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type="password" required />
                </div>
                {state === "register" ? (
                    <p>
                        Already have account? <span onClick={() => setState("login")} className="text-primary cursor-pointer">click here</span>
                    </p>
                ) : (
                    <p>
                        Create an account? <span onClick={() => setState("register")} className="text-primary cursor-pointer">click here</span>
                    </p>
                )}
                <button
                    disabled={loading}
                    className={`w-full py-2 rounded-md transition-all text-white ${
                        loading
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-primary hover:bg-primary-dull cursor-pointer'
                    }`}
                >
                    {loading ? 'Please wait...' : (state === "register" ? "Create Account" : "Login")}
                </button>
            </form>
        </div>
    )
}

export default Login
