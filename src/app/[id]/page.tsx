interface User {
  id: number;
  name: string;
  phone: string;
}
interface Props {
  params: {
    id: string;
  };
}
const DynamicUser = async (props: Props) => {
  console.log(props);
  const url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}`);
  const response: User = await url.json();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">User Details</h1>
      <p className="text-gray-700"><strong>Name:</strong> {response.name}</p>
      <p className="text-gray-700"><strong>Phone:</strong> {response.phone}</p>
    </div>
  );
};
export default DynamicUser;
