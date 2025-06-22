import RegisterForm from "./register-form";


export default function RegisterPage() {

  return (
    <div>
      <h1 className="text-xl font-semibold text-center mb-8">Đăng ký</h1>
      <div className="flex justify-center">
        <RegisterForm />

      </div>
    </div>
  );
}
