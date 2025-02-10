import { IFormInput } from "@/app/(mainLayout)/contact/page";
import DeleteButton from "@/components/DeleteButton";

const MessageManagement = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/message`);
  const messages = await res.json();

  console.log(await messages);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {messages?.map((message: IFormInput, index: number) => (
              <tr key={index} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.message}</td>
                <td>
                  <DeleteButton id={message._id} />
                </td>
              </tr>
            ))}

            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessageManagement;
