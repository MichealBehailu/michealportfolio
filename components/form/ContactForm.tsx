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
  return (
    <div className="w-full max-w-md">
      <form>
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
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  Last Name
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="Your last name here"
                  required
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
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal" >
            <Button type="submit" className='w-full'>Contact</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
