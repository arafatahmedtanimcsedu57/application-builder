import PropTypes from 'prop-types'
import UserService from "../services/UserService";

interface PropsType {
  roles: string[];
  showNotAllowed: boolean; 
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

const RenderOnRole = ({ roles, showNotAllowed, children }: PropsType) => (
  UserService.hasRole(roles)) ? children : showNotAllowed ? <></> : null;

RenderOnRole.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default RenderOnRole
