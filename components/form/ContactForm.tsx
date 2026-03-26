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
    firstName: '' as string | null,
    lastName: '' as string | null,
    message: '' as string //if they submit without write=ing message then lets work.... will be sent
  }])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { firstName, lastName, message } = formData[0]

    const encode = (data: string): string => {
      return encodeURIComponent(data)
        .replace(/%20/g, '+')
        .replace(/%2C/gi, ',')
    }

    const formBody = `firstName=${encode(firstName!)}&lastName=${encode(lastName!)}&message=${encode(message)}`

    const formWindow = window.open('', '_blank')
    if (formWindow) {
      formWindow.location.href = `mailto:michealbehailu@gmail.com?subject=Contact Form Submission&body=${formBody}`
    }
    
    
    setFormData([{
          firstName: '',
          lastName: '',
          message: '',

    }])

  }
  
  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
               <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  First Name
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="Your first name here"
                  className="h-10"
                  value={formData[0].firstName || ""}
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
                  placeholder="Your message here..."
                  className="active:border-yellow-500"
                  value={formData[0].message || ""}
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
