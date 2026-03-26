import { useState } from "react";
import { Button } from "../ui/button";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "../ui/field";
import { Input } from "../ui/input";
import {Textarea} from '../ui/textarea'


export default function ContactForm() {
  const [formData, setFormData] = useState([{
    firstName: '',
    lastName: '' as string | null,
    message: '' as string | null
  }])

  const 
  return (
    <div className="w-full max-w-md">
      <form onSubmit={(e) => e.preventDefault()}>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  First Name
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="Your first name here"
                  className="h-10"
                  required
                  value={formData[0].firstName}
                  onChange={(e) => setFormData([{...formData[0], firstName: e.target.value}])}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  Last Name
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="Your last name here"
                  className="h-10"
                  value={formData[0].lastName || ""}
                  onChange={(e) => setFormData([{...formData[0], lastName: e.target.value}])}
                />

              </Field>
              
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  Message
                </FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  placeholder="Let's work together! I am interested."
                  className="active:border-yellow-500"
                  value={formData[0].message || "Let's work together! I am interested."}
                  onChange={(e) => setFormData([{...formData[0], message: e.target.value}])}
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal" >
            <Button type="submit" className='w-full h-10 cursor-pointer hover:opacity-75 active:bg-[#EAC048]'>Contact</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
