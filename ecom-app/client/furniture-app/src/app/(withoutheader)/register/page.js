import RegisterForm from "@/app/components/form-component/RegisterForm";
import AuthShell from '@/app/components/form-component/AuthShell'

export default function Register() {

  return (
    <AuthShell>
      <RegisterForm />
    </AuthShell>
  )
}
