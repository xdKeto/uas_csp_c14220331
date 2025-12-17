'use client';

import { register } from "@/actions/auth";
import Link from "next/link";
import Swal from 'sweetalert2';
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    const res = await register(formData);

    if (res?.error) {
      Swal.fire({
        icon: 'error',
        title: 'Registrasi Gagal',
        text: res.error,
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Registrasi Berhasil',
        text: 'Silahkan login...',
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        router.push('/login');
      });
    }
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">Register</h1>
        <form action={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Masukkan Email"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-black placeholder:text-gray-500"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              min={6}
              placeholder="Masukkan Password"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-black placeholder:text-gray-500"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
