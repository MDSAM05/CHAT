import {SetStateAction, Dispatch, createContext, useState, useEffect,ReactNode, useContext} from "react";

type AuthUserType  = {
   id: String,
   fullName: String,
   email: String, 
   profilepic: String,
   gender: String,
}
const AuthContext = createContext <{
    authUser: AuthUserType | null,
    setAuthUser: Dispatch<SetStateAction<AuthUserType | null>>;
    isLoading: Boolean;
}>({
    authUser: null,
    setAuthUser: () => {},
    isLoading:true,
}
);

export const useAuthcontext = () =>
{
    return useContext(AuthContext);
}
export const AuthContextProvider  = ({ children} : {children: ReactNode})  =>
{
    const [authUser, setAuthUser] = useState <AuthUserType | null>(null)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchuser = async () =>
      {
        try{
           const res = await fetch("/api/auth/getme");

           const data = await res.json();
           setAuthUser(data);
        }
        catch(error)
        {
            console.log(error);
        }
        finally{
            setIsLoading(false);
        }
      }
      fetchuser();
    }, [])

    return(
        <AuthContext.Provider
         value = {{
           authUser,
           isLoading,
           setAuthUser
        }}>
        {children}
        </AuthContext.Provider>
    );
}
