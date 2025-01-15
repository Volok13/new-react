
interface UserComponentProps {
    user: IUser
}

const UserComponent = ({user}:UserComponentProps) => {
    return (
        <div>
            <div>{user.username}</div>
        </div>
    );
};

export default UserComponent;