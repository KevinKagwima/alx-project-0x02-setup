import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users: React.FC<UserProps[]> = ({ users }) => {
  return (
    <>
      <Header />
      <div className="p-4">
        <div className="flex align-middle justify-center">
          <h1>This is the Users page</h1>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-2">
          {users?.map((user: UserProps) => {
            <UserCard
              name={user.name}
              email={user.email}
              address={user.address}
              key={user.id}
              id={user.id}
            />;
          })}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
