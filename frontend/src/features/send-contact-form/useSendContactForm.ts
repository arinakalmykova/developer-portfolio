import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/entities";
import type { ContactSchemaType } from "@/entities";
import { sendContactForm } from "@/entities";

export const useSendContactForm = () => {
  const form = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactSchemaType) => {
    try {
      await sendContactForm(data);
      alert("Сообщение отправлено");
      form.reset();
    } catch (e) {
      alert("Ошибка отправки");
    }
  };

  return {
    ...form,
    errors:form.formState.errors,
    isSubmitting:form.formState.isSubmitting,
    onSubmit: form.handleSubmit(onSubmit),
  };
};