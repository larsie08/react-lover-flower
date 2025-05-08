import { FC, memo } from "react";
import { FormSectionProps } from "../../FormTypes/form.types";

export const FormSection: FC<FormSectionProps> = memo(({ title, children }) => (
  <section className="form-section flex flex-col gap-1 [&:not(:first-child)]:mt-16">
    <h3 className="section-title text-[14px] text-light-turquoise font-bold uppercase">
      {title}
    </h3>
    <div className="flex flex-col gap-5 mt-5">{children}</div>
  </section>
));
