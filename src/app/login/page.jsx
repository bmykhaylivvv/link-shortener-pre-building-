import { login, signup } from "./services/actions";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">
          Welcome
        </h2>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-black">
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="mt-1 block w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div className="flex space-x-4 mt-6">
          <button
            formAction={login}
            className="flex-1 py-2 rounded bg-blue-200 text-black hover:bg-blue-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Log in
          </button>
          <button
            formAction={signup}
            className="flex-1 py-2 rounded bg-pink-200 text-black hover:bg-pink-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}