import UserService from "../services/UserService";

interface PropsType{
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element) 
}

const RenderOnAuthenticated = ({ children }:PropsType): JSX.Element | null => {
    if(!UserService.isLoggedIn()) UserService.doLogin();
    
    return (UserService.isLoggedIn()) ? 
        (children as JSX.Element)
        : null
};

export default RenderOnAuthenticated
