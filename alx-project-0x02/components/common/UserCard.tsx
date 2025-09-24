import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white text-gray-800 rounded-md">
      <span>Name: {name}</span>
      <h1>Email: {email}</h1>
      <p>
        Address: {address.city}, {address.street}, {address.suite},{" "}
        {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
