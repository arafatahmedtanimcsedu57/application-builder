import UserService from "../services/UserService";

interface PropsType{
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

const RenderOnAnonymous = ({ children }:PropsType):JSX.Element | null => 
    (!UserService.isLoggedIn()) ? 
        children as JSX.Element: 
        null;

export default RenderOnAnonymous
