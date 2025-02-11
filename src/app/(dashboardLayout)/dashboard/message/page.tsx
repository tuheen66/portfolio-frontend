import { IFormInput } from "@/app/(mainLayout)/contact/page";
import DeleteMessageButton from "@/components/DeleteMessageButton";

const MessageManagement = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/message`);
  const messages = await res.json();

  return (
    <div className="min-h-screen my-12">
      <h1 className="text-3xl text-center my-12">All Messages</h1>
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
                  <DeleteMessageButton id={message._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessageManagement;
