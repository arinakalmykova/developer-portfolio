import { ContactInput, ContactTextarea } from "@/entities";
import { Button } from "@/shared";
import { useSendContactForm } from "@/features";

export const ContactForm = () => {
  const { register, errors, isSubmitting, onSubmit } =
    useSendContactForm();

  return (
    <section>
      <h2>Связаться со мной</h2>

      <form onSubmit={onSubmit}>
        <ContactInput
          label="Имя"
          register={register}
          name="name"
          error={errors.name?.message}
        />

        <ContactInput
          label="Email"
          register={register}
          name="email"
          error={errors.email?.message}
        />

        <ContactTextarea
          label="Комментарий"
          register={register}
          name="comment"
          error={errors.comment?.message}
        />

        <Button disabled={isSubmitting}>
          {isSubmitting ? "Отправка..." : "Отправить"}
        </Button>
      </form>
    </section>
  );
};