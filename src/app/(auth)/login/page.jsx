import LoginForm from "./login-form";

export default function LoginPage() {
  return (
    <div>
       <h1 className="text-xl font-semibold text-center mb-8">Đăng nhập</h1>
            <div className="flex justify-center">
              <LoginForm />
            </div>
    </div>
  );
}