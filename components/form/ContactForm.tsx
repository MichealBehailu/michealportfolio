"use client";

import { Button } from "../ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ContactForm() {
  return (
    <div className="w-full">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="first-name">First Name</FieldLabel>
                  <Input
                    id="first-name"
                    placeholder="Your first name"
                    className="h-10"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
                  <Input
                    id="last-name"
                    placeholder="Your last name"
                    className="h-10"
                    required
                  />
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="h-10"
                  required
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <Textarea
                  id="message"
                  placeholder="Let's work together! I am interested in..."
                  className="min-h-[120px] resize-none"
                  required
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button
              type="submit"
              className="w-full h-11 cursor-pointer font-semibold hover:opacity-90 active:bg-[#EAC048]"
            >
              Send Message
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
