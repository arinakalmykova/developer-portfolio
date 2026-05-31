interface Props {
  label: string;
  register: any;
  name: string;
  error?: string;
}

export const ContactInput = ({ label, register, name, error }: Props) => {
  return (
    <div>
      <label>{label}</label>
      <input {...register(name)} />
      {error && <span>{error}</span>}
    </div>
  );
};