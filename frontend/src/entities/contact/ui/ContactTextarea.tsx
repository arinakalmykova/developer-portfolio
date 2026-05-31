interface Props {
  label: string;
  register: any;
  name: string;
  error?: string;
}

export const ContactTextarea = ({ label, register, name, error }: Props) => {
  return (
    <div>
      <label>{label}</label>
      <textarea {...register(name)} />
      {error && <span>{error}</span>}
    </div>
  );
};