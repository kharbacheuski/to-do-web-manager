import { UserContext } from "../../Main";
import { useEffect, useCallback, useState, ReactNode, Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom"

interface AuthGuardProps {
    children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = (props) => {
    const { children } = props;

    const navigate = useNavigate()

    const {user, setUser} = useContext(UserContext)

    const [checked, setChecked] = useState<boolean>(false);

    const check = useCallback(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login")
            setUser(prev => {
                return {
                    ...prev,
                    isAuthenticated: false
                }
            })
        } 
        else {
            setChecked(true)
            setUser(prev => {
                return {
                    ...prev,
                    isAuthenticated: true
                }
            })
        }
    }, [user.isAuthenticated]);
  
    useEffect(() => {
        check();
    }, [user.isAuthenticated]);

    return <Fragment>{children}</Fragment>
}

export default AuthGuard