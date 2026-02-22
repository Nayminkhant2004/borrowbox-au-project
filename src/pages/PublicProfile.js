import { useParams } from "react-router-dom";
import { users } from "../data/users";

export default function PublicProfile() {
  const { id } = useParams();
  const user = users.find((u) => u.id === Number(id));

  if (!user) return <p>User not found</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <img
        src={user.avatar}
        className="w-24 h-24 rounded-full mb-4"
      />
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className="text-gray-600">{user.location}</p>

      <h2 className="mt-4 font-semibold">About</h2>
      <p>{user.bio}</p>

      <h2 className="mt-4 font-semibold">Skills</h2>
      <ul className="list-disc ml-5">
        {user.skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}